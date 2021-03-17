import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ViewUser extends Component{
      constructor(props){
            super(props);
            this.state = {
                  users : [],
                  newUser : []
            }
      }
       
      componentDidMount(){
            fetch(`${process.env.REACT_APP_BACKEND}/getusers`,{
                  method : 'GET'
            })
            .then(res=>res.json())
            .then(result=>{
                  this.setState({users: result})
                  console.log('DATA FETCHED SUCCESSFULLY')
            })
      }

      updateUser(user){
            this.setState({
                  newUser : user
            })
      }

      render(){
            const UserList = ()=>{
                  return (
                        
                              <tbody>
                                          {users.map((user)=>(
                                                
                                                <tr key={user.id}>
                                                
                                                      <td>{user.firstName}</td>
                                                      <td> {user.lastName} </td>
                                                      <td> {user.email} </td>
                                                      <td> {user.bio} </td>
                                                      <td> {user.dob} </td>
                                                      <td><Link className="waves-effect waves-light btn blue accent-3" to={"edituser/"+user._id}>Edit</Link></td>
                                                      {/* <td><a className="waves-effect waves-light btn  red darken-3">Delete</a></td> */}
                                                </tr>
                                          ))}
                                    </tbody>
                        
                  )
            }
            const users = this.state.users;
            return(
                  <>
                  <h1>ALL USERS</h1>
                        <table className="striped centered" >
                              <thead>
                                    <tr>
                                          <th>First Name</th>
                                          <th>Last Name</th>
                                          <th>Email</th>
                                          <th>Bio</th>
                                          <th>Date of Birth</th>
                                    </tr>
                                    </thead>
                                    <UserList />  
                        </table>
                  </>
            )
      }
}

export default ViewUser;