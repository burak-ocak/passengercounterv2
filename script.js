let entryCount = document.querySelector("#entry-count");
let btnIncrement = document.querySelector("#btn-increment");
let btnSave = document.querySelector("#btn-save");
let saveCount = document.querySelector("#save-count");
let gunler = [];
let totalPeople = document.querySelector("#total-people");

let count = 0;

btnIncrement.addEventListener("click", function(){
    count += 1;
    entryCount.textContent = count;
})

btnSave.addEventListener("click", function(){
    saveCount.textContent += count + " - ";
    gunler.push(count);
    
    localStorage.setItem("gunSayac" , JSON.stringify(gunler))

    count = 0;
    entryCount.textContent = count;
    
})

let okuma = localStorage.getItem("gunSayac");
if(okuma !== null){
    let formatJs = JSON.parse(okuma);
    formatJs.forEach( (eleman)=>{
        saveCount.textContent += eleman + " - ";
        gunler.push(eleman);
    } )
    for(let i = 0; i < formatJs.length; i++){
        formatJs[i] = 
        totalPeople.textContent += formatJs[i];
    }
}
