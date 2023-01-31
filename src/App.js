import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import Result from './components/Result/Result';
import Slider from './components/Slider/Slider';
import Tenure from './components/Tenure/Tenure';

function App() {
  const [data,setData] = useState({
    homeValue :3000,
    downPayment :3000 * 0.2,
    loanAmount :3000 * 0.8,
    loanTerm :5,
    interest :5,
  });
  return (
    <div className="" >
      <NavBar></NavBar>
      <Container  sx={{marginTop :2}}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6} >
            <Slider data={data} setData={setData}></Slider>
            <Tenure data={data} setData={setData}></Tenure>
          </Grid>
          <Grid item  xs={12} md={6}>
            <Result data={data} setData={setData}></Result>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
