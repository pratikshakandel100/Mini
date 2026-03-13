let btn = document.querySelector("button");
let statuss = document.querySelector("#status");
let newPara = document.createElement("p");

statuss.appendChild(newPara);

function placeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            newPara.innerText = "We receive your order and we are placing your order";
            console.log("step 1");
            resolve();
        },2000)
    })
}

function prepareFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            newPara.innerText = "We are preparing your food";
            console.log("step 2");
            resolve();
        },4000)
    })
}

function packFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            newPara.innerText = "We are packing your food."
            console.log("step 3")
            resolve();
        }, 6000)
    })
}

function assignDeliveryBoy(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        newPara.innerText = "Delivery Boy Assigned"
        console.log("step 4")
        resolve();
        },8000)
    })
}

function Delivered(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        newPara.innerText = "Food Delivered"
        resolve()
        }, 10000)
    })
}


async function startOrder(){
    await placeOrder();
    await prepareFood();
    await packFood();
    await assignDeliveryBoy();
    await Delivered();
}

btn.addEventListener("click", startOrder);