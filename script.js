import clockFunc from "./clockScript.js";
import {shortcuts,moveBall} from "./keyScripting.js";

const d=document,
  $btnContainer=document.querySelector(".btn-container"),
  $clockContainer=document.querySelector(".clockshow");
clockFunc($btnContainer,$clockContainer);
d.addEventListener("keydown",e=>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
})