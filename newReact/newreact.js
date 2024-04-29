function customRender(reactElement, container) {

    /*
    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.Children
    newElement.setAttribute('href', reactElement.props.href)
    newElement.setAttribute('target', reactElement.props.target)

    container.appendChild(newElement)
    */

    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
       if (prop == 'children') continue
       newElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(newElement)
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    Children: 'Click on me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)