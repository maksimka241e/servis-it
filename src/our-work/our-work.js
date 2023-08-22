let ourWorkModal = document.getElementById("ourWorkModal");
let ourWorkNo = document.getElementById("ourBtnNo");
let ourWorkNet = document.getElementById("ourWorkNet");
let ourModal = document.getElementsByClassName("our-work-modal");

ourWorkModal.addEventListener("click", ourWorkModali);
ourWorkNo.addEventListener("click", ourWorkNoo);
ourWorkNet.addEventListener("click", ourWorkNett);

function ourWorkModali(){
    for(let i = 0; i < ourModal.length;i+=1){
        ourModal[i].style.display = "block";
    }
};

function ourWorkNoo(){
    for(let i = 0; i < ourModal.length;i+=1){
        ourModal[i].style.display = "none";
    }
};

function ourWorkNett(){
    for(let i = 0; i < ourModal.length;i+=1){
        ourModal[i].style.display = "none";
    }
}