import React from 'react';
import Launch from '../Launch/Launch';
import './styles.css';
import * as axios from 'axios';
import {Link} from "react-router-dom";
class LaunchList extends React.Component{
    state={
   launches:[]
    }
    componentDidMount=()=>{
        this.getLaunches()
    }
    getLaunches=()=>{
  axios.get('https://api.spacexdata.com/v3/launches')
  .then((response) => {
    // handle success
    this.setState({launches: response.data});
    console.log(response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })

        }
      
      getLaunchList=()=>{
          const ll=this.state.launches.map((launch,i)=>{
              const image= launch.links.flickr_images.length===0?"https://images.hdqwalls.com/download/rocket-heading-towards-space-0c-1920x1080.jpg":launch.links.flickr_images[0];
              return (
                  <Link key={i} to={"/launch/"+launch.flight_number}>
                  <Launch  title={launch.mission_name} launchDate={launch.launch_date_local} description={launch.details}
                      banner={image}
                  />
                  </Link>
              );
          });
          return ll;
      }  
     

    
render(){
    return(
     <div className="launch-list">
       {this.getLaunchList()}
     </div>
    );
}
}

export default LaunchList;