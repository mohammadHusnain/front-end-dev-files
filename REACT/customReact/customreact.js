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

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue ;
        domElement.setAttribute(prop , reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a', // This is an anchor (<a>) tag
    props: {
        href: 'https://google.com', // Link to Google
        target: '_blank' // Open link in a new tab
    },
    children: 'click me to visit google' // Text inside the anchor tag
};

const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)
