import React from "react";

function Heading() {
   let text = "";
   const customStyle = {
      color: ""
   };

   const currentDate = new Date();
   const time = currentDate.getHours();

   if (time >= 0 && time < 12) {
      text = "Good Morning";
      customStyle.color = "red";
      return <h1 style={customStyle}>{text}</h1>;
   } else if (time >= 12 && time < 18) {
      text = "Good Afternoon";
      customStyle.color = "green";
      return <h1 style={customStyle}>{text}</h1>;
   } else {
      text = "Good Evening";
      customStyle.color = "blue";
      return <h1 style={customStyle}>{text}</h1>;
   }
}

export default Heading;
