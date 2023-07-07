import { Typography, Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function PageHeader() {
  const theme = useTheme();

  // const { data } = useQuery<any>({
  //   queryKey: ["user"]
  // });

  const data = {
    data: {
      first_name: "",
      avatar: "",
      last_name: ""
    }
  };

  const user = data?.data;

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user?.first_name}
          src={user?.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user?.first_name} {user?.last_name}!
        </Typography>
        <Typography variant="subtitle2">Today is a good day!</Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
