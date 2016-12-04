//*/
//
//$(document).ready(function () {
//            $('#wordcount').html();
//            //    <b>some text</b>});
//
//
//            function calculate() {
//                $('#wordcount').submit(function (event) {
//                    event.preventDefault();
//
//                    var tokens = tokenizeText(text);
//                    var numTotalWords = tokens.length;
//                    var userText = $(this).find('#user-text').val();
//                    reportOnText(removeReturns(userText));
//                    var textReport = $('.js-text-report');
//                    textReport.find('.js-word-count').text(numTotalWords);
//
//                    //                    $('text-report').html(0);
//                    //                    var inputValue = $('text-report').val();
//                    //                    var wordtotal = inputValue.split(" ");
//
//                    //                    var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
//                    //                    var wordCount = tokenizeText(text).length;
//                    //                    return (wordCount / numSentences).toFixed(2);
//                    //                var wordstotal = wordstotal.length;
//                    //                $('wordCount').html(wordstotal);
//                    //                var wordtotalTrim = inputValue.trim();
//                    //                    var wordtotalRegex = wordtotalTrim.replace(regex, ' ');
//                    //                    var wordtotal = inputValue.trim().replace(regex, ' ').split(' ').length;
//                    //  $('#wordcount').html("some text");
//
//                    //                    return wordtotal;                    //                    wordcount.setAttribute(“wordcount”, “wordtotal”);
//                    //                    document.getElementById(“wordcount”);
//                });
//            }


//document.getElementById("wordcount").innerHTML;

//   document.getElementById("wordcount").innerHTML = calculate();


function getAverageWordsPerSentence(text) {


    var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
    var total = tokenizeText(text).length;
    return (total / numSentences).toFixed(2);
}

function getAverageWordLength(tokens) {
    var totalLength = tokens.join("").length;
    return (totalLength / tokens.length).toFixed(2);
}

function countDistinctWords(tokens) {
    var distinctWords = [];
    for (var i = 0; i < tokens.length; i++) {
        if (distinctWords.indexOf(tokens[i]) === -1) {
            distinctWords.push(tokens[i]);
        }
    }
    return distinctWords.length;
}

function tokenizeText(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


function removeValues(text) {
    return text.replace(/\r?\n|\r/g, "");
}




function reportOnText(text) {

    var tokens = tokenizeText(text);
    var numDistinctWords = countDistinctWords(tokens);
    var numTotalWords = tokens.length;
    var averageWordLength = getAverageWordLength(tokens);
    var averageWordsPerSentence = getAverageWordsPerSentence(text);

    var textReport = $('.js-text-report');
    textReport.find('.wordscount').text(numTotalWords);
    textReport.find('.uniquewordscount').text(numDistinctWords);
    textReport.find('.averagewordslength').text(
        averageWordLength + " characters");
    textReport.find('.averagesentenceslength').text(
        averageWordsPerSentence + " words");
    textReport.removeClass('hidden');
}

// Watch for and handle form submissions
function showItems() {
    $('.textform').submit(function (event) {
        event.preventDefault();
        var userText = $(this).find('#user-text').val();
        reportOnText(removeValues(userText));
    });
}

$(function () {
    showItems();
});
