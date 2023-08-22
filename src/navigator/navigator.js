
// переводчик
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
// первое модальное окно
let NavBtn = document.getElementById("navBtn");
let NavModal = document.getElementsByClassName("navigatorModal");
let NavBtnNo = document.getElementById("navBtn-no");
let NavBtnNet = document.getElementById("navBtnNet");
let inputNav = document.getElementById("textsend");

NavBtn.addEventListener("click", modal);
NavBtnNo.addEventListener("click", modalNo);
NavBtnNet.addEventListener("click", modalNet);
function modal(){
   for(let i = 0; i < NavModal.length;i+=1){
        NavModal[i].style.display = "block";
   } 
};

function modalNo(){
    for(let i = 0; i < NavModal.length;i+=1){
        NavModal[i].style.display = "none";    
    }
};

function modalNet(){
    for(let i = 0; i < NavModal.length;i+=1){
        NavModal[i].style.display = "none";
    }
};

function soyuns(){
    if(inputNav.value===""){
        NavBtnNet.disabled = true;
    }else{
        NavBtnNet.disabled = false;
    }
};

// второе модальное окно
let NavBtn2 = document.getElementById("navBtn2");
let NavModal2 = document.getElementsByClassName("navigatorModal2");
let NavBtnNo2 = document.getElementById("navBtnNo2");
let NavBtnNet2 = document.getElementById("navBtnNet2");

NavBtn2.addEventListener("click", modal2);
NavBtnNo2.addEventListener("click", modalNo2);
NavBtnNet2.addEventListener("click", modalNet2);

function modal2 () {
    for(let i = 0; i < NavModal2.length;i+=1){
        NavModal2[i].style.display = "block";
    }
};

function modalNo2() {
    for(let i = 0; i < NavModal2.length;i+=1){
        NavModal2[i].style.display = "none";
    }
};

function modalNet2() {
    for(let i = 0; i < NavModal2.length;i+=1){
        NavModal2[i].style.display = "none";
    }
};
// для меню мобильная версия
let NavBtnBlock = document.getElementById("navibtn");
let NavBtnBlockMenu = document.getElementsByClassName("naviBlockDiv");
let NaviBtnNe = document.getElementById("NavibtnNe");

NavBtnBlock.addEventListener("click", NaviBtnBlo);
NaviBtnNe.addEventListener("click", NaviBtnNee);

function NaviBtnBlo() {
    for(let i = 0; i < NavBtnBlockMenu.length;i+=1){
        NavBtnBlockMenu[i].style.display = "block";
    }
    NavBtnBlock.style.display = "none"
};

function NaviBtnNee(){
    for(let i = 0; i < NavBtnBlockMenu.length;i+=1){
        NavBtnBlockMenu[i].style.display = "none";
      
    }  
    NavBtnBlock.style.display = "block"
};

// скачивание анкеты
let fileZ = document.getElementById("fileZ");

fileZ.addEventListener("click", function(){
    window.open('/images/navigator/navigator-image/anketa.jpg')
})
