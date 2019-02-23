import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'
import top from './pics/top.jpeg'
import selector from './pics/selector.jpeg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import scanTwoD from './pics/scantwod.jpeg';
import axios from 'axios';




class App extends React.Component{
    state={showData:'Waiting for cut'};
     checkApi=async ()=>{
       var output='Waiting for cut';
       var temp= '';
        const response = await axios.get('http://18.204.74.54:5000/get_status').then((response) => {
        console.log(response.data);
      temp = response.data;
    }).catch((error) => {
        alert(error);
        console.log(error, 'lol');
   });
   if(temp!=="not_cut"){
    output = "Dose Taken";
      this.setState({showData:output});
     }
    }
    componentDidMount(){
    this.checkApi();
    setInterval(this.checkApi, 5000);
    }
render(){
    return (
        <div style={{width:'100vw', height:'100vh'}}>
        <CssBaseline/>
        <div style={{width:'100%'}}>
        <img
        width="100%"
        alt="top"
        src = {top}/>
      </div>
      <div>
        <p style={{  marginLeft:'10px',  color: '#666'}}>My Adherence</p>
        </div>
        <div style={{width:'100%'}}>
        <img
        width="100%"
        alt="top"
        src = {selector}/>
      </div>
      <div>
        <p style={{  marginLeft:'10px',  color: '#666'}}>Upcoming Dose</p>
        </div>
        <Grid container spacing={24}>
        <Grid item xs={9}>
        <Paper style={{padding:'10px', marginLeft:'10px'}} >
        {/* <div style={{height:'5px'}}/> */}
        <Typography component="p">
        Dose No. 4
        </Typography>
        <Typography component="p">
        Tuesday, 2nd October
        </Typography>
        <Typography component="p">
        9:00 AM After Food
        </Typography>
        {/* <div style={{height:'5px'}}/> */}
      </Paper>
        </Grid>
        <Grid item xs style={{marginRight:'10px'}}>
          <Paper >
        <img
        width="100%"
        alt="top"
        src = {scanTwoD}/></Paper>
        </Grid>
      </Grid>
      <div>
        <p style={{  marginLeft:'10px',  color: '#666'}}>Next Refill</p>
        </div>
        <Grid container spacing={24}>
        <Grid item xs={12}>
        <Paper style={{padding:'10px', marginLeft:'10px',marginRight:'10px'}} >
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        >
        <Grid>
            Refill No.
        </Grid>

        <Grid>
            2
        </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        >
        <Grid>
        Delivery Date
            </Grid>

            <Grid>
                1/11/2018
            </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        >
        <Grid>
            Delivery Status
            </Grid>

            <Grid>
                <div style={{color:'#7CFC00'}}>In Packaging</div>
            </Grid>
        </Grid>
      </Paper>
        </Grid>
      </Grid>
      <div>
          <h1 style={{textAlign:'center'}}>{this.state.showData}</h1>
          </div>
      </div>
    );
}
}

ReactDOM.render(<App/>, document.querySelector('#root'));