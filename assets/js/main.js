/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* VALIDAR SE EXISTE CONSTANTES*/
if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* VALIDAR SE EXISTE CONSTANTES*/
if(navClose){
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header') 
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
      
const sendEmail = (e) =>{
    e.preventDefault()
 

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_wp748ya', 'template_ei7mq77', '#contact-form', 'NYWoQcMEYjqCCyapk')
        .then(() =>{

            	// Show sent message
        contactMessage.textContent = 'Mensagem Enviada ✅'
// Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()


        }, () =>{
//show message error
            contactMessage.textContent = 'Mensagem não envida:ERRO ❌'

        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')        
     }
     window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
