import { Grid } from '@mui/material'
import React from 'react'
import Product from '../components/Product'
import './home.css'
function Home() {
  return (
    <div className='home'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
         <Product/>
        </Grid>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
         <Product/>
        </Grid>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
         <Product/>
        </Grid>
        <Grid item xs={12} sm={6}  md={4} lg={3}> 
         <Product/>
        </Grid>

      </Grid>
    </div>
  )
}

export default Home