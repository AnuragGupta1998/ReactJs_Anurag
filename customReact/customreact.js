function customRender(reactElement, mainContainer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    //creating element according to the tag.............................
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

//defining Element object.........................................
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google by Anurag'
}

//how react create element...................................
// const reactElement = React.createElement(
//     'a', //tag name
//     {href: 'https://google.com',target: '_blank' }, //attributes
//     'click me to visit google',
//     anotherElement //variables
// )

//getting root element where render the reactElement...............................................
const mainContainer = document.querySelector('#root')

//render method..............................................................................
customRender(reactElement, mainContainer)