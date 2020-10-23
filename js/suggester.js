$(document).ready(() => {

// form submission
    $("#form").submit((e) => {
        e.preventDefault();
        
    // form answers
        let answerOne, answerTwo, answerThree, answerFour, answerFive;
        answerOne = $("#q1").val();
        answerTwo = $("input:radio[name=radio-1]:checked").val();
        answerThree = $("#q3").val().length;
        answerFour = parseInt($("#q4").val());
        answerFive = $("input:radio[name=radio-2]:checked").val();

    // validate form || send error
        if (answerOne && answerTwo && answerThree && answerFour && answerFive) {
        // analyze user answers
            function ansOne() {
                if (answerOne === "1") {
                    return "java";
                } else if (answerOne === "2") {
                    return "python";
                } else if (answerOne === "3") {
                    return "cobol";
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
                if (answerThree <= 5) {
                    return "java";
                } else if (answerThree>5 && answerThree<=10) {
                    return "python";
                } else if (answerThree > 10) {
                    return "cobol";
                }
            };

            function ansFour() {
                if (answerFour < 0) {
                    return "java";
                } else if (answerFour>0 && answerFour<100) {
                    return "python";
                } else if (answerFour >= 100) {
                    return "cobol";
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
                $("#print-result").text(`${languageResult}!`);
            }
        } else {
            alert("whoa tiger! looks like ya forgot a Q!");
        };
    });
});