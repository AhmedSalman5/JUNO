var btn1 = document.getElementById('Ans1');
var btn2 = document.getElementById('Ans2');
var btn3 = document.getElementById('Ans3');


function action1() {
    checkAnswer();
}

function action2() {
console.log("grate");
ChangeQuestion();
}

function action3() {
    checkAnswer();
}


btn1.addEventListener('click', action1);
btn2.addEventListener('click', action2);
btn3.addEventListener('click', action3);

//----------------------------------------------------------------


var popup = document.getElementById('popup');
var closePopup = document.getElementById('closePopup');

function showPopup() {
    popup.style.display = 'block';
}

function hidePopup() {
    popup.style.display = 'none';
}

closePopup.addEventListener('click', hidePopup);

function checkAnswer() {
    showPopup();
}

//----------------------------------------------------------------

function ChangeQuestion (){
    btn1.innerHTML = "bird";
    btn2.innerHTML = "fish";
    btn3.innerHTML = "rabbit";
}