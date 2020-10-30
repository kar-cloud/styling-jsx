import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//    <div>
//       <h1 style={{ color: "red" }}>
//          {/* we cannot add style property normally just like as
//         in normal html file..because this is a jsx file and here style
//         property requires a value that is a javascript object and
//         since javascript properties if include in html tags we have
//         to use {} that is why we get double curly braces above. */}
//          Hello World!
//       </h1>
//    </div>,
//    document.getElementById("root")
// );

var customStyle = {
   color: "red",
   fontSize: "30px",
   //  we dont say font-size because here we have to use camelCasing
   border: "2px solid blue"
};

// and why we are doing this inline styling is because
// we can decide the style of our object on the go

customStyle.color = "pink";

ReactDOM.render(
   <div>
      <h1 style={customStyle}>Hello World!</h1>
   </div>,
   document.getElementById("root")
);
