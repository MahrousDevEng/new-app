$(document).ready(function () {
  "use strict";

  // Trigger Lazy Load Images
  if ($(".lazy").length !== 0) {
    const lazyLoadInstance = new LazyLoad();
  }

  // Hide Preloader on Document Load
  $(".sweet-loader").length !== 0 && $(".sweet-loader").addClass("hide").hide();

  // Floating Action Button
  if ($("#btncollapzion").length !== 0) {
    const fabLinks = [
      {
        url: "https://wa.me/3934567879",
        icon: '<i class="fab fa-whatsapp fa-fw"></i>',
        className: "social-icon whatsapp",
      },
      {
        url: "http://m.me/test",
        icon: '<i class="fab fa-facebook-messenger fa-fw"></i>',
        className: "social-icon messenger",
      },
    ];

    $("#btncollapzion").Collapzion({
      _main_btn_color: "#005356",
      _child_btn_color: "#fff",
      _child_attribute: fabLinks,
      _pos: {
        position: "fixed",
        right: "auto",
        left: "20px",
        bottom: "65px",
        "text-align": "center",
        padding: "0px 8px",
        display: "block",
        "margin-bottom": 0,
        "z-index": 999,
      },
    });
  }
});
