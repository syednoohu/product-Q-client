import { Grid } from '@mui/material'
import React from 'react'
import Product from '../components/Product'
import './home.css'
import products from  '../data/products'

function Home() {
  return (
    <div className='home'>
     
      <Grid container spacing={2}>
      { products.map( prod => 
            <Grid key = {prod.id} item xs={12} sm={6}  md={4} lg={3}> 
             <Product { ...prod } />
            </Grid>
          ) }
      </Grid>
    </div>
  )
}

export default Home