let connNet = document.getElementById("connBtnNett");
let connection = document.getElementById("connection");
let inputGa = document.getElementsByClassName("input-conn");
let inputGa1 = document.getElementsByClassName("input-conn1");
let inputGa2 = document.getElementsByClassName("input-conn2");
let inputGa4 = document.getElementsByClassName("input-conn4");
let mainInput = [];
function soyunsu(){
    if(connection.value===""){
        connNet.disabled = true;
    }else{
        connNet.disabled = false;
    }
};

// скачивание анкеты
let fileC = document.getElementById("fileC");
connNet.addEventListener("click",coneMain)

function coneMain(){
    mainInput.unshift(`Name: ${inputGa.value}`)
    mainInput.unshift(`Project: ${inputGa1.value}`)
    mainInput.unshift(`Email: ${inputGa2.value}`)
    mainInput.unshift(`Phone: ${inputGa4.value}`)
}

fileC.addEventListener("click", function(){
    window.open('/images/navigator/navigator-image/anketa.jpg')
})

