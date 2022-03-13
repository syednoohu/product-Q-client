import { Dialog, DialogContent, DialogTitle, Grid, TextField, Button } from '@mui/material'
import { red } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import { margin, width } from '@mui/system'
import React, { useState, useEffect } from 'react'
import './enquiryForm.css'


const useStyles = makeStyles(theme => ({
    root : {
      '& .MuiDialog-container' : {
        // border : '13px solid red',
      },
      '& .MuiFormControl-root' : {
        margin:'10px 0',
        width : '90%',
        // border : '1px solid red',

      },
      '& .MuiButton-root' : {
        margin : '20px 20px 0 0'
      }
    },
    pageContent: {
         width: '100%',
         //  border : '1px solid red',
    },
    dc: {
      // border : '1px solid green',
    }, 
    redColor: {
        color : 'red'
    },          
  }));
  

  
const initialValues = {
  name    : '',
  phone   : '',
  email   : '',
  product : '',
  qty     : 0,
  desc    : '',
  remark  :''
}

function EnquiryForm(props) {
  const classes = useStyles()
  const { title, content, openEnquiryform, setOpenEnquiryform} = props;
  const [formData, setFormData] = useState(initialValues)
 
  const handleChange = (e) =>{
    const { name, value } = e.target
    setFormData({
      ...formData, [name] : value
    })
  }
  return (
    <Dialog maxWidth='md' open = {openEnquiryform} className = {classes.root} classes = {{ paper :classes.pageContent }}>
    {/* // <Dialog maxWidth='md' open = {openEnquiryform} className = {classes.root} PaperProps={{ sx: { width: "30%", height: "100%" } }}> */}
      <DialogTitle className= {classes.redColor}>
        {title}
      </DialogTitle>
      <DialogContent dividers className = {classes.dc} >
        <form >
          <Grid container >
            <Grid item xs={6} >
              <TextField 
              type='text'
                variant='outlined' 
                label='Name' 
                value ={formData.name} 
                name='name'
                onChange={handleChange}> 
              </TextField>
            </Grid>           
  
            <Grid item xs={6} >
              <TextField 
                type='number'
                variant='outlined' 
                label='phone' 
                value ={formData.phone} 
                name='phone'
                onChange={handleChange}> 
              </TextField>   
            </Grid>         

            <Grid item xs={6}>
              <TextField 
                type='email'
                variant='outlined' 
                label='email' 
                value ={formData.email} 
                name='email'
                onChange={handleChange}> 
              </TextField>
            </Grid>           

            <Grid item xs={6} >
              <TextField 
                variant='outlined' 
                label='product' 
                value ={formData.product} 
                name='product'
                onChange={handleChange}> 
              </TextField>   
            </Grid>

            <Grid item xs={6}>
              <TextField 
                variant='outlined' 
                label='Desc' 
                value ={formData.desc} 
                name='Desc'
                onChange={handleChange}> 
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField 
                type="number" 
                variant='outlined' 
                label='qty' 
                value ={formData.qty} 
                name='qty'
                onChange={handleChange}> 
              </TextField>   
            </Grid>
            <Grid item xs={12}>
              <TextField 
                type="text" 
                variant='outlined' 
                label='remark' 
                value ={formData.remark} 
                name='remark'
                onChange={handleChange}> 
              </TextField>   
            </Grid>

          </Grid>
          <Button variant="contained" onClick={() => setOpenEnquiryform(false)}> Submit </Button>
          <Button variant="contained" color="error" onClick={() => setOpenEnquiryform(false)}> Cancel </Button>
        </form>
      </DialogContent>        

        
      </Dialog>
  )
}

export default EnquiryForm