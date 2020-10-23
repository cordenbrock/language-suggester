$(document).ready(() => {
    // form submission
    $("#form").submit((e) => {
        e.preventDefault();
        console.log("test submission");
        $("#print-results").text("test-print")
    });
});