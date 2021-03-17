import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
      render(){
            return(
                  <div>
                        <button><Link className="waves-effect waves-light btn-large" to="/createuser">CREATE USER</Link></button>
                        <button><Link className="waves-effect waves-light btn-large" to="/viewusers">VIEW USERS</Link></button>
                  </div>
            )
      }
}

export default Home;