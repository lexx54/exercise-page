import clockFunc from "./clockScript.js";
import {shortcuts,moveBall} from "./keyScripting.js";
import {countDown} from "./countDown.js";
const d=document,
  $btnContainer=document.querySelector(".btn-container"),
  $clockContainer=document.querySelector(".clockshow"),
  givenDate=[1996,5,28,6,54,10];
clockFunc($btnContainer,$clockContainer);


d.addEventListener("DOMContentLoaded",e=>{
  countDown(".count-container","June 28, 2021 12:54:54");
})
d.addEventListener("click",e=>{
  
})
d.addEventListener("keydown",e=>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
})