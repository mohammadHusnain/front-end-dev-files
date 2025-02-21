console.log("hello buddies");
console.log("hello buddies whats up");

setTimeout(() => {
    console.log("i am inside settimeout");
}, 1500);

console.log("i am back again");

const callback = (arg) => {
    console.log(arg);
};

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("brownladd_"); // Pass the callback as a function
    document.body.appendChild(sc); // Append the script to the DOM
};

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-apacheconf.min.js", callback);

// of we takes callbacks inside callbacks it becomes callback hell or dom pyramid. sol of callback hell is promises

// ----------- promises-----------//

console.log("these are promises");

let promise1 = new Promise((resolve , reject) => {
let a = Math.random;
if (a<0.5) {
    reject("no random number was supporting you");
}

else{
    setTimeout(()=>{
        console.log("i m dunnn");
        resolve('husnaiynnn here ')
        
    }, 3000)
}

})

let p2 = Promise.all([promise1])
p3.then((a)=>{
    console.log(a);
    
}).catch(err=>{
    console.log(err);
    
})

