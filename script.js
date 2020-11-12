import clockFunc from "./clockScript.js";
import {shortcuts,moveBall} from "./keyScripting.js";
import {countDown} from "./countDown.js";
import { arrow } from "./arrowUp.js";
import darktheme from "./darkTheme.js";



const d=document,
  $btnContainer=document.querySelector(".btn-container"),
  $clockContainer=document.querySelector(".clockshow"),
  givenDate=[1996,5,28,6,54,10];



d.addEventListener("DOMContentLoaded",e=>{
  countDown(".count-container","june 28, 2021 17:57:00","Happy birthday Lexx");
  clockFunc($btnContainer,$clockContainer);
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