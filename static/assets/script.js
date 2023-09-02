document.addEventListener("DOMContentLoaded", () => {
  var switcher = document.getElementsByClassName("js-toggle")[0];

  switcher.addEventListener("click", function () {
    this.classList.toggle("js-toggle--checked");
    this.classList.add("js-toggle--focus");

    if (this.classList.contains("js-toggle--checked")) {
      localStorage.setItem("darkMode", "true");
      document.styleSheets[0].cssRules[23].media.mediaText =
        "(prefers-color-scheme: dark)";
    } else {
      document.styleSheets[0].cssRules[23].media.mediaText =
        "(prefers-color-scheme: light)";

      setTimeout(function () {
        localStorage.removeItem("darkMode");
      }, 100);
    }
  });

  if (localStorage.getItem("darkMode")) {
    switcher.classList.add("js-toggle--checked");
    document.styleSheets[0].cssRules[23].media.mediaText =
      "(prefers-color-scheme: dark)";
  } else {
    document.styleSheets[0].cssRules[23].media.mediaText =
      "(prefers-color-scheme: light)";
  }

  document.body.style.visibility = "visible";
});

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  if (countryCode === "it") {
    return "<img src='/images/it.png'>";
  }
  else{
    return "<img src='/images/gb.png'>";
  }
};

var reg = new RegExp("(?:\ud83c[\udde6-\uddff]){2}", "g");
document.body.innerHTML = document.body.innerHTML.replaceAll(
  reg,
  flagemojiToPNG
);
