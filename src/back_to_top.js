import './default.css'

import React, {useEffect, useState} from 'react';

// export default function ScrollToTop() {
//   console.log("here");
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scorlled upto given distance
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 100) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Set the top cordinate to 0
//   // make scrolling smooth
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <div className="scroll-to-top">
//       {isVisible &&
//         <div onClick={() => this.scrollToTop()}>
//           <button id="to_top_btn">Top</button>
//         </div>}
//     </div>
//   );
// }


// Modified version of this code:
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

var doc_height;
function BackToTop(button) {
  // Get the button:
  doc_height = document.documentElement.scrollHeight;
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function(button) {
    ScrollFunction(button)
  };
}

function ScrollFunction(button) {
  var curr_height = window.scrollY
  var height_ratio = curr_height / doc_height;
  console.log(curr_height);
  if (height_ratio > 0.25) {
    button.style.display = 'block'

  } else {
    button.style.display = 'block';
  }
}

// When the user clicks on the button, scroll to the top of the document
function TopFunction() {
  console.log('here');
  document.body.scrollTop = 0;             // For Safari
  document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
}

export {
  BackToTop,
  TopFunction,
}