import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            bio : '',
            dob: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {target : {name, value}} = event
       this.setState({[name]: value})
    }

    handleSubmit(event){
        
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND}/users`,{
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then(res=>{    
            res.json();
            alert('DATA SUBMITTED');
            
        })
        .then(data=>this.setState({data}))
        .catch(err=>console.log(err))
    }
      render() {
            return (
                <div>
                        <h2>
                            fill out the form
                        </h2>
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                        <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                                        <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleChange} />
                                        <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" name="bio" value={this.state.bio} onChange={this.handleChange} ></textarea>
                                        <label htmlFor="textarea1">Bio</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="first_name" type="text" className="validate" name="dob" value={this.state.dob} onChange={this.handleChange} />
                                        <label htmlFor="first_name">Birth Date(yyyy-mm-dd)</label>
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn waves-effect waves-light" type="submit" name="submit">Submit
                                    <i className="material-icons right" />
                                </button>
                            </div>     
                        </form>
                    </div>        
                </div>
            )
      }
}

export default UserForm;