import React, { Component } from 'react'
class Register extends Component {

    constructor (props){
        super(props) // to get the info from the component class

this.state={
    firstName:"",
    lastName:"",
    Email :"",
    UserName:"",
    Password:""
}
this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
this.changeEmailHandler=this.changeEmailHandler.bind(this);
this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
this.changePasswordHandler=this.changePasswordHandler.bind(this);
this.saveUserinfo=this.saveUserinfo.bind(this);
}
changeFirstNameHandler = (event)=>{ this.setState ({firstName: event.target.value});   }
changeLastNameHandler=(event)=>{ this.setState ({lastName: event.target.value});   }
changeEmailHandler=(event)=>{ this.setState ({Email: event.target.value});   }
changeUserNameHandler=(event)=>{ this.setState ({UserName: event.target.value});   }
changePasswordHandler=(event)=>{ this.setState ({Password: event.target.value});   }

saveUserinfo=(e)=>{ e.preventDefault();
    let user={firstName: this.state.firstName,
    lastName: this.state.lastName,Email:this.state.Email,
    UserName: this.state.UserName,Password:this.state.Password};
    console.log('user=>'+JSON.stringify(user));
    // console.log(user); this if I want to see how it would be looking in Object form or container / just for my ref
  }

cancel=(e)=>{
    e.target.reset();
}

render(){
    return(
        <>
    
    <div className='header'></div>
     <div className='container'> 
         <div className="'registerForm'">
            <div className="row">
                <h1 className="text-center"> Registration </h1>
                <br></br>
                        <form className='register'>
                            <div className="input">
                            <label>First Name :</label>
                            <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <br></br>
                           
                            <div className="input">
                            <label>Last  Name :</label>
                            <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="input">
                            <label>Email :</label>
                            <input placeholder="Email" name="Email" className="form-control" value={this.state.Email} onChange={this.changeEmailHandler}/>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="input">
                            <label>User Name :</label>
                            <input type ="text" placeholder="User Name" name="userame" className="form-control" value={this.state.UserName} onChange={this.changeUserNameHandler}/>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="input">
                            <label>Password :</label>
                            <input type="password" placeholder="Password" name="password" className="form-control" value={this.state.Password} onChange={this.changePasswordHandler}/>
                            </div>
                            <br></br>
                            <br></br>
                             <button className="bnt" onClick={this.saveUserinfo}>Submit</button>
                             <button className="bnt" onClick={this.cancel.bind} style={{marginleft:"10px"}}> Cancel</button>
                        </form>
             </div>   
             
        </div>

     </div>
     <div className='footer'> </div>
     </>
    )
   }
}
export default Register