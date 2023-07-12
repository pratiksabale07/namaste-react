let heading = React.createElement('h1', { id: 'heading', className: 'headings' }, 'Hello World with React')
console.log(heading)
let container = ReactDOM.createRoot(document.getElementById('container'))
// container.render(heading)


// Nested react element structure
let nestedElm = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, React.createElement('h1', {}, 'I am h1 child created from nested react')))
// here create element creates and object and stores into the variable
console.log(nestedElm);
container.render(nestedElm)
//the render method coverts the object into the html collection which browser understands


// Nested react element structure with multiple children
let nestedElmwithMultipleChildren = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', { id: 'h1' }, 'I am h1 child created from nested react'), React.createElement('h2', { id: 'h2' }, 'I am h2 child created from nested react and sibling to h1')]))
console.log(nestedElmwithMultipleChildren);
container.render(nestedElmwithMultipleChildren)


// Nested react element structure with multiple children
let nestedMultipleElmWithMultipleChildren = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child' }, [React.createElement('h1', { id: 'h1' }, 'I am h1 child created from nested react'), React.createElement('h2', { id: 'h2' }, 'I am h2 child created from nested react and sibling to h1')])], [React.createElement('div', { id: 'child' }, [React.createElement('h1', { id: 'h1' }, 'I am h1 child created from nested react'), React.createElement('h2', { id: 'h2' }, 'I am h2 child created from nested react and sibling to h1')])])
container.render(nestedMultipleElmWithMultipleChildren)