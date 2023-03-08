/*              Н А Ч А Л Ь Н Ы Е    П Е Р Е М Е Н Н Ы Е
* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
let nol = "O";
let kres = "×";
let cell_quna = 9;
let a = nol;
let rese = "";
let numplaer = "1";
let player = 1;


/*       С Б Р О С
* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function res(){
    document.querySelector(".val1").innerHTML = rese;
    document.querySelector(".val2").innerHTML = rese;
    document.querySelector(".val3").innerHTML = rese;
    document.querySelector(".val4").innerHTML = rese;
    document.querySelector(".val5").innerHTML = rese;
    document.querySelector(".val6").innerHTML = rese;
    document.querySelector(".val7").innerHTML = rese;
    document.querySelector(".val8").innerHTML = rese;
    document.querySelector(".val9").innerHTML = rese;
    numplaer = "1";
    a = nol;
    document.querySelector(".numpl").innerHTML = numplaer;
}


/*             Х О Д Ы
* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

/*1 столбик
* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
function move1() {
    let txtcon = document.querySelector(".val1").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    }
    else {
        document.querySelector(".val1").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val9 = document.querySelector(".val9").textContent;
        if(val1 === nol && val2 === nol && val3 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val4 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val5 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }

        if(val1 === kres && val2 === kres && val3 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val4 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val5 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
    }
}

function move2() {
    let txtcon = document.querySelector(".val2").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    } else {
        document.querySelector(".val2").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;

        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;

        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val8 = document.querySelector(".val8").textContent;
        let val9 = document.querySelector(".val9").textContent;
        if(val1 === nol && val2 === nol && val3 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val4 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val5 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val2 === nol && val5 === nol && val8 === nol){
            alert("Игрок 1 победил!");
            res();
        }

        if(val1 === kres && val2 === kres && val3 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val4 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val5 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val2 === kres && val5 === kres && val8 === kres){
            alert("Игрок 2 победил!");
            res();
        }
    }
}

function move3() {
    let txtcon = document.querySelector(".val3").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    } else {
        document.querySelector(".val3").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }

        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val6 = document.querySelector(".val6").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val9 = document.querySelector(".val9").textContent;
        if(val1 === nol && val2 === nol && val3 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val4 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val5 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val3 === nol && val5 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val3 === nol && val6 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }

        if(val1 === kres && val2 === kres && val3 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val4 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val5 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val3 === kres && val5 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val3 === kres && val6 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
    }
}

/*2 столбик
* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
function move4() {
    let txtcon = document.querySelector(".val4").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    } else {
        document.querySelector(".val4").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val6 = document.querySelector(".val6").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val9 = document.querySelector(".val9").textContent;
        if(val1 === nol && val2 === nol && val3 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val4 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val5 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val5 === nol && val4 === nol && val6 === nol){
            alert("Игрок 1 победил!");
            res();
        }

        if(val1 === kres && val2 === kres && val3 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val4 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val5 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val5 === kres && val4 === kres && val6 === kres){
            alert("Игрок 2 победил!");
            res();
        }
    }
}

function move5() {
    let txtcon = document.querySelector(".val5").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    } else {
        document.querySelector(".val5").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val6 = document.querySelector(".val6").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val8 = document.querySelector(".val8").textContent;
        let val9 = document.querySelector(".val9").textContent;
        if(val1 === nol && val2 === nol && val3 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val4 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val5 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val2 === nol && val5 === nol && val8 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val3 === nol && val5 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val3 === nol && val6 === nol && val6 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val5 === nol && val4 === nol && val6 === nol){
            alert("Игрок 1 победил!");
            res();
        }

        if(val1 === kres && val2 === kres && val3 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val4 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val5 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val2 === kres && val5 === kres && val8 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val3 === kres && val5 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val5 === kres && val4 === kres && val6 === kres){
            alert("Игрок 2 победил!");
            res();
        }
    }
}

function move6() {
    let txtcon = document.querySelector(".val6").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    } else {
        document.querySelector(".val6").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val6 = document.querySelector(".val6").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val9 = document.querySelector(".val9").textContent;

        if (val3 === nol && val6 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val5 === nol && val4 === nol && val6 === nol){
            alert("Игрок 1 победил!");
            res();
        }

        if (val3 === kres && val6 === kres && val6 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val5 === kres && val4 === kres && val6 === kres){
            alert("Игрок 2 победил!");
            res();
        }
    }
}

/*3 столбик
* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
function move7() {
    let txtcon = document.querySelector(".val7").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    }
    else {
        document.querySelector(".val7").innerHTML = a;
        if (a === kres){
            a = nol;
        }
        else {
            a = kres;
        }

        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val6 = document.querySelector(".val6").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val8 = document.querySelector(".val8").textContent;
        let val9 = document.querySelector(".val9").textContent;
        if(val1 === nol && val2 === nol && val3 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val4 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val5 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val3 === nol && val5 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val7 === nol && val8 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }


        if(val1 === kres && val2 === kres && val3 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val4 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val5 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val3 === kres && val5 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val7 === kres && val8 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }

    }
}

function move8() {
    let txtcon = document.querySelector(".val8").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    } else {
        document.querySelector(".val8").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val8 = document.querySelector(".val8").textContent;
        let val9 = document.querySelector(".val9").textContent;

        if (val2 === nol && val5 === nol && val8 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val7 === nol && val8 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }

        if (val2 === kres && val5 === kres && val8 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val7 === kres && val8 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
    }
}

function move9() {
    let txtcon = document.querySelector(".val9").textContent;
    if (txtcon === nol || txtcon === kres) {
        alert("Это место занято!!!");
    } else {
        document.querySelector(".val9").innerHTML = a;
        if (a === kres) {
            a = nol;
        } else {
            a = kres;
        }
        if(numplaer === "1"){
            numplaer = "2";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        else if (numplaer === "2"){
            numplaer = "1";
            document.querySelector(".numpl").innerHTML=numplaer;
        }
        let val1 = document.querySelector(".val1").textContent;
        let val2 = document.querySelector(".val2").textContent;
        let val3 = document.querySelector(".val3").textContent;
        let val4 = document.querySelector(".val4").textContent;
        let val5 = document.querySelector(".val5").textContent;
        let val6 = document.querySelector(".val6").textContent;
        let val7 = document.querySelector(".val7").textContent;
        let val8 = document.querySelector(".val8").textContent;
        let val9 = document.querySelector(".val9").textContent;
        if(val1 === nol && val2 === nol && val3 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val4 === nol && val7 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val1 === nol && val5 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        else if (val7 === nol && val8 === nol && val9 === nol){
            alert("Игрок 1 победил!");
            res();
        }
        if(val1 === kres && val2 === kres && val3 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val4 === kres && val7 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val1 === kres && val5 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }
        else if (val7 === kres && val8 === kres && val9 === kres){
            alert("Игрок 2 победил!");
            res();
        }

    }
}
