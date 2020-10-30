// Create a react app from scratch
// show a single h1 that says "Good morning" if between midnight and 12pm
// or good afternoon if between 12pm and 6pm
// or good evening if between 6pm and midnight
// Apply heading styles in Styles.css
// Dynammically change the color of the h1 using inline css styles
// morning = red, afternoon = green, night=blue

import React from "react";
import ReactDOM from "react-dom";

let text = "";
const customStyle = {
   color: ""
};

const currentDate = new Date();
const time = currentDate.getHours();

if (time >= 0 && time < 12) {
   text = "Good Morning";
   customStyle.color = "red";
} else if (time >= 12 && time < 18) {
   text = "Good Afternoon";
   customStyle.color = "green";
} else {
   text = "Good Evening";
   customStyle.color = "blue";
}

ReactDOM.render(
   <div>
      <h1 className="heading" style={customStyle}>
         {text}
      </h1>
   </div>,
   document.getElementById("root")
);
