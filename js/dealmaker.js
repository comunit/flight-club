var main_heading_short = document.getElementById("main-heading-short");
var main_heading_long = document.getElementById("main-heading-long");
var main_img = document.getElementById("main-image");
var main_deal_page_p = document.getElementById("main-page-deal-p");
var ticket_image = document.getElementById("ticket-image");
var go_to_deal_button_link = document.getElementById("go-to-deal-button-link");
var field_heading = document.getElementsByClassName("field-heading");
var field_details = document.getElementsByClassName("field-details");

var done = document
  .getElementById("done-button")
  .addEventListener("click", (e) => {
    console.log(main_heading_short);
    e.preventDefault();
    let deal = {
      mainheadingshort: main_heading_short.value,
      mainheadinglong: main_heading_long.value,
      mainimage: main_img.value,
      maindealpagep: main_deal_page_p.value,
      ticketimage: ticket_image.value,
      gotodealbuttonlink: go_to_deal_button_link.value,
    };

    console.log(deal);
  });
