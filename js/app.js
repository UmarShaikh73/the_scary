const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");
const links = document.querySelectorAll("ul li");

// menu.addEventListener("click", () => {
//   ul.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });


const loader = document.querySelector(".bload");
window.addEventListener("load",fadeout);

function fadeout() {
  loader.classList.add("disapper");
}


const loader2 = document.querySelector(".mtxt");
document.querySelector(".input-group-btn").addEventListener("click",scarit);

function scarit() {
  loader2.classList.add("rotait");
}

document.querySelector(".mtxt").addEventListener("animationend",()=>{
  document.querySelector("video").play();
  document.querySelector(".dis").style.display="block";
});
