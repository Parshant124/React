function customElement(reactElement, container) {
    const Elem = document.createElement(reactElement.type);
    
    // Elem.innerHTML = reactElement.children;
    // Elem.setAttribute('href', reactElement.props.href);
    // Elem.setAttribute('target', reactElement.props.target);

    // 2nd approach
    Elem.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        Elem.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(Elem);
}



const root = document.getElementById('root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: ['Go to Google'],
}

customElement(reactElement, root)

// Summary

