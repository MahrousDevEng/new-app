$(function () {
  "use strict";

  const togglePassBtn = $(".btn-toggle-password");
  const inputPass = $("#userPassword");

  if (togglePassBtn.length !== 0) {
    togglePassBtn.on("click", function (e) {
      e.preventDefault();

      $(this).toggleClass("show");

      if ($(this).hasClass("show")) {
        inputPass.attr("type", "text");
      } else {
        inputPass.attr("type", "password");
      }
    });
  }
});
