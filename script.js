

let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");


function increment() {
count += 1;
countEl.innerText = count;

}



function save(){
    let entries = count + '-';
 saveEl.textContent += entries
}

function reset(){
    count = 0; 
    countEl.textContent = count
}