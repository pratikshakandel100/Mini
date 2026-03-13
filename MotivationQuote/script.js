// let quote = await fetch("https://api.quotable.io/random")
// console.log(quote)
// let btn = document.querySelector("#btn");
btn.addEventListener("click", async (ev)=>{
    let quote = document.querySelector("#quote")
    ev.preventDefault();
    console.log("hello")
    try{
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    quote.innerText = data.slip.advice;
    console.log(data.slip.advice)
    }
    catch(error){
         console.log(error)
    
}
})




