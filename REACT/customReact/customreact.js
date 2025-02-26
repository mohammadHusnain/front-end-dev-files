// Function to render elements
function customRender(reactElement, mainContainer) {

    // Step 1: Create a DOM element based on the type specified in reactElement
    // const domElement = document.createElement(reactElement.type);

    // // Step 2: Set the inner HTML of the DOM element to the children of reactElement
    // domElement.innerHTML = reactElement.children;

    // // Step 3: Set attributes for the DOM element using the props from reactElement
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // // Step 4: Append the created DOM element to the mainContainer
    // mainContainer.appendChild(domElement);

    // more modular code no repetition

    // Step 1: Create a DOM element based on the type specified in reactElement
    const domElement = document.createElement(reactElement.type);

    // Step 2: Set the inner HTML of the DOM element to the children of reactElement
    domElement.innerHTML = reactElement.children;

    // Step 3: Set attributes for the DOM element using the props from reactElement
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Skip the children property
        domElement[prop] = reactElement.props[prop]; // Add props like href, target, onClick, etc.
    }

    // Step 4: Append the created DOM element to the mainContainer
    mainContainer.appendChild(domElement);
}

// Define the link element
const reactElement = {
    type: 'a', // This is an anchor (<a>) tag
    props: {
        href: 'https://google.com', // Link to Google
        target: '_blank' // Open link in a new tab
    },
    children: 'click me to visit google' // Text inside the anchor tag
};

// Find where to add the elements in the HTML
const mainContainer = document.querySelector('#root');

// Render the link
customRender(reactElement, mainContainer);

// Add a space between the link and the button
mainContainer.appendChild(document.createTextNode(' '));

// Step 1: Define the button element blueprint
const buttonBlueprint = {
    type: 'button', // This is a button element
    properties: {
        onclick: () => alert('Button clicked!') // Function to run when clicked
    },
    content: 'Click me!' // Text inside the button
};

// Step 2: Find where to add the button in the HTML
const container = document.querySelector('#root');

// Step 3: Function to render the button element
function renderElement(elementBlueprint, container) {
    // Create the element
    const newElement = document.createElement(elementBlueprint.type);

    // Add the text inside the element
    newElement.innerHTML = elementBlueprint.content;

    // Add attributes and event handlers
    for (const prop in elementBlueprint.properties) {
        if (prop === 'content') continue; // Skip the content property
        newElement[prop] = elementBlueprint.properties[prop]; // Add properties like onClick
    }

    // Add the element to the webpage
    container.appendChild(newElement);
}

// Step 4: Render the button
renderElement(buttonBlueprint, container);

