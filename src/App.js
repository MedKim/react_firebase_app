import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import Signin from './components/auth/Signin'
import SignUp from './components/auth/Signup'
import CreateProject from './components/projects/CreateProject'

class App extends React.Component {
	render(){
		return(
	  <BrowserRouter>
	  	<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/project/:id" component={ProjectDetails} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={SignUp} />
				<Route path="/create" component={CreateProject} />
			</Switch>
	  	</div>
	  </BrowserRouter>
  );
	}
}

export default App;
