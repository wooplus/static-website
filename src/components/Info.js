import React from "react";

const Info = function () {
  return (
    <div>
      <img
        className="image"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <h2 className="name">Bryan Aung</h2>
      <h3 className="position">Frontend Developer</h3>
      <p className="email">bryan.website</p>
      <button className="btn emailBtn">
        <a href="">
          <i class="fa-solid fa-envelope"></i>Email
        </a>
      </button>
      <button className="btn linkedinBtn">
        <a
          href="https://www.linkedin.com/in/lin-htet-aung-790720230/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </a>
      </button>
    </div>
  );
};

export default Info;
