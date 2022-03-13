import { Grid } from '@mui/material'
import React, { useState } from 'react'

import Product from '../components/Product'
import './home.css'
import products from  '../data/products'
import EnquiryForm from '../components/EnquiryForm'

function Home() {
  const [openEnquiryform, setOpenEnquiryform] = useState(false)
  
  const openEnquiry =  (id) => {
    setOpenEnquiryform(true)
  }
  return (
    <div className='home'>
     
      <Grid container spacing={2}>
      { products.map( prod => 
            <Grid key = {prod.id} item xs={12} sm={6}  md={4} lg={3}> 
             <Product { ...prod} openEnquiry ={openEnquiry}   />
            </Grid>
          ) }
      </Grid>
      <EnquiryForm openEnquiryform = {openEnquiryform } setOpenEnquiryform ={setOpenEnquiryform }  title ='Title of the' content = 'Content of the'/>

      </div>
  )
}

export default Home


