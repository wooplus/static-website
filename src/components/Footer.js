import React from "react";

const Footer = function () {
  return (
    <div className="footer">
      <button className="icon-btn">
        <a href="https://twitter.com">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </button>
      <button className="icon-btn">
        <a href="https://facebook.com">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
      </button>
      <button className="icon-btn">
        <a href="https://instagram.com">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </button>
      <button className="icon-btn">
        <a
          href="https://github.com/wooplus?tab=repositories"
          target="_blank"
          className="atag"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </button>
    </div>
  );
};

export default Footer;
