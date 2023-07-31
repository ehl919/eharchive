$(function () {
    $("#contact-form").submit(function (e) {
        e.preventDefault();

        if (this.reportValidity()) {
            var dataForm = $("#contact-form").serialize();
            $("#status-contact-form").text("Success, your enquiry has been sent!").show();
            console.log(dataForm);
            location.assign(`response.html?${dataForm}`)
        }
    });
});

const params = new URLSearchParams(document.location.search);
const name = params.get("name");
const contact = params.get("contact");
const msg = params.get("msg");
console.log(name, contact, msg);

$("#name").append(name)
$("#contact").append(contact)
$("#msg").append(msg)