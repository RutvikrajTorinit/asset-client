import { Card } from "@mui/material";
import RecentOrdersTable from "./RecentOrderTable";

const RecentOrders = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: "assets",
  //   queryFn: () => getAllAssets()
  // });

  // if (isLoading) return <h1>Loading...</h1>;

  const data = {
    data: [
      {
        asset_id: 1,
        asset_name: "Asus Laptop",
        asset_type: "Laptop",
        assigned_to: "Ayush Mishra",
        status: "allocated", // available allocated under_maintenance,
        model: "",
        serial_number: "",
        brand: "",
        description: ""
      }
    ]
  };

  return (
    <Card>
      <RecentOrdersTable assets={data.data} />
    </Card>
  );
};

export default RecentOrders;
