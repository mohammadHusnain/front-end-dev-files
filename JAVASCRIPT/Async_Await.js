// function getData() {
//     // simulate getting data from a server
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("promise resolved successfully")
//         } , 2500)
//     })
// }

//async await test on dummy api

async function getData() {
    // Simulate getting data from a server
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.text(); // Parse the JSON data
    return data; // Return the fetched data
}

// Example usage
getData().then(data => {
    console.log('Data received:', data);
}).catch(error => {
    console.error('Error fetching data:', error);
});

async function main() {

    console.log("loading modules");
    console.log("almost there");
    console.log("data loaded");

    //async await
    let data = await getData();

    console.log(data);
    console.log("process data");
    console.log("other task");

}

main(); // calling function

// data.then((v)=>{  // this is callback approach , we can still modify it with async await approach

// console.log(data);
// console.log("process data");
// console.log("other task");

// })











//A function that simulates a delay (like fetching data from an API)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John Doe", age: 25 };
            resolve(data);
        }, 2000); // Simulates a 2-second delay
    });
}

// An async function to use await
async function getData() {
    console.log("Fetching data...");
    try {
        const result = await fetchData(); // Waits for fetchData() to resolve
        console.log("Data received:", result);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getData();

//complex example
// Simulate an API call to get user details
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "John Doe", email: "john@example.com" });
            } else {
                reject("User not found");
            }
        }, 2000); // 2-second delay
    });
}

// Simulate an API call to get posts by user
function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { id: 101, title: "Post 1", content: "Lorem ipsum" },
                    { id: 102, title: "Post 2", content: "Dolor sit amet" },
                ]);
            } else {
                reject("No posts found for this user");
            }
        }, 1500); // 1.5-second delay
    });
}

// Complex async function
async function getUserDetailsAndPosts(userId) {
    try {
        console.log("Fetching user details...");
        const user = await fetchUser(userId); // Wait for user details
        console.log("User details received:", user);

        console.log("Fetching user posts...");
        const posts = await fetchUserPosts(userId); // Wait for user posts
        console.log("User posts received:", posts);

        // Print final data
        console.log(`\nUser Info:
        Name: ${user.name}
        Email: ${user.email}`);

        console.log("\nUser Posts:");
        posts.forEach(post => {
            console.log(`- ${post.title}: ${post.content}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the function
getUserDetailsAndPosts(1);
