//
import Translator from "./translator.js";

var translator = new Translator({
  persist: false,
  languages: ["vi", "en"],
  defaultLanguage: "vi",
  detectLanguage: true,
  filesLocation: "language"
});

translator.load("vi");

const btnChangeLang = document.getElementById('btn-change-lang');
if(btnChangeLang){
    btnChangeLang.addEventListener('click', () =>{
        let lang = btnChangeLang.dataset.value;
        if (lang === "vi") {
            lang = "en";
            btnChangeLang.dataset.value = "en";
        } else {
            lang = "vi";
            btnChangeLang.dataset.value = "vi";
        }
        btnChangeLang.src = "./assets/images/" + lang + ".png";

        let imgIntroduce = document.querySelectorAll(".introduction__img")[0]; // Chỉ sử dụng 1 class này
        imgIntroduce.src = "./assets/images/introduce-" + lang + ".png";

        translator.load(lang);
        
        setTimeout(() => {
            // document.getElementById('input-name').placeholder = translator._objectLang["contact"].name;
            // document.getElementById('input-major').placeholder = translator._objectLang["contact"].career;
            // document.getElementById('input-phone').placeholder = translator._objectLang["contact"].phone;
            // document.getElementById('input-mail').placeholder = translator._objectLang["contact"].mail;
        }, 10);
    })
}

/*=============== SHOW MENU ===============*/
const navMenu   = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            if (document.querySelector('.nav__menu a[href*=' + sectionId + ']'))
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            if (document.querySelector('.nav__menu a[href*=' + sectionId + ']'))
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== POPUP QUESTION ===============*/
const btnQuestion = document.getElementById('btn-question');
if(btnQuestion){
    btnQuestion.addEventListener('click', () =>{
        const popupQuestion = document.querySelector(btnQuestion.dataset.handle);
        if (popupQuestion)
        {
            popupQuestion.classList.add("show-popup");
        }
    })
}

/*=============== POPUP REPORTS ===============*/
const btnReport = document.getElementById('btn-report');
if(btnReport){
    btnReport.addEventListener('click', () =>{
        const popupReport = document.querySelector(btnReport.dataset.handle);
        if (popupReport)
        {
            popupReport.classList.add("show-popup");
        }
    })
}

const btnClosePopups = document.getElementsByClassName('btn-close');
for (let i = 0; i < btnClosePopups.length; i++) {
    const btnClosePoppup = btnClosePopups[i];
    btnClosePoppup.addEventListener('click', () =>{
        document.querySelector('.show-popup').classList.remove('show-popup');
    })
}

/*=============== SIGN IN / SIGN UP ===============*/
const navContact = document.querySelectorAll('.contact__nav--link')

function contactAction(event){
    event.preventDefault();
    document.querySelector('.contact__nav--active').classList.remove('contact__nav--active');
    this.classList.add('contact__nav--active');

    let handle = this.dataset.handle;

    console.log(handle);

    if (handle === "#contact-login") {
        document.querySelector(this.dataset.handle).classList.add('contact__login-active');
        document.querySelector("#contact-register").classList.remove('contact__register-active');
    } else {
        document.querySelector("#contact-login").classList.remove('contact__login-active');
        document.querySelector("#contact-register").classList.add('contact__register-active');
    }

    
    
}
navContact.forEach(n => n.addEventListener('click', contactAction))