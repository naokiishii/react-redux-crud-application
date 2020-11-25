import React/*, { Component }*/ from 'react';

//class App extends Component {
//  render() {
//  	const greeting = "Hi!";
//  	const dom = <h1 className="foo">{greeting}</h1>;
//  	const input = <input type="text" onClick={() => console.log("clicked")}/>;
//  	const change = <input type="text" onChange={() => console.log("changed")}/>;
//    return (
//    	<React.Fragment>
//    		<label htmlFor="bar">bar</label>
//    		{change}
//    	</React.Fragment>
//    );
//  }
//}

const App = () => {
	return (
		<div>
			<Cat />
			<Cat />
			<Cat />
			<Cat />
		</div>
	);
}

const Cat = () => {
	return <div>Meow</div>;
}

//class App extends Component {
//  render() {
//    return React.createElement(
//    	"div",
//    	null,
//    	"Hello World"
//    );
//  }
//}

export default App;
