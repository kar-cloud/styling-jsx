import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
   <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">
         My Favourite Foods
      </h1>
      <div>
         <img src="https://static.toiimg.com/photo/53110049.cms" alt="pizza" />
         <img
            src="https://kirbiecravings.com/wp-content/uploads/2018/02/garlic-noodles-61-700x680.jpg"
            alt="noodles"
         />
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/428px-RedDot_Burger.jpg"
            alt="burger"
         />
      </div>
   </div>,
   document.getElementById("root")
);
