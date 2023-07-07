import { FC, ChangeEvent, useState } from "react";
// import { format } from "date-fns";
// import numeral from "numeral";
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from "@mui/material";

import Label from "../../../components/UI/Label";
import { CryptoOrder, ASSET_STATUS } from "../types";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BulkActions from "./BulkAction";

interface RecentOrdersTableProps {
  className?: string;
  assets: Array<any>;
}

interface Filters {
  status?: ASSET_STATUS;
}

const getStatusLabel = (assetStatus: ASSET_STATUS): JSX.Element => {
  const map: {
    [x: string]: {
      text: string;
      color:
        | "black"
        | "error"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning";
    };
  } = {
    under_maintenance: {
      text: "Under Maintenance",
      color: "error"
    },
    available: {
      text: "Available",
      color: "success"
    },
    allocated: {
      text: "Allocated",
      color: "warning"
    },
    all: {
      text: "All",
      color: "info"
    }
  };

  const {
    text,
    color
  }: {
    text: string;
    color:
      | "black"
      | "error"
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning";
  } = map[assetStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  assets: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return assets.filter((asset) => {
    let matches = true;

    if (filters.status && asset.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (assets: any[], page: number, limit: number): any[] => {
  return assets.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ assets }) => {
  const [selectedAsset, setSelectedAsset] = useState<string[]>([]);
  const selectedBulkActions = selectedAsset.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({});

  const statusOptions = [
    {
      id: "all",
      name: "All"
    },
    {
      id: "available",
      name: "Available"
    },
    {
      id: "allocated",
      name: "Allocated"
    },
    {
      id: "under_maintenance",
      name: "Under Maintance"
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value: any = null;

    if (e.target.value !== "all") {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedAsset(
      event.target.checked ? assets.map((asset) => asset.asset_id) : []
    );
  };

  const handleSelectOneAsset = (
    event: ChangeEvent<HTMLInputElement>,
    assetID: string
  ): void => {
    if (!selectedAsset.includes(assetID)) {
      setSelectedAsset((prevSelected) => [...prevSelected, assetID]);
    } else {
      setSelectedAsset((prevSelected) =>
        prevSelected.filter((id) => id !== assetID)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredAssets = applyFilters(assets, filters);

  const paginatedAssets = applyPagination(filteredAssets, page, limit);

  const selectedSomeAssets =
    selectedAsset.length > 0 && selectedAsset.length < assets.length;

  const selectedAllAssets = selectedAsset.length === assets.length;

  const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || "all"}
                  //   @ts-expect-error sch
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Asset List"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllAssets}
                  indeterminate={selectedSomeAssets}
                  onChange={handleSelectAllCryptoOrders}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell>Purchase cost</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedAssets.map((asset) => {
              const isAssetSelected = selectedAsset.includes(asset?.asset_id);
              return (
                <TableRow
                  hover
                  key={asset?.asset_id}
                  selected={isAssetSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isAssetSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneAsset(event, asset?.asset_id)
                      }
                      value={isAssetSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {asset.asset_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {asset.asset_type}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {asset.assigned_to || "--"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {asset.purchase_cost}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {asset.location}
                    </Typography>
                  </TableCell>

                  <TableCell>{getStatusLabel(asset.status)}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredAssets.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

// RecentOrdersTable.propTypes = {
//   cryptoOrders: PropTypes.array.isRequired
// };

// RecentOrdersTable.defaultProps = {
//   cryptoOrders: []
// };

export default RecentOrdersTable;
