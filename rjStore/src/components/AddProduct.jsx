import {  Button, Paper, TextField, Typography} from "@mui/material"
const AddProduct = () => {
  return (
    <div className="productcontainer">
        <center>
        <Paper elevation={10} style={{width:"60vw",padding:'15px'}} >
       
             <Typography variant="h5">Add Products</Typography>
              <form style={{display:"flex",flexDirection:"column",width:"80%"}}>
             <TextField id="outlined-basic" style={{margin:'10px 0px'}}label="Product name" variant="outlined" />
             <TextField id="outlined-basic" style={{margin:'10px 0px'}}label="Product Description" variant="outlined" />
             <TextField id="outlined-basic" style={{margin:'10px 0px'}}label="Product price" variant="outlined" type="number" />
             <TextField id="outlined-basic" style={{margin:'10px 0px'}}label="Product count" variant="outlined" type="number"/>
             <TextField id="outlined-basic" style={{margin:'10px 0px'}}variant="outlined" type="file" />
            
             <Button variant="contained" style={{height:'50px',marginTop:'5px'}}>Submit</Button>
             
       </form>
            </Paper> 
            </center>
    </div>
  )
}

export default AddProduct