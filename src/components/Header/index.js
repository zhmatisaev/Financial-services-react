import React from "react";
import cover from "../../img/mainblock/cover.jpg";
import "../../components/styles/index.css";

function Header() {
  return (
    <div class="wrapper">
      {/* <!-- block header --> */}
      <header className="header">
        <div className="header__container _container">
          <a href="" className="header__logo">
            Relvise
          </a>
          {/* <!-- nav bar  --> */}
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="" className="menu__link">
                  Home{" "}
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Product{" "}
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Pricing{" "}
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="page">
        <div className="page__main-block main-block">
          <div className="main-lock__container _container">
            {/* <!--  <div class="main-block__body ограничить  title , text , button  --> */}
            <div className="main-block__body">
              <h1 className="main-block__title">
                Finance and Consultancy Solution
              </h1>
              <div className="main-block__text">
                We know how large objects will act, but things on a small scale.
              </div>
              <div className="main-block__buttons">
                <a
                  href=""
                  className="main-block__button main-block__button_orange"
                >
                  {" "}
                  Get Quote Now
                </a>
                <a
                  href=""
                  className="main-block__button main-block__button_border"
                >
                  {" "}
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="main-block__image _ibg">
            <img src={cover} alt="cover" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Header;
