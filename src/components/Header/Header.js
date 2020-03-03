import React, { Component } from 'react';
import{Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import s from './Hedaer.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
      <Navbar bg="light" expand="lg">
      <Link className="nav-link" to={'/'}>React-Bootstrap</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to={'/About'}>Home</Link>
      <Link className="nav-link" to={'/youtube'}>Link</Link>
<Link className="nav-link" to={'/posts'}>My posts</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}
