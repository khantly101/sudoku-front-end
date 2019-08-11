import React 								from 'react'
import { BrowserRouter as Router, Route } 	from "react-router-dom"
import Sudoku 								from './components/sudoku.js'
import Index								from './components/index.js'

import './App.css'

class App extends React.Component {
	render () {
		return (
			<Router>
				<div>
					<Route path='/' exact component={Sudoku} />
					<Route path='/index' component={Index} />
				</div>
			</Router>
		)
 	}
}

export default App
