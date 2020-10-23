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
        answerFour = parseInt($("#q4").val());
        console.log(answerOne, answerTwo, answerThree, answerFour);
    // analyze user answers
        function ansOne() {
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

        function ansTwo() {
            if (answerTwo === "a") {
                return "java";
            } else if (answerTwo === "b") {
                return "python";
            } else if (answerTwo === "c") {
                return "cobol";
            } else {
                $("#q2").after("all fields must be completed");
            }
        };

        console.log(answerThree.length)
        function ansThree() {
            if (answerThree.length <= 5) {
                return "java";
            } else if (answerThree.length>5 && answerThree.length<=10) {
                return "python";
            } else if (answerThree.length > 10) {
                return "cobol";
            };
        };

        function ansFour() {
            if (answerFour < 0) {
                return "java";
            } else if (answerFour>0 && answerFour<100) {
                return "python";
            } else if (answerFour >= 100) {
                return "cobol";
            } else {
                $("#q4").after("all fields must be completed");
            }
        }

        const resultOne = ansOne();
        const resultTwo = ansTwo();
        const resultThree = ansThree();
        const resultFour = ansFour();

        // if (resultOne === resultTwo) {
        //     return resultOne
        // } else


        // print results
        $("#print-results").text(`${resultOne} ${resultTwo} ${resultThree} ${resultFour}`)
    });

});