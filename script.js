let last;
let user = "O";
const pressBtn = (id) => {
    console.log(id);
    if (user !== "X") {
        document.getElementById(id).innerHTML = "X";
        user = "X";
        document.getElementById(id).disabled = true;
        result();
    } else {
        document.getElementById(id).innerHTML = "O";
        user = "O";
        result();
        document.getElementById(id).disabled = true;
    }

}
const result = () => {
    let B1 = document.getElementById("1").innerHTML;
    let B2 = document.getElementById("2").innerHTML;
    let B3 = document.getElementById("3").innerHTML;
    let B4 = document.getElementById("4").innerHTML;
    let B5 = document.getElementById("5").innerHTML;
    let B6 = document.getElementById("6").innerHTML;
    let B7 = document.getElementById("7").innerHTML;
    let B8 = document.getElementById("8").innerHTML;
    let B9 = document.getElementById("9").innerHTML;
    if (B1 === B2 && B2 === B3 && B1 !== "") {
        document.getElementById("RESULT").innerHTML = B1 + " WON";
        disableBtn();
    } else if (B4 === B5 && B5 === B6 && B4 !== "") {
        document.getElementById("RESULT").innerHTML = B4 + " WON";
        disableBtn();
    } else if (B7 === B8 && B8 === B9 && B7 !== "") {
        document.getElementById("RESULT").innerHTML = B7 + " WON";
        disableBtn();
    } else if (B1 === B4 && B4 === B7 && B1 !== "") {
        document.getElementById("RESULT").innerHTML = B1 + " WON";
        disableBtn();
    } else if (B3 === B5 && B5 === B7 && B3 !== "") {
        document.getElementById("RESULT").innerHTML = B3 + " WON";
        disableBtn();
    } else if (B1 === B5 && B5 === B9 && B1 !== "") {
        document.getElementById("RESULT").innerHTML = B1 + " WON";
        disableBtn();
    } else if (B2 === B5 && B5 === B8 && B2 !== "") {
        document.getElementById("RESULT").innerHTML = B2 + " WON";
        disableBtn();
    } else if (B3 === B6 && B6 === B9 && B3 !== "") {
        document.getElementById("RESULT").innerHTML = B3 + " WON";
        disableBtn();
    } else {
        document.getElementById("RESULT").innerHTML = "Game is in progress...";
    }
}

let reset = () => {
    for (i = 1; i <= 9; i++) {
        document.getElementById(`${i}`).innerHTML = "";
        document.getElementById(`${i}`).disabled = false;
    }
    document.getElementById("RESULT").innerHTML = "";
}
let disableBtn = () => {
    for (i = 1; i <= 9; i++) {
        document.getElementById(`${i}`).disabled = true;
    }
}