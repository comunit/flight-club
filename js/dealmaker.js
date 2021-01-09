var main_heading_short = document.getElementById("main-heading-short");
var main_heading_long = document.getElementById("main-heading-long");
var main_img = document.getElementById("main-image");
var main_deal_page_p = document.getElementById("main-page-deal-p");
var ticket_image = document.getElementById("ticket-image");
var go_to_deal_button_link = document.getElementById("go-to-deal-button-link");
var field_heading = document.getElementsByClassName("field-heading");
var field_details = document.getElementsByClassName("field-details");
var fields = document.getElementsByClassName("fielddata1");
let fieldsArray = [];

var done = document
  .getElementById("done-button")
  .addEventListener("click", (e) => {
    e.preventDefault();

    // empty the field array if already filled
    fieldsArray = [];

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      let fieldHeading = field.childNodes[1];
      let fieldDetails = field.childNodes[3];

      // if more than one fields
      if (field.childNodes[5].childNodes[1].checked) {
        var saveFieldToVar = fieldDetails.value;
        var fieldsArraySplit = [saveFieldToVar.split(",")];
        fieldsArray.push({
          heading: fieldHeading.value,
          fieldDetails: fieldsArraySplit,
          morethanonefielddetails: true,
        });
      } else {
        fieldsArray.push({
          heading: fieldHeading.value,
          fieldDetails: fieldDetails.value,
          morethanonefielddetails: false,
        });
      }
    }

    let deal = {
      mainheadingshort: main_heading_short.value,
      mainheadinglong: main_heading_long.value,
      mainimage: main_img.value,
      maindealpagep: main_deal_page_p.value,
      ticketimage: ticket_image.value,
      gotodealbuttonlink: go_to_deal_button_link.value,
      fields: fieldsArray,
    };

    console.log(deal);
  });

// insert another field
document
  .getElementById("create-one-more-field-deals")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let fieldNode = fields[0];
    var cln = fieldNode.cloneNode(true);
    let feildslist = document.getElementById("fieldslist");

    feildslist.appendChild(cln);
    console.log(fieldNode);
  });
