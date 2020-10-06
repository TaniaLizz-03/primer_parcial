
function relojHora1() {
    var actualTime = new Date();
    var hour = actualTime.getHours();
    var minute = actualTime.getMinutes();
    var second = actualTime.getSeconds();

    hourPrint = hour + " : " + minute + " : " + second;

    document.getElementById("reloj1").innerHTML = hourPrint;

    x = setTimeout(function () { relojHora1()}, 1000);
    monto = x*0.0138888889;
    document.getElementById("totalP1").innerHTML = monto;

}
function relojHora2() {
    var actualTime = new Date();
    var hour = actualTime.getHours();
    var minute = actualTime.getMinutes();
    var second = actualTime.getSeconds();

    hourPrint = hour + " : " + minute + " : " + second;

    document.getElementById("reloj2").innerHTML = hourPrint;

    x = setTimeout(function () { relojHora2()}, 1000);
    monto = x*0.0138888889;
    document.getElementById("totalP2").innerHTML = monto;

}
function relojHora3() {
    var actualTime = new Date();
    var hour = actualTime.getHours();
    var minute = actualTime.getMinutes();
    var second = actualTime.getSeconds();

    hourPrint = hour + " : " + minute + " : " + second;

    document.getElementById("reloj3").innerHTML = hourPrint;

    x3 = setTimeout(function () { relojHora3()}, 1000);
    monto3 = x3*0.0138888889;
    document.getElementById("totalP3").innerHTML = monto3;

}
function relojHora4() {
    var actualTime = new Date();
    var hour = actualTime.getHours();
    var minute = actualTime.getMinutes();
    var second = actualTime.getSeconds();

    hourPrint = hour + " : " + minute + " : " + second;

    document.getElementById("reloj4").innerHTML = hourPrint;

    x = setTimeout(function () { relojHora4()}, 1000);
    monto = x*0.0138888889;
    document.getElementById("totalP4").innerHTML = monto;

}
function relojHora5() {
    var actualTime = new Date();
    var hour = actualTime.getHours();
    var minute = actualTime.getMinutes();
    var second = actualTime.getSeconds();

    hourPrint = hour + " : " + minute + " : " + second;

    document.getElementById("reloj5").innerHTML = hourPrint;

    x = setTimeout(function () { relojHora5()}, 1000);
    monto = x*0.0138888889;
    document.getElementById("totalP5").innerHTML = monto;

}
function relojHora6() {
    var actualTime = new Date();
    var hour = actualTime.getHours();
    var minute = actualTime.getMinutes();
    var second = actualTime.getSeconds();

    hourPrint = hour + " : " + minute + " : " + second;

    document.getElementById("reloj6").innerHTML = hourPrint;

    x = setTimeout(function () { relojHora6()}, 1000);
    monto = x*0.0138888889;
    document.getElementById("totalP6").innerHTML = monto;

}


function clockStop1() {

    clearTimeout(x);
    clearTimeout(monto);
}
function clockStop2() {

    clearTimeout(x);
    clearTimeout(monto);
}
function clockStop3() {

    clearTimeout(x);
    clearTimeout(monto);
}
function clockStop4() {

    clearTimeout(x);
    clearTimeout(monto);
}
function clockStop5() {

    clearTimeout(x);
    clearTimeout(monto);
}
function clockStop6() {

    clearTimeout(x);
    clearTimeout(monto);
}



function changeImage1(){
   tabla1 = document.getElementById(`tabla1`);

    if(tabla1.src.match('tablaOff')){
        tabla1.src = "tablaOn.png";
        relojHora1();
       document.getElementById("inc1").innerHTML = hourPrint;
    } else {
        tabla1.src = "tablaOff.png";
        clockStop1();

    }

}
function changeImage2(){
    tabla2 = document.getElementById(`tabla2`);
 
     if(tabla2.src.match('tablaOff')){
         tabla2.src = "tablaOn.png";
         relojHora2();
        document.getElementById("inc2").innerHTML = hourPrint;
     } else {
         tabla2.src = "tablaOff.png";
         clockStop2();
 
     }
 
 }
 function changeImage3(){
    tabla3 = document.getElementById(`tabla3`);
 
     if(tabla3.src.match('tablaOff')){
         tabla3.src = "tablaOn.png";
         relojHora3();
        document.getElementById("inc3").innerHTML = hourPrint;
     } else {
         tabla3.src = "tablaOff.png";
         clockStop3();
 
     }
 
 }
 function changeImage4(){
    tabla4 = document.getElementById(`tabla4`);
 
     if(tabla4.src.match('tablaOff')){
         tabla4.src = "tablaOn.png";
         relojHora4();
        document.getElementById("inc4").innerHTML = hourPrint;
     } else {
         tabla4.src = "tablaOff.png";
         clockStop4();
 
     }
 
 }
 function changeImage5(){
    tabla5 = document.getElementById(`tabla5`);
 
     if(tabla5.src.match('tablaOff')){
         tabla5.src = "tablaOn.png";
         relojHora5();
        document.getElementById("inc5").innerHTML = hourPrint;
     } else {
         tabla5.src = "tablaOff.png";
         clockStop5();
 
     }
 
 }
 function changeImage6(){
    tabla6 = document.getElementById(`tabla6`);
 
     if(tabla6.src.match('tablaOff')){
         tabla6.src = "tablaOn.png";
         relojHora6();
        document.getElementById("inc6").innerHTML = hourPrint;
     } else {
         tabla6.src = "tablaOff.png";
         clockStop6();
 
     }
 
 }