import React/*, { Component }*/ from 'react';

const App = () => {
	const profiles = [
		{name: "Taro", age: 10},
		{name: "Hanako", age: 5},
		{name: "NoName"},
	];
	return (
		<div>
			{
				profiles.map((profile, index) => {
					return <User name={profile.name} age={profile.age} key={index} />;
				})
			}
		</div>
	);
}

const User = (props) => {
	return <div>Hi, I am {props.name} and {props.age} years old.</div>;
}

User.defaultProps = {
	age: 1
}

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
