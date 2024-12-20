function customRender(reactElement, container){
    /*
    const domElement=document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)

    //BUT THE PROBLEM IS WE HAVE TO CREATE MULTIPLE setAttribute EVERYTIME 
    //NOW GOING FOR LOOP BASED CODE 
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop=='children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement={
    "type": "a",
    "props": {
        "href": "https://www.google.com",
    },
        "children": 'Click me visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)