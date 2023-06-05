import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active`} href="/">Home</a>

              </li>
              <li className="nav-item">
                <a className={`nav-link active`} href="#">{props.about}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'white'} button_size`} onClick={props.togglemode}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Another mode</label>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}
//can't leave isRequired empty (shoule be set either properly or through default)
Navbar.defaultProps = {
  title: 'Set the title',
  about: "Write something about the title"
}