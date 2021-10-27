 # The React Way Of Thinking
 React handles the direct manipulation of the DOM. We simply provide a blueprint to tell it how the page "should" look like.

 The "state" of the app determines the pertinent information, and when those states are changed, the app "re-renders" efficiently

 State changes trickle down the "chart" of the app - in other words, data can only flow in one direction.

 That is possible because the "state" exists in different sections, and when bugs happen we know where it happens because of the state   change and where it resides. 

 # React Basics
 use the npx create-react-app app-name to create your app, and off we go.

 All React does is allow us to stylize the app easily. We create a sort of pseudo HTML inside of components, and when it builds, it squashes everything into regular JS and HTML for the browser to understand. The browser doesn't know what React components and syntax is, so that's why we "build" it.

 In essence, React gets the 'root' element of our index.html file, and then injects itself into it to render.

 That means that we can inject React into any portion of an HTML page


## Classes, States
 We can have components be functional or a class. having it as a class gives us the power to have state, and render methods.
 
 When we changed 'app' class to be a class, now we can inject state into it. State is nothing more than a JS object, but it's key to telling the app and component what data it should have and monitor to change.

 The most important part is that we use the this.setState function instead of directly manipulating it - that way we get the Render method to call.

 The first exercise shows off the state change and render. The 'app' now has a render function in it. It displays the state's 'name' property. We create a button that, on press, calls setState to change the 'name' property. And when it does, the page automatically re-renders, displaying the new name.

 The second object has us fetching some JSON from an API endpoint. Now we can use that to set our state easily, without hardcoding. This requires the use of the function componentDidMount, which does whatever is inside of it when the component has been put in existence. In our case, it grabs the data asynchronously and passes it into our state.

    async componentDidMount() {
        let response  = await fetch('https://jsonplaceholder.typicode.com/users')
        let monstersJSON = await response.json()
        this.setState({monsters: monstersJSON})
    }

 We can make use of the 'map' function to display every name. It returns a mapped sequence of our array, and React knows to implicitly take that return value and display it right away. 
 
 One thing to note is that when we make a list of things, there has to be an unique ID associated with each item, or else it will be very inefficient when you only need to re-render one thing. So for every value we need to give it the unique ID, known as 'key', like below.

    {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}

 This renderrs every name as a h1 in the div, and each entry has a unique key assocaited with it. 

 ## Component-ing
 It's a good idea to keep components separate and in their own folders.

 Now we want to display these new names into a grid to more resemble our final app. We create a new component responsible for assembling this called card-list. Components have access to 'props' argument, which is anything we pass into it from the call in the main app

    <CardList name="name"> </CardList>

 as such. Now props is that argument in the component, and we can use it.

 Another method on props is the 'children' property. This is essentially everything "inside" of that tag we put in the code. So for example,

    <CardList>
        <h1> One </h1>
        <h2> Two </h1>
    </CardList>

 the One and Two would be children.

 So, when we call {props.children} in the component, we have access to all that HTML inside. Using this, we can pass in the list we made before as children to the component, and then it will be responsible for rendering it.

    <CardList>
        {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
    </CardList>
 
With the accompanying card-list.style.css we created, it renders all those h1 monster names into the grid.

### Responsibility
We can go a step further and change the responsibilites of the components.

Right now, the App class is responsible for doing everything - fetching the monsters, mapping over them, passing it to the CardList component. We can change it so that it is only the CardList's responsibility to do those things.

We change it so that the CardList receives a prop instead and then it is responsible for mapping over what it receives. 

    <CardList monsters={this.state.monsters}>

We cut-and-paste the mapping code into the CardList component, changing this.state to props, and now it is responsible for that.

    {props.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}