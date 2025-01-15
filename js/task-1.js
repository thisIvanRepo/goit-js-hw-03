"use strict";

function slugify(title) {
  /* This solution looks good, but it is not the most efficient.
--------------------------------------------------
  return title.toLowerCase().split(" ").join("-");
--------------------------------------------------
*/

  // This solution avoids using multiple loops.
  if (title === "") {
    return "title-is-empty";
  }

  let titleToSlug = "";
  for (let i = 0; i < title.length; i += 1) {
    if (title[i] === " ") {
      titleToSlug += "-";
    } else {
      titleToSlug += title[i].toLowerCase();
    }
  }

  return titleToSlug;
}

//Example
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
