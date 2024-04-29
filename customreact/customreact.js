function customRender(reactEl, container) {
    /*
    version 1 not so good
    const domElement = document.createElement(reactEl.type)
    domElement.innerHTML = reactEl.children
    domElement.setAttribute('href', reactEl.props.href)
    domElement.setAttribute('target', reactEl.props.target)
    container.appendChild(domElement) 
    */

    const domElement = document.createElement(reactEl.type)
    domElement.innerHTML = reactEl.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)