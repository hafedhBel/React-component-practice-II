import React from "react";
import reactDom from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const customStyle = {
  color: "",
};

let title;
if (currentTime < 12) {
  title = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  title = "Good Afternoon";
  customStyle.color = "green";
} else {
  title = "Good Night";
  customStyle.color = "blue";
}

reactDom.render(
  <h1 className="heading" style={customStyle}>
    {title}
  </h1>,
  document.getElementById("root"),
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
