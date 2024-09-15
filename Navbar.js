import React from "react";

export default function Navbar(props) {
  return (
    //

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                {props.Home}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="#">
                {props.Link}
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.Dropdown}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    FullStack Webdevlopment
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Hybrid Application Development
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Financially Consultant
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link enabled" aria-disabled="true">
                {props.Disabled}
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
