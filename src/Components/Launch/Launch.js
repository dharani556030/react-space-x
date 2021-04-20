import React from 'react';
import './styles.css';
class Launch extends React.Component{
render(){
    return(
        <div className="launch">
            <img src={this.props.banner} alt="Launch" />  
            <div className="content">
               <div className="info">
                  <h1>{this.props.title}</h1>
                  <h1>{this.props.launchDate}</h1>
               </div>
               <p>{this.props.description}</p>
            </div>
        </div>
    );
}

}
export default Launch;