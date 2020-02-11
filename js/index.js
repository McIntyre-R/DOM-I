const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const middleImg = document.getElementById('middle-img'); 
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"] )

const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src'])


const navArr = document.getElementsByTagName('a')
navArr[0].textContent = siteContent['nav']['nav-item-1']
navArr[1].textContent = siteContent['nav']['nav-item-2']
navArr[2].textContent = siteContent['nav']['nav-item-3']
navArr[3].textContent = siteContent['nav']['nav-item-4']
navArr[4].textContent = siteContent['nav']['nav-item-5']
navArr[5].textContent = siteContent['nav']['nav-item-6']


const hOne = document.getElementsByTagName('h1')
hOne[0].textContent = siteContent['cta']['h1']

const btnText = document.getElementsByTagName('button')
btnText[0].innerText = siteContent['cta']['button']

const topHead = document.querySelectorAll('.top-content h4')
topHead[0].textContent = siteContent['main-content']['features-h4']
topHead[1].textContent = siteContent['main-content']['about-h4']

const topPara = document.querySelectorAll('.top-content p')
topPara[0].textContent = siteContent['main-content']['features-content']
topPara[1].textContent = siteContent['main-content']['about-content']

const botHead = document.querySelectorAll('.bottom-content h4')
botHead[0].textContent = siteContent['main-content']['services-h4']
botHead[1].textContent = siteContent['main-content']['product-h4']
botHead[2].textContent = siteContent['main-content']['vision-h4']

const botPara = document.querySelectorAll('.bottom-content p')
botPara[0].textContent = siteContent['main-content']['services-content']
botPara[1].textContent = siteContent['main-content']['product-content']
botPara[2].textContent = siteContent['main-content']['vision-content']

const contactHead = document.querySelectorAll('.contact h4')
contactHead[0].textContent = siteContent['contact']['contact-h4']

const contactPara = document.querySelectorAll('.contact p')
contactPara[0].textContent = siteContent['contact']['address']
contactPara[1].textContent = siteContent['contact']['phone']
contactPara[2].textContent = siteContent['contact']['email']


const footer = document.querySelectorAll('footer p')
footer[0].textContent = siteContent['footer']['copyright']


const navColor = document.getElementsByTagName('header')
navColor[0].style.backgroundColor = 'green'

const newA = document.createElement("a")
newA.textContent = 'newA'
const newB = document.createElement("a")
newB.textContent = 'newB'

const nav = document.getElementsByTagName('nav')
nav[0].appendChild(newA);
nav[0].appendChild(newB);




