import React from "react";
import "../../styles/components/navigation.scss";

function Navigation() {
  return (
    <>
      <div className="navigation-wrapper-desktop">
        <div>
          <ul>
            <li>
              <a href="#"></a>la libraire
            </li>
            <li>
              <a href="#"></a>coups de coeur
            </li>
            <li>
              <a href="#"></a>événements
            </li>
            <li>
              <a href="#"></a>boutique
            </li>
            <li>
              <a href="#"></a>contact
            </li>
          </ul>
        </div>
        <div className="icone-menu-container">
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="22"
                r="21.6"
                stroke="#1D1D1D"
                strokeWidth="0.8"
              />
              <path
                d="M22 22C24.21 22 26 20.21 26 18C26 15.79 24.21 14 22 14C19.79 14 18 15.79 18 18C18 20.21 19.79 22 22 22ZM22 24C19.33 24 14 25.34 14 28V30H30V28C30 25.34 24.67 24 22 24Z"
                fill="#1D1D1D"
              />
            </svg>
          </div>
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="22"
                r="21.6"
                stroke="#1D1D1D"
                strokeWidth="0.8"
              />
              <path
                d="M28 16H26C26 13.79 24.21 12 22 12C19.79 12 18 13.79 18 16H16C14.9 16 14 16.9 14 18V30C14 31.1 14.9 32 16 32H28C29.1 32 30 31.1 30 30V18C30 16.9 29.1 16 28 16ZM20 20C20 20.55 19.55 21 19 21C18.45 21 18 20.55 18 20V18H20V20ZM22 14C23.1 14 24 14.9 24 16H20C20 14.9 20.9 14 22 14ZM26 20C26 20.55 25.55 21 25 21C24.45 21 24 20.55 24 20V18H26V20Z"
                fill="#1D1D1D"
              />
            </svg>
          </div>
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="22"
                r="21.6"
                stroke="#1D1D1D"
                strokeWidth="0.8"
              />
              <path
                d="M26.2939 24.5786H25.3905L25.0703 24.2699C26.191 22.9663 26.8656 21.2739 26.8656 19.4328C26.8656 15.3276 23.538 12 19.4328 12C15.3276 12 12 15.3276 12 19.4328C12 23.538 15.3276 26.8656 19.4328 26.8656C21.2739 26.8656 22.9663 26.191 24.2699 25.0703L24.5786 25.3905V26.2939L30.2962 32L32 30.2962L26.2939 24.5786ZM19.4328 24.5786C16.5855 24.5786 14.287 22.2802 14.287 19.4328C14.287 16.5855 16.5855 14.287 19.4328 14.287C22.2802 14.287 24.5786 16.5855 24.5786 19.4328C24.5786 22.2802 22.2802 24.5786 19.4328 24.5786Z"
                fill="#1D1D1D"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="navigation-wrapper-mobile">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z"
              fill="#1D1D1D"
            />
          </svg>
        </div>

        <div>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM6 8C6 8.55 5.55 9 5 9C4.45 9 4 8.55 4 8V6H6V8ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM12 8C12 8.55 11.55 9 11 9C10.45 9 10 8.55 10 8V6H12V8Z"
              fill="#1D1D1D"
            />
          </svg>
        </div>

        <div>
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20H28V16.6667H0V20ZM0 11.6667H28V8.33333H0V11.6667ZM0 0V3.33333H28V0H0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Navigation;
