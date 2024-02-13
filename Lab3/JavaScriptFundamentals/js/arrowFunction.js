// First
function ask2(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask2(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);


// Second method

let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

ask("Kalishisanmi?", function () {alert("You agreed")},
    function (){alert("You canceled")})