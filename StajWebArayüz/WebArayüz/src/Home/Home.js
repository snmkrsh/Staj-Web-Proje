import React, { Component } from "react";
import "./Home.css";
import history from "./history";


export default class Home extends Component {
    mycheckbox(){
      var x = document.getElementById("passwordid");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
  }

  mybutton(){
      var x =document.getElementById("passwordid").value.toString();
      var y = document.getElementById("nameid").value.toString();
      if(x==='123' && y==='Sinem'){
        alert("GREAT !!");
        history.push("/Sorgu");
        
      }
      else{
          alert("Incorrect password, TRY AGAIN !!");
      }
  }

  render() {
    return (
      <div  className = "login"   style={{ display: 'flex', justifyContent: 'center', padding: 30, } }>
      <div className ="card" >
      <h4 className="card-header" > User Login </h4>
      <div className="card-body"  >
          <form>
              <div className="form-group">
                  <label htmlFor = "name">Name :</label>
                  <input type="text" name="name" id="nameid" placeholder="Enter Name" className="form-control"/>
              </div>
              <div className="form-group">
                  <label htmlFor = "password">Password :</label>
                  <input type="password" name="password" id="passwordid" placeholder="Enter Password" className="form-control"/> 
              </div>
              <div className="form-group">
                  <input type="checkbox" id="showPassword" onClick={this.mycheckbox} />
                  <label for="showPassword">Show password</label>
                  
                  
                  
              </div>
              
              <div>
              <button type="submit" name ="button1"className= "btn btn-danger btn-block active" onClick={this.mybutton}>Login!</button>
              </div>
              
               
          </form>
        
          
                      
      </div>
      
  </div>
  </div>
  
  
    
    );
    
  }
}

