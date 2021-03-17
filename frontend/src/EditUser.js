
import React, { Component } from 'react';
import {withRouter} from 'react-router';


class EditUser extends Component{

      constructor(props){
            super(props);
            this.state = {
                  user : {},
                  updatedUser : {
                      firstName : '',
                      lastName : '',
                      email : '',
                      bio : '',
                      dob : ''
                  }
            }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
            const id = this.props.match.params.id;
            fetch(`${process.env.REACT_APP_BACKEND}/finduser/${id}`,{
                  method : 'GET',

            }).then(res=>res.json())
                  .then(result=>{
                  this.setState({user: result})
                  })
      }

      handleChange(event){
            const {name, value} = event.target;
             const newUser = {name, value};
            
            //  this.setState((prevState)=>({
            //      updatedUser:{...prevState.updatedUser,
            //     [name] : value}
            //  }))
                this.setState({user : newUser,
                            updatedUser : newUser})
            console.log(this.state.updatedUser)
            }

      handleSubmit(event){
            event.preventDefault();
            fetch(`${process.env.REACT_APP_BACKEND}/updateuser/${this.props.match.params.id}`,{
                  method : 'PUT',
                  headers : {
                        'Content-Type' : 'application/json'
                  },
                  body : JSON.stringify(this.state.user)
            })
            .then(res=>{    
                  res.json();
                  console.log('DATA UPDATED');
                  
              })
              .then(data=>this.setState({user : data}))
              .catch(err=>console.log(err))
      }

      render(){
            return(
                  <div>
                       <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="firstName" type="text" className="validate" name="firstName" value={this.state.user.firstName} onChange={this.handleChange} />
                                        
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastName" type="text" className="validate" name="lastName" value={this.state.user.lastName} onChange={this.handleChange} />
                                       
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" name="email" value={this.state.user.email} onChange={this.handleChange} />
                                        
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" name="bio" value={this.state.user.bio} onChange={this.handleChange} ></textarea>
                                        
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="first_name" type="text" className="validate" name="dob" value={this.state.user.dob} onChange={this.handleChange} />
                                       
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn waves-effect waves-light" type="submit" name="submit">Submit
                                    <i className="material-icons right" />
                                </button>
                            </div>     
                        </form>
                  </div>
            )
      }
}

export default withRouter(EditUser)