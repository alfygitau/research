import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#">RESEARCH.COM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ACADEMIC CONTENT
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOGS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ESSAY
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DISSERTATIONS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">DOWNLOADS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">SUPPORT</a>
        </li>
        <li class="nav-button">
        <Link to='/signup'><button type="button" class="btn btn-outline-dark" style={{marginLeft:"200px"}}>Sign Up</button></Link>
        </li>
        <li class="nav-button">
        <button type="button" class="btn btn-outline-dark" style={{marginLeft:"50px"}}>Log In</button>
        </li>
      </ul>
    </div>
  </div>
</nav>   
        </>
    )
}

export default Header
