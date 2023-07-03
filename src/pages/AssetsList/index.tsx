import PageTitleWrapper from "../../components/UI/PageTitleWrapper";
import PageHeader from "./components/PageHeader";
import { Grid, Container } from "@mui/material";
import RecentOrders from "./components/RecentOrders";
const index = () => {
  return (
    <>
      {/* <Helmet> */}
      <title>Assests</title>
      {/* </Helmet> */}
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default index;
