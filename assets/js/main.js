let loader = document.getElementById("loader__con");

window.addEventListener("load", function() {
  loader.style.display = "none";
  loader.style.overflow = "auto";
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 100); // Adjust the delay as needed
});

// Search in Website Page

let SearchKeyWord1 = {
  Home: "../../index.html",

  About: "../components/about.html",
  Skills: "../components/about.html",

  Portfolio: "../components/portofolio.html",
  Projects: "../components/portofolio.html",
  "Shope project": "../components/projects/adidas:project/index.html", // ** See it later **
  "Javascript project":
    "../components/projects/password generator:project/index.html", // ** See it later **
  "Html css project": "../components/projects/psFree:project", // ** See it later **

  Contact: "../components/contact.html",
  "Email me": "../components/contact.html"
};

const resultBox = document.getElementById("result_box");
const inputBox = document.getElementById("input_box");

inputBox.onkeyup = function() {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = Object.keys(SearchKeyWord1).filter(keyword => {
      return keyword.toLocaleLowerCase().startsWith(input.toLocaleLowerCase());
    });
    display(result);
  } else {
    resultBox.innerHTML = ""; // Clear the result box if input is empty
  }
};

function display(result) {
  if (result.length) {
    const content = result
      .map(keyword => {
        return `<li><a href="${SearchKeyWord1[
          keyword
        ]}" target="_blank">${keyword}</a></li>`;
      })
      .join("");
    resultBox.innerHTML = `<ul>${content}</ul>`;
  } else {
    resultBox.innerHTML = `<p class="p_nores">Can't found this section</p>`;
  }
}

