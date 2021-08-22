import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import "./Sorgu.css";
import history from '../Home/history';


class Sorgu extends Component {
  

    myQuery(){
        var Experience =document.getElementById("Experience").value.toString();
        var Department = document.getElementById("Department").value.toString();
        var Education = document.getElementById("Education").value.toString();
        var MarialStatus = document.getElementById("MarialStatus").value.toString();
        var Salary = document.getElementById("Salary").value.toString();
        var WayofWorking = document.getElementById("WayofWorking").value.toString();
        var EnglishLevel = document.getElementById("EnglishLevel").value.toString();
        var DisabilitySituation = document.getElementById("DisabilitySituation").value.toString();
        var Certificate = document.getElementById("Certificate").value.toString();
        var University = document.getElementById("University").value.toString();
        var CVname = document.getElementById("CVname").value.toString();
        var Section = document.getElementById("Section").value.toString();
        
        window.alert("SEÇİLENLER:"+"\n"+"\n"+
        Experience.toString()+"\n"+
        Department.toString()+"\n"+
        Education.toString()+"\n"+
        MarialStatus.toString()+"\n"+
        Salary.toString()+"\n"+
        WayofWorking.toString()+"\n"+
        EnglishLevel.toString()+"\n"+
        DisabilitySituation.toString()+"\n"+
        Certificate.toString()+"\n"+
        University.toString()+"\n"+
        CVname.toString()+"\n"+
        Section.toString()+"\n"
        );

        window.alert("YAZILIMCIMIZ VERİTABANI BAĞLAYAMADIĞI İÇİN SORGU YAPILAMAMIŞTIR!!")
           
    }
    render() {
     

          return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Query Page</h2>
                
                <card>
                    <div  className="form-query">
                    <p className="card-header"> Experience </p>
                        <select id="Experience">
                            <option value="nullExperience"></option>
                            <option value="Inexperienced">Inexperienced</option>
                            <option value="1-3">1-3</option>
                            <option value="3-5">3-5</option>
                            <option value="5-7">5-7</option>
                            <option value="7-9">7+</option>
                        </select>
                        </div>   
                  
                    <div  className="form-query">
                        <p className="card-header"> Departman </p>   
                        <select id="Department">
                            <option value="nullDepartman"></option>
                            <option value="Computing">Computing</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Management">Management</option>
                            <option value="Finance">Finance</option>
                            <option value="Information technologies">Information Technologies</option>
                            <option value="Busines Development">Business Development</option>
                            <option value="Software">Software</option>
                        </select>
                        </div>

                    <div  className="form-query">
                        <p className="card-header"> Education </p>
                        <select id="Education">
                            <option value="nullEducation"></option>
                            <option value="PhD - Graduate">PhD - Graduate</option>
                            <option value="PhD - Student">PhD - Student</option>
                            <option value="Master - Graduate">Master - Graduate</option>
                            <option value="Master - Student">Master - Student</option>
                            <option value="University graduate">University graduate</option>
                            <option value="College student">College student</option>
                            <option value="Vocational School - Graduate">Vocational School - Graduate</option>
                            <option value="Vocational School - Student">Vocational School - Student</option>
                        </select>
                    </div>  

                        <div  className="form-query">
                         <p className="card-header"> Marital Status </p>
                        <select id="MarialStatus">
                            <option value="nullMarialState"></option>
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                        </select>
                        </div>
                </card>  

                <card>
                        <div className="form-query">
                        <p className="card-header">Salary expectation:</p>
                        <input type="number" name="Salary expectation" id="Salary" placeholder="Salary expectation" className="form-query"/>
                        </div>

                        <div  className="form-query">
                         <p className="card-header"> Way of Working </p>
                        <select id="WayofWorking">
                            <option value="nullWayOfWarking"></option>
                            <option value="Continuous / Full time">Continuous / Full time</option>
                            <option value="Periodic / Project based">Periodic / Project based</option>
                            <option value="Intern">Intern</option>
                            <option value="Part time / Part time">Part time / Part time</option>
                            <option value="Free Time">Free Time</option>
                            <option value="Online">Online</option>
                        </select>
                        </div> 

                        <div  className="form-query">
                         <p className="card-header"> English Level </p>
                        <select id="EnglishLevel">
                            <option value="nullEnglishLevel"></option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                        </select>
                        </div>  

                        <div className="form-query">
                         <p className="card-header"> Disability situation </p>
                        <select id="DisabilitySituation">
                            <option value="nullDisability"></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        </div>  

                </card>
                <card>
                        <div className="form-query">
                        <p className="card-header"> Enter certificate name: </p>
                        <input type="text" name="Enter certificate name" id="Certificate" placeholder="certificate" className="form-query"/>
                        </div>
                       
                        
                        <div className="form-query">
                        <p className="card-header"> University: </p>
                        <input type="text" name="Enter University Name:" id="University" placeholder="University:" className="form-query"/>
                        </div>
                        
                        <div className="form-query">
                        <p className="card-header"> CV Name: </p>
                        <input type="text" name="CV Name:" id="CVname" placeholder="CV Name: / For all CV" className="form-query"/>
                        </div>
            
                        <div  className="form-query">
                         <p className="card-header"> Section: </p>
                        <select id="Section">
                            <option value="nullSection"></option>
                            <option value="Network operator (Network Specialist)">Network operator (Network Specialist)</option>
                            <option value="Web design and programming">Web design and programming</option>
                            <option value="Database and programming">Database and programming</option>
                            <option value="Computer Technical Service">Computer Technical Service</option>
                            <option value="Software engineering">Software engineering</option>
                            <option value="Computer engineering">Computer engineering</option>
                            <option value="Electrical electronics Engineering">Electrical electronics Engineering</option>
                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                            <option value="Information Systems Engineering">Information Systems Engineering</option>
                            <option value="Computer Technology and Information Systems">Computer Technology and Information Systems</option>
                            <option value="Software development">Software development</option>
                            <option value="Web Design and Coding">Web Design and Coding</option>
                            <option value="Digital Media and Marketing">Digital Media and Marketing</option>
                            <option value="Computer technology">Computer technology</option>
                            <option value="Computer programming">Computer programming</option>
                            <option value="Information Security Technology">Information Security Technology</option>
                            <option value="Economics and administrative sciences">Economics and administrative sciences</option>
                            <option value="Economy">Economy</option>
                            <option value="Finance">Finance</option>
                            <option value="Business">Business</option>
                        </select>
                        </div>
                        <br/>
                        <div>
                        <button type="submit" name ="button2" id="button2 "className= "btn btn-danger btn-block active" onClick={this.myQuery}>Query!</button>
                       </div>
                </card>
                                            
                                            
                </div>
            </div>
        );
    }
}

export default Sorgu;