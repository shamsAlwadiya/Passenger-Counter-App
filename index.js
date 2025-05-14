let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let restartEl = document.getElementById("restart")

function increment() {
    count += 1
    countEl.textContent = count
}
 function save(){
    const countStr = count + '- ';
    saveEl.innerText += countStr
    countEl.innerText=0
 }
 function restart (){
    countEl = 0;
    saveEl.textContent= 'Previous entries :'
    

 }
console.log("Let's count people on the subway!")
