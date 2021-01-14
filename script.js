import clockFunc from "./clockScript.js";
import {shortcuts,moveBall} from "./keyScripting.js";
import {countDown} from "./countDown.js";
import { arrow } from "./arrowUp.js";
import darktheme from "./darkTheme.js";
import responsiveMedia from "./responsive.js";
import responsiveTester from "./responsivetester.js";
import userDeviceInfo from "./deviceDetection.js";



const d=document,
  $btnContainer=document.querySelector(".btn-container"),
  $clockContainer=document.querySelector(".clockshow"),
  givenDate=[1996,5,28,6,54,10];



d.addEventListener("DOMContentLoaded",e=>{
  countDown(".count-container","june 28, 2021 17:57:00","Happy birthday Lexx");
  clockFunc($btnContainer,$clockContainer);
  responsiveMedia('youtube',"(min-width:1024px)",`<a href="https://youtu.be/-jfaB91Euhc">Training video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/-jfaB91Euhc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
  responsiveMedia('gmaps',"(min-width:1024px)",`<a href=https://goo.gl/maps/vc1Wq1WTqQ1nCmyv5>Paris</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.34988503883!2d2.2069747513047933!3d48.85899999269729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sMuseo%20del%20Louvre!5e0!3m2!1ses!2sve!4v1605394910371!5m2!1ses!2sve" width="350" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`)
  responsiveTester("responsive-tester")
  userDeviceInfo('user-device');
})
d.addEventListener("click",e=>{
  
})
d.addEventListener("keydown",e=>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
})

d.addEventListener("scroll",e=>{
  arrow(".arrowUp",window.scrollY);
})

darktheme(".dark-theme-btn","dark-mode")