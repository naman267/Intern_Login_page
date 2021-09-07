import React, { Component } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import './style.css'
import user from './user.jpg'
import { IconContext } from 'react-icons'
import Item from './item'
import './App.css'
import Modal from './Modal/Modal'
import {
  FaLinkedinIn,
  FaKey,
  FaUser,
  FaFacebookF,
  FaGoogle,
  FaEnvelope
} from 'react-icons/fa'

class App extends Component {
  
  constructor()
  {super();
     this.state = {
      signupbtn: "false",
      signup: null,
      toggle:false
  
    }
    
    
    this.goto = this.goto.bind(this)

  }
  toggleHandler=()=>{
    console.log("hello")
    this.setState({  signupbtn: "false",
    signup: null,
    toggle:!this.state.toggle
})


  }
  signinHandler=()=>{
    this.style=null;
              this.setState({ signupbtn:"false",signup:null})
  }
  signupHandler = () => {
    this.style={
      height:"558px"
    }
    var signup = (
    <form className="signupp"onSubmit={(e) => this.signupHandler(e)}>

      <div className="social-container">
      <div className="imgg">
      <img src={user} height="138px"/>
      </div>
       
      </div>
      <span>Use your email or UserName for registration</span>
      <div className="username">
        <FaUser />
        <input className="in" type="text" name="name" placeholder="Name" required />
      </div>
      <div className="email">
        <FaEnvelope />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="in"
        />
      </div>
      <div className="password">
        <FaKey />
        <input className="in"
          type="password"
          name="password"
          placeholder="Password"
          required
         
        />
      </div>
      <button>Sign Up</button>
      <div className="social-container">
        <a href="/" className="social">
          <FaFacebookF />
        </a>
        <a href="/" className="social">
          <FaGoogle />
        </a>
        <a href="/" className="social">
          <FaLinkedinIn />
        </a>
      </div>     
      <span><b>Already LoggedIn ? </b> <a className="grab" onClick={this.signinHandler}>SignIn</a> </span>
    </form>
     
    )



    console.log(this.state)

    this.setState({ signupbtn: "true", signup: signup })

  }
  componentDidMount() {

    console.log(document.getElementsByClassName('rec-dot'))

 
  }
  Change=(currentItem,currentPage)=>{
   // console.log("hello")
    //console.log(currentItem,currentPage)
if(currentPage==4)
{
  this.goto();
}
  }
  goto() {
    setTimeout(()=>{
      this.carousel.goTo(Number(0))  
    },2000)
    
  }
  render() {
   var item1=<h1>About Us</h1>
   var item2=<h1>Welcome</h1>
    return (
       
      <div className="formPage">
      {this.state.toggle ?
      <Modal signup={this.state.signup}modalClosed={this.toggleHandler} show={this.state.toggle}>
      <div className="container" id="container">

<Carousel  enableTilt={false} enableAutoPlay={true} autoPlaySpeed={2000} className="overlay" showArrows={false}
 ref={ref => (this.carousel = ref)}
 onChange={this.Change}
>
  <Item>{item1}</Item>
  <Item>{item2}</Item>
  <Item>{item1}</Item>
  <Item>{item2}</Item>
  <Item>{item1}</Item>
</Carousel>
<div className="overlayy">
  
  {this.state.signupbtn == "true" ? this.state.signup :
    <form onSubmit={(e) => this.loginHandler(e)}>
     <div className="imgg">
      <img src={user} height="150px"/>
      </div>
      
      <span>Welcome to Unlisted</span>
      <div className="email">
        <FaEnvelope />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="password">
        <FaKey />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <a href="/">Forgot Your Password?</a>

      <button>Sign In</button>
      <div className="social-container">
        <a href="/" className="social">
          <FaFacebookF />
        </a>
        <a href="/" className="social">
          <FaGoogle />
        </a>
        <a href="/" className="social">
          <FaLinkedinIn />
        </a>
      </div>
    
        <span><b>New to Unlisted ? </b> <a className="grab" onClick={this.signupHandler}>Create Account</a> </span>
      
    </form>}




</div>






</div>
</Modal>

      :<button onClick={this.toggleHandler}>Click</button>}

    </div >
      

    )
  }
}
export default App