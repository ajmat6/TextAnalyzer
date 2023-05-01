import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    // Making the className of the nav as Js and using props and states both to change the theme of the navbar.
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {props.aboutme}
            </a>
          </li>
        </ul>

        {/* div for different themes */}
        {/* <div className="d-flex">
            {/* bg-primary give the div blue color(default of bootstrap) 
            {/* below onclick is passed an arrow function because onclick need a function not a function call(as you were primary in it) 
            <div className="bg-primary rounded mx-2" onClick={() => {props.changeMode('primary')}} style={{height: '30px' , width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={() => {props.changeMode('warning')}} style={{height: '30px' , width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={() => {props.changeMode('danger')}} style={{height: '30px' , width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={() => {props.changeMode('success')}} style={{height: '30px' , width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-dark rounded mx-2" onClick={() => {props.changeMode('dark')}} style={{height: '30px' , width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-light rounded mx-2" onClick={() => {props.changeMode('light')}} style={{height: '30px' , width: '30px', cursor: 'pointer'}}></div>
        </div> */}

        {/* div for dark mode switch button */}
        <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark':'light'}`}>
           {/* below comment is for cutom theme */}
          {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => {props.changeMode('null')}} /> */}
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label> */}
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutme : PropTypes.string.isRequired
}

Navbar.defaultProps = { //These are default values of Props which will be used when you do not pass any values.
    title : "Khuch nahi to yahi sahi",
    aboutme :  "ab ye bhi chalega"
}