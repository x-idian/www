$(document).ready(function() {
  "use strict";

  $("#contact-form").submit(function (event) {
    event.preventDefault();

    var form = $("#contact-form")
    var statusBox = $("#contact-form-status")
    var submitButton = $("#contact-form-button")

    console.log(form);

    $.post({
      url: form.attr('action'),
      data: form.serialize(),
    })
        .done(function (e){
          form[0].reset()
          submitButton.hide();
          statusBox.text("Thank you. Contact form was submitted successfully.");
        })
        .fail(function (){
          statusBox.text("Oops! There was a problem submitting the form. Try to resubmit or email us.");
        })
  })
});
