import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/lab/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import DP from "./DP.jpg";
import SwiggyLogo from "./Swiggy_Logo.PNG";
import TCSLogo from "./TCS_Logo.PNG";
import Ninjaas_logo from "./Ninjaas_logo.PNG";

/*import { Container, Row, Col } from 'reactstrap';*/

import { StyleSheet, View, Alert } from "react";

import "./res.css";

import color from "@material-ui/core/colors/cyan";

class Res extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arup Chandra Dawn",
      value1: 70,
      value2: 80,
      value3: 60,
      value4: 90,
      value5: 80,
      value6: 60,
      value7: 70,
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
  }

  handleChange1 = (event, value1) => {
    this.setState({ value1 });
  };

  handleChange2 = (event, value2) => {
    this.setState({ value2 });
  };

  handleChange3 = (event, value3) => {
    this.setState({ value3 });
  };

  handleChange4 = (event, value4) => {
    this.setState({ value4 });
  };

  handleChange5 = (event, value5) => {
    this.setState({ value5 });
  };

  handleChange6 = (event, value6) => {
    this.setState({ value6 });
  };

  handleChange7 = (event, value7) => {
    this.setState({ value7 });
  };

  render() {
    const side = {
      root: {
        width: "25%",
      },
    };

    const pic = {
      root: {
        width: "100%",
      },
    };

    const icon = {
      root: {
        marginLeft: "10px",
      },
    };

    return (
      <div id="Res_styling">
        <div></div>

        <Grid container spacing={0}>
          <Grid item xs>
            <div className="sidebar  w3-bar-block">
              <img src={DP} alt="DP" style={pic.root} />

              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <div className="w3-bar-item menu_head">CONTACT</div>
              <div className="w3-bar-item menu_cont">
                <i className="fas fa-user-circle fa-2x"></i>{" "}
                <span style={icon.root}>Born in 28th Nov,1992</span>
              </div>

              <div className="w3-bar-item menu_cont">
                <i class="fas fa-home fa-2x"></i>{" "}
                <span style={icon.root}>Bangalore, Karnataka</span>
              </div>

              <div className="w3-bar-item menu_cont">
                <i class="fas fa-phone fa-2x"></i>{" "}
                <span style={icon.root}>+91 9641364470</span>
              </div>

              <div className="w3-bar-item menu_cont">
                <i class="fas fa-envelope fa-2x"></i>{" "}
                <span style={icon.root}>arupchandradawn@gmail.com</span>
              </div>

              <div className="w3-bar-item menu_cont">
                <i class="fab fa-github fa-2x"></i>{" "}
                <span style={icon.root}>https://github.com/arupdawn</span>
              </div>

              <br></br>
              <br></br>
              <br></br>
              <div className="w3-bar-item menu_head">SKILLS</div>

              <div className="w3-bar-item menu_cont">
                <span style={icon.root}>HTML5</span>
                <div className="slider">
                  <Slider
                    value={this.state.value1}
                    onChange={this.handleChange1}
                  />
                </div>
              </div>

              <div className="w3-bar-item menu_cont">
                <span style={icon.root}>CSS3</span>
                <div className="slider">
                  <Slider
                    value={this.state.value2}
                    onChange={this.handleChange2}
                  />
                </div>
              </div>

              <div className="w3-bar-item menu_cont">
                <span style={icon.root}>Javascript</span>
                <div className="slider">
                  <Slider
                    value={this.state.value3}
                    onChange={this.handleChange3}
                  />
                </div>
              </div>

              <div className="w3-bar-item menu_cont">
                <span style={icon.root}>ReactJS</span>
                <div className="slider">
                  <Slider
                    value={this.state.value4}
                    onChange={this.handleChange4}
                  />
                </div>
              </div>

              <div className="w3-bar-item menu_cont">
                <span style={icon.root}>Bootstrap</span>
                <div className="slider">
                  <Slider
                    value={this.state.value7}
                    onChange={this.handleChange7}
                  />
                </div>
              </div>

              <div className="w3-bar-item menu_cont">
                <span style={icon.root}>GIT</span>
                <div className="slider">
                  <Slider
                    value={this.state.value5}
                    onChange={this.handleChange5}
                  />
                </div>
              </div>

              <div className="w3-bar-item menu_cont">
                <span style={icon.root}>Redux</span>
                <div className="slider">
                  <Slider
                    value={this.state.value6}
                    onChange={this.handleChange6}
                  />
                </div>
              </div>
              <br></br>

              
              <div className="w3-bar-item menu_head">PROFESSIONAL EXPERIENCE</div>

                    <div className="time"></div>
                    <br></br>

                    <div className="content__experience">
                      <div className="companyExp">
                        <img src={Ninjaas_logo} />
                        <div>
                          <strong>FrontEnd Developer </strong>{" "}
                          <br></br>
                          Nov 2020 – Present , Bengaluru, Karnataka
                        </div>
                      </div>
                      <div className="companyExp">
                        <img src={SwiggyLogo} />
                        <div>
                          <strong>Support Executive ( 2 years ) </strong>{" "}
                          <br></br>
                          May 2018 – June 2020 , Bengaluru, Karnataka
                        </div>
                      </div>
                      <div className="companyExp">
                        <img src={TCSLogo} />
                        <div>
                          <strong>
                            Assistant System Engineer ( 1 year 9 months ){" "}
                          </strong>{" "}
                          <br></br>
                          Nov 2015 – Aug 2017 , Bengaluru, Karnataka
                        </div>
                      </div>
                    </div>

            </div>

          </Grid>

          

          <Grid item xs={8}>
            <div id="Page_Content">
              <div className="w3-container">
                <h1 id="Name">{this.state.name}</h1>
              </div>

              <div className="w3-container" id="Main">
                <Card id="card">
                  <CardContent>
                    <div className="sidehead">Profile Synopsis</div>

                    <div className="content">
                      A result-driven, passionate, dedicated and a high-quality
                      IT expert seeking a front-end developer job to utilize the
                      ability to work in a cross-functional team and to provide
                      the company with excellent solutions in the area of web
                      development.
                    </div>
                  </CardContent>
                </Card>
                <br></br>

                <Card id="card">
                  <CardContent>
                    <div className="sidehead">Projects</div>
                    <br></br>

                    <div className="content">
                      <strong>1.) Jumkey.com (ongoing project)  </strong> - 
                      Technology used (HTML5, CSS3, JavaScript, ReactJS, Redux).
                      <br/><br/>
                        • Implemented footer component displayed using response from rest API<br/>
                        • The UI modification done for login screens for email and mobile login option. <br/>
                        • Also, implemented screen for searching country name to be selected for logging in via mobile number.<br/>
                        • Implemented search functionality of country name by typing the country code.<br/>
                        • Fully responsive working on all devices.
                      <br></br><br/>

                      <strong>2.) Partners portal (Admin portal used by customer support team, warehouse team, marketting team etc.)  </strong> -
                      (HTML5, CSS3, JavaScript, Jquery, Bootstrap)
                      <br/><br/>
                      • Warehouse migration done from old server to new server.<br/>
                      • Worked on building features like coupon code creation, customers module to view customer details<br/>
                      • Implemented Domestic and International tabs for viewing International and domestic orders in order details page and abandoned cart and checkouts page<br/>
                      • Feature implementaions like raising restocks, warehouse item details, and data table view etc.
                      <br></br><br/>

                      <strong>3.) React partners portal (Admin portal used by catalog team, accounts team and warehouse team)   </strong> - 
                      (HTML5, CSS3, JavaScript, ReactJS, Redux)
                      <br/><br/>
                      • Developed the partners onboarding admin feature to add new partners/sellers for jumkey.com.<br/>
                      • Implemented the Shipping profile features for different sellers.<br/>
                      • Missing features built for Attribute, Schemas, Templates for products.<br/>
                      <br></br><br/>

                      <strong>4.) Netfllix Clone App ( April 2021 - Personal project)   </strong> - 
                      (HTML5, CSS3, JavaScript, ReactJS, Redux, Firebase)<br/><br/>
                      • Sign in and Sign up feature implemented using firebase.<br/>
                      • User once logged in can view the list of movies for different genres.<br/>
                      • On click of any movie banner- redirection to youtube trailer has been implemented<br/>
                      • Signout feature implemented using firebase.<br/>
                      • Responsive on all devices.
                      <br></br><br/>
                      Some of my other personals apps created are
                      <strong>
                        {" "}
                        Messenger clone, Amazon Clone, Online movie search, CricScore{" "}
                      </strong>
                      and many more.
                      <br></br>
                      <br></br>
                      You can directly check the apps at my portfolio page at
                      <strong>
                        {" "}
                        https://arupchandradawn.netlify.app/
                      </strong>
                      <br></br>
                    </div>
                  </CardContent>
                </Card>
                <br></br>


                {/* <br/><br/> */}
                <Card id="card">
                  <CardContent>
                    <div className="sidehead">Experience metrics</div>
                    <br></br>
                      <div className="content">
                      • Hands-on web development experience including the following technologies: HTML5, CSS3,Javascript,ReactJS,Redux,firebase,Material UI,GIT.<br/>

                      • Knowledge of REACT tools including React.js, Redux like React dev tool.<br/>

                      • Using Web Developer toolkits and IDEs like visual studio code.<br/>

                      • Experience interfacing with JSON REST APIs.<br/>

                      • Experience with Agile Methodologies, specifically Scrum.<br/>
                      </div>

                      <br/>
                      <div className="sidehead">Roles and responsibilities</div>
                      <br/>
                      <div className="content">
                        • Maintaining and improve website features using browser-based debugging and troubleshooting skills. <br/>
                        • Developing UI components that provide an intuitive and seamless customer experience.<br/>
                        • Translating wireframes into prototypes and production-ready interfaces.<br/>
                        • Requirement collection for a new feature and delivering the feature with basic functionalities and usability.<br/>
                        • Updating and maintaining code using version control tool like Git, and platforms like bitbucket and github.<br/>
                        • Maintaining project artifacts and documents using tools like Jira,Github issues, github milestones,github discussions etc.<br/>
                        • Collaborating with back-end developers and web designers to implement new feature or improve existing functionalities.<br/>
                        • Preparing demonstration videos of any feature developed that would be used by end-user.<br/>
                        • Issues and bug fixes for any project.<br/>
                      </div>
                  </CardContent>
                </Card>
                <br></br>

                <Card id="card">
                  <CardContent>
                    <div className="sidehead">Educational qualification</div>

                    <div className="time"></div>
                    <br></br>

                    <div className="content">
                      <strong>Bachelor of Technology </strong>from
                      <strong>
                        {" "}
                        Durgapur Institute of Advanced Technology and
                        Management, West Bengal University of Technology{" "}
                      </strong>
                      with aggregate of<strong> 8.44 </strong>,2015.
                      {/* <br></br>
                      <br></br>
                      <strong>Intermediate </strong>from
                      <strong>
                        {" "}
                        Ran Vijay Singh Academy, Indian School Certificate{" "}
                      </strong>
                      board with<strong> 85.25%</strong>, 2011.
                      <br></br>
                      <br></br>
                      <strong>Matriculation </strong>from{" "}
                      <strong>
                        Ramakrishna Vivekananda Sarda Vidyapith,Indian
                        Certificate of Secondary Education{" "}
                      </strong>
                      board with<strong> 86.2% </strong>,2009. */}
                    </div>
                  </CardContent>
                </Card>
                <br></br>

                <br></br>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Res;
