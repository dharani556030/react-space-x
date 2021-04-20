import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import './styles.css';
import { Zoom,Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const zoomOutProperties = {
    indicators: true,
    arrows:true,
    infinite:true,
    transitionDuration: 500,
    duration:1000,
    scale: 0.4
  }
 class LaunchView extends React.Component{

    state={
        launch:{
            links:{flickr_images:[]}
        }
    }
    componentDidMount(){
        const flight_no=this.props.match.params.flight_number;
        this.getLaunch(flight_no);
    }
    getLaunch=(flight_no)=>{
        axios.get('https://api.spacexdata.com/v3/launches/'+flight_no)
  .then((response) => {
    // handle success
    this.setState({launch: response.data});
    console.log(response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })

    }

    launchAttribute=(title,key)=>{
       const value=this.state.launch[key];
       return(<div className="attribute">
                <h1>{title}</h1>
                <h1>{value}</h1>
     </div>);
    }
    render(){
        const hasimages=this.state.launch.links.flickr_images.length>0;
      return(
          <div className="launch-view">
             
            {this.launchAttribute("Mission name","mission_name")}
            {this.launchAttribute("Flight Number","flight_number")}
            {this.launchAttribute("Launch Date","launch_date_local")}
            
          {hasimages &&  ( <Zoom {...zoomOutProperties}>
        {this.state.launch.links.flickr_images.map((each, index) => (
          
            <img key={index}  style={{ objectFit: "cover", width: "100%" }} src={each} />
          
        ))}
      </Zoom>)}
      <p>{this.state.launch.details}</p>
          </div>  
      );

    }
 }

 export default withRouter(LaunchView);