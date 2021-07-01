// import './App.css';
import './default.css'

import React from 'react';
import {useState} from 'react';


import TabList from './Components/TabList'
import {BodyTitle, Body} from './Body'

class ScrollButton extends React.Component {
	state = {
		visible: false,
	  }
	
	  scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	  }

	toggleVisibility = () => {
		var height = document.documentElement.offsetHeight;
		if (window.pageYOffset/height > 0.25) {
		  this.setState({
			visible: true,
		  })
		} else {
		  this.setState({
			visible: false,
		  })
		}
	  }

	componentDidMount() {
		document.addEventListener("scroll", this.toggleVisibility)
	}
	
	componentWillUnmount() {
		document.removeEventListener("scroll", this.toggleVisibility)
	}
	
	render () {
		if(this.state.visible === true)
		{

			return (<button onclick="topFunction()" id="to_top_btn"
			onClick={ () => { this.scrollToTop(); }}
			style={{display: 'block'}}>
		   Top</button>);
		} else {
			return <button onclick="topFunction()" id="to_top_btn"
			onClick={ () => { this.scrollToTop(); }}>
		   Top</button>;
		}
		
	 }
} 

function App() {
	const [active, set_active] = useState(0)
	const tabs = [
		{id: 0, title: 'Home'}, {id: 1, title: 'Text'}, {id: 2, title: 'Image'},
		{id: 3, title: 'Video'}, {id: 4, title: 'Table'}, {id: 5, title: 'Email'}
	]

	const change_tab =(id) => {
		set_active(id)
	}
  
	return (
		<div className='App'>
			{/* <button onClick={BackToTop(this)} id="to_top_btn">Top</button> */}
			<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>

			<BodyTitle active_tab={active}/>

			<div className='tab-bar'>
				<TabList tabs={tabs} active_tab = {active} ctab={change_tab}/>
			</div>

			<Body active_tab={active}/>
		</div>
  );
}

export default App;
