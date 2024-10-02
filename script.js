let beHappy = document.querySelector(".beHappy");
let greatDay = document.querySelector(".greatDay");
let reset = document.querySelector(".reset");

let move2 = () => {
    beHappy.classList.add("moves2");
}
let move3 = () => {
    greatDay.classList.add("moves3");
}
let resetall = () => {
    beHappy.classList.remove("moves2");
    greatDay.classList.remove("moves3");
}
beHappy.addEventListener("click", move2);
greatDay.addEventListener("click", move3);
reset.addEventListener("click", resetall)