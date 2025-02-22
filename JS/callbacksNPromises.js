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

//examples :

// 1️⃣ Basic Promise Example
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("✅ Basic Promise resolved after 2 seconds!");
    }, 2000);
});

myPromise.then((message) => console.log(message));


// 2️⃣ Promise with `catch` for Error Handling
const fetchData = new Promise((resolve, reject) => {
    let success = false; // Change to true to test both resolve & reject cases
    setTimeout(() => {
        success ? resolve("✅ Data fetched successfully!") : reject("❌ Error: Failed to fetch data.");
    }, 1500);
});

fetchData
    .then((message) => console.log(message))
    .catch((error) => console.log(error));


// 3️⃣ Chaining Multiple Promises
const step1 = () => new Promise((resolve) => setTimeout(() => resolve("✅ Step 1 completed"), 1000));
const step2 = () => new Promise((resolve) => setTimeout(() => resolve("✅ Step 2 completed"), 1000));

step1()
    .then((result1) => {
        console.log(result1);
        return step2();
    })
    .then((result2) => console.log(result2));


// 4️⃣ `Promise.all` - Run Multiple Promises in Parallel
const p1 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 1 done"), 1000));
const p4 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 2 done"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 3 done"), 1500));

Promise.all([p1, p4, p3]).then((results) => console.log("Promise.all:", results));


// 5️⃣ `Promise.race` - First Promise to Resolve Wins
const fast = new Promise((resolve) => setTimeout(() => resolve("🏆 Fast promise resolved"), 1000));
const slow = new Promise((resolve) => setTimeout(() => resolve("🐢 Slow promise resolved"), 3000));

Promise.race([fast, slow]).then((winner) => console.log("Promise.race:", winner));
