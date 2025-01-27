// A function that simulates a delay (like fetching data from an API)
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
