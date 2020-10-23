$(document).ready(() => {
// form submission
    $("#form").submit((e) => {
        e.preventDefault();
        console.log("successful submission");
    // form answers
        let answerOne, answerTwo, answerThree, answerFour;
        answerOne = $("#q1").val();
        answerTwo = $("input:radio[name=radio]:checked").val();
        answerThree = $("#q3").val();
        answerFour = $("#q4").val();
        console.log(answerOne, answerTwo, answerThree, answerFour);
    // analyze user answers
        function  ansOne() {
            if (answerOne === "1") {
                return "java";
            } else if (answerOne === "2") {
                return "python";
            } else if (answerOne === "3") {
                return "cobol";
            } else {
                $("#q1").after("all fields must be completed");
            }
        };
        resultOne = ansOne();
        console.log(resultOne);

        // print results
        $("#print-results").text("test-print")
    });
});