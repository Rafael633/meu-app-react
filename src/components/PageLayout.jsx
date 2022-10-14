import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Root from '../routes/root';
 
export const PageLayout = () => (
  <Grid container>
    <Grid item md={4}>
      <Root />
    </Grid>    
    <Grid item md={8}>
      <Outlet />
    </Grid>     
  </Grid>
);