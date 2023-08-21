import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
    </div>
  );
}

export default About;
