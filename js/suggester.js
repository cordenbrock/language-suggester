$(document).ready(() => {

// form submission
    $("#form").submit((e) => {
        e.preventDefault();
        console.log("successful submission");

    // form answers
        let answerOne, answerTwo, answerThree, answerFour, answerFive;
        answerOne = $("#q1").val();
        answerTwo = $("input:radio[name=radio-1]:checked").val();
        answerThree = $("#q3").val();
        answerFour = parseInt($("#q4").val());
        answerFive = $("input:radio[name=radio-2]:checked").val();
        console.log(answerOne, answerTwo, answerThree, answerFour, answerFive);

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
            }
        };

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

        function ansFive() {
            if (answerFive === "a") {
                return "java";
            } else if (answerFive === "b") {
                return "python";
            } else if (answerFive === "c") {
                return "cobol";
            }            
        };

    // compile user input into one result 
        let ansArray, counts, compare, languageResult;
        ansArray = [ansOne(), ansTwo(), ansThree(), ansFour(), ansFive()]
        counts = {};
        compare = 0;
        
        (function(array){
        for (let i = 0, len = array.length; i < len; i++) {
            let word = array[i];
            
            if (counts[word] === undefined) {
                counts[word] = 1;
            } else {
                counts[word] = counts[word] + 1;
            }
            if (counts[word] > compare) {
                    compare = counts[word];
                    languageResult = ansArray[i];
            }
            }
        return languageResult;
        })(ansArray);        

    // print result
        $("#form").toggle();
        $("#loader").fadeIn(5000).fadeOut(5000, "swing", printResult);
        function printResult() {
            $("#print-result").text(`${languageResult}!`)
        }

    });

});