import React 			from 'react'
import { Redirect }		from 'react-router'
import Updatecontrols 	from './updatecontrols.js'


import '../App.css'

class Sudoku extends React.Component {
	state = {
		ready: false,
		redirect: false,
		selectedNum: '',
		selectedBox: '',
		selectedRow: '',
		selectedCol: '',
		selectedGroup: '',
	}

	board = [[	{row:'A', collumn: 'A', group: '1', num: '', set: false, answer: ''},{row:'A', collumn: 'B', group: '1', num: '', set: false, answer: ''},{row:'A', collumn: 'C', group: '1', num: '', set: false, answer: ''},
				{row:'B', collumn: 'A', group: '1', num: '', set: false, answer: ''},{row:'B', collumn: 'B', group: '1', num: '', set: false, answer: ''},{row:'B', collumn: 'C', group: '1', num: '', set: false, answer: ''},
				{row:'C', collumn: 'A', group: '1', num: '', set: false, answer: ''},{row:'C', collumn: 'B', group: '1', num: '', set: false, answer: ''},{row:'C', collumn: 'C', group: '1', num: '', set: false, answer: ''}],

			[	{row:'A', collumn: 'D', group: '2', num: '', set: false, answer: ''},{row:'A', collumn: 'E', group: '2', num: '', set: false, answer: ''},{row:'A', collumn: 'F', group: '2', num: '', set: false, answer: ''},
				{row:'B', collumn: 'D', group: '2', num: '', set: false, answer: ''},{row:'B', collumn: 'E', group: '2', num: '', set: false, answer: ''},{row:'B', collumn: 'F', group: '2', num: '', set: false, answer: ''},
				{row:'C', collumn: 'D', group: '2', num: '', set: false, answer: ''},{row:'C', collumn: 'E', group: '2', num: '', set: false, answer: ''},{row:'C', collumn: 'F', group: '2', num: '', set: false, answer: ''}],

			[	{row:'A', collumn: 'G', group: '3', num: '', set: false, answer: ''},{row:'A', collumn: 'H', group: '3', num: '', set: false, answer: ''},{row:'A', collumn: 'I', group: '3', num: '', set: false, answer: ''},
				{row:'B', collumn: 'G', group: '3', num: '', set: false, answer: ''},{row:'B', collumn: 'H', group: '3', num: '', set: false, answer: ''},{row:'B', collumn: 'I', group: '3', num: '', set: false, answer: ''},
				{row:'C', collumn: 'G', group: '3', num: '', set: false, answer: ''},{row:'C', collumn: 'H', group: '3', num: '', set: false, answer: ''},{row:'C', collumn: 'I', group: '3', num: '', set: false, answer: ''}],

			[	{row:'D', collumn: 'A', group: '4', num: '', set: false, answer: ''},{row:'D', collumn: 'B', group: '4', num: '', set: false, answer: ''},{row:'D', collumn: 'C', group: '4', num: '', set: false, answer: ''},
				{row:'E', collumn: 'A', group: '4', num: '', set: false, answer: ''},{row:'E', collumn: 'B', group: '4', num: '', set: false, answer: ''},{row:'E', collumn: 'C', group: '4', num: '', set: false, answer: ''},
				{row:'F', collumn: 'A', group: '4', num: '', set: false, answer: ''},{row:'F', collumn: 'B', group: '4', num: '', set: false, answer: ''},{row:'F', collumn: 'C', group: '4', num: '', set: false, answer: ''}],

			[	{row:'D', collumn: 'D', group: '5', num: '', set: false, answer: ''},{row:'D', collumn: 'E', group: '5', num: '', set: false, answer: ''},{row:'D', collumn: 'F', group: '5', num: '', set: false, answer: ''},
				{row:'E', collumn: 'D', group: '5', num: '', set: false, answer: ''},{row:'E', collumn: 'E', group: '5', num: '', set: false, answer: ''},{row:'E', collumn: 'F', group: '5', num: '', set: false, answer: ''},
				{row:'F', collumn: 'D', group: '5', num: '', set: false, answer: ''},{row:'F', collumn: 'E', group: '5', num: '', set: false, answer: ''},{row:'F', collumn: 'F', group: '5', num: '', set: false, answer: ''}],

			[	{row:'D', collumn: 'G', group: '6', num: '', set: false, answer: ''},{row:'D', collumn: 'H', group: '6', num: '', set: false, answer: ''},{row:'D', collumn: 'I', group: '6', num: '', set: false, answer: ''},
				{row:'E', collumn: 'G', group: '6', num: '', set: false, answer: ''},{row:'E', collumn: 'H', group: '6', num: '', set: false, answer: ''},{row:'E', collumn: 'I', group: '6', num: '', set: false, answer: ''},
				{row:'F', collumn: 'G', group: '6', num: '', set: false, answer: ''},{row:'F', collumn: 'H', group: '6', num: '', set: false, answer: ''},{row:'F', collumn: 'I', group: '6', num: '', set: false, answer: ''}],

			[	{row:'G', collumn: 'A', group: '7', num: '', set: false, answer: ''},{row:'G', collumn: 'B', group: '7', num: '', set: false, answer: ''},{row:'G', collumn: 'C', group: '7', num: '', set: false, answer: ''},
				{row:'H', collumn: 'A', group: '7', num: '', set: false, answer: ''},{row:'H', collumn: 'B', group: '7', num: '', set: false, answer: ''},{row:'H', collumn: 'C', group: '7', num: '', set: false, answer: ''},
				{row:'I', collumn: 'A', group: '7', num: '', set: false, answer: ''},{row:'I', collumn: 'B', group: '7', num: '', set: false, answer: ''},{row:'I', collumn: 'C', group: '7', num: '', set: false, answer: ''}],

			[	{row:'G', collumn: 'D', group: '8', num: '', set: false, answer: ''},{row:'G', collumn: 'E', group: '8', num: '', set: false, answer: ''},{row:'G', collumn: 'F', group: '8', num: '', set: false, answer: ''},
				{row:'H', collumn: 'D', group: '8', num: '', set: false, answer: ''},{row:'H', collumn: 'E', group: '8', num: '', set: false, answer: ''},{row:'H', collumn: 'F', group: '8', num: '', set: false, answer: ''},
				{row:'I', collumn: 'D', group: '8', num: '', set: false, answer: ''},{row:'I', collumn: 'E', group: '8', num: '', set: false, answer: ''},{row:'I', collumn: 'F', group: '8', num: '', set: false, answer: ''}],

			[	{row:'G', collumn: 'G', group: '9', num: '', set: false, answer: ''},{row:'G', collumn: 'H', group: '9', num: '', set: false, answer: ''},{row:'G', collumn: 'I', group: '9', num: '', set: false, answer: ''},
				{row:'H', collumn: 'G', group: '9', num: '', set: false, answer: ''},{row:'H', collumn: 'H', group: '9', num: '', set: false, answer: ''},{row:'H', collumn: 'I', group: '9', num: '', set: false, answer: ''},
				{row:'I', collumn: 'G', group: '9', num: '', set: false, answer: ''},{row:'I', collumn: 'H', group: '9', num: '', set: false, answer: ''},{row:'I', collumn: 'I', group: '9', num: '', set: false, answer: ''}],
			]

	getGame = () => {
		let copyBoard = JSON.parse(JSON.stringify(this.board))
		let game = this.props.location.state.game
		copyBoard.forEach((ele, index) => {
			ele.forEach((e, i) => {
				e.num = game[index][i][0]
				if (game[index][i][1] === 't') {
					e.set = true
				} else {
					e.set = false
				}
				this.setState({
					ready: true,
					[e.row + e.collumn]: {	num: e.num, 
											set: e.set, 
										}		
				})
			})
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		let newGame = []

		this.board.forEach((ele) => {
			let newGroup = []
			ele.forEach((e) => {
				newGroup.push([this.state[e.row + e.collumn].num, this.state[e.row + e.collumn].set])
			})
			newGame.push(newGroup)
		})

		let url = ''
		if (this.props.location.state.difficulty === 'easy') {
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokus/'
		} else if (this.props.location.state.difficulty === 'medium') {
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokums/'
		} else if (this.props.location.state.difficulty === 'hard') {
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokuhs/'
		} else if (this.props.location.state.difficulty === 'expert') {
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokues/'
		}


		fetch(url + this.props.location.state.id, {
			method: 'PUT',
			body: JSON.stringify({game: newGame}),
			headers: {
				'Accept': 'application/json',
      			'Content-Type': 'application/json'
			}
		})
		.then (res => res.json())
		.then (resJson => {
			this.setState({
				redirect: true
			})
		}).catch (error => console.error({'Error': error}))

	}

	selectBox = (event) => {
		this.setState({
			selectedNum: event.currentTarget.getAttribute('num'),
			selectedBox: event.currentTarget.getAttribute('box'),
			selectedRow: event.currentTarget.getAttribute('row'),
			selectedCol: event.currentTarget.getAttribute('collumn'),
			selectedGroup: event.currentTarget.getAttribute('group')
		})
	}
	
	classList = (...classes) => {
		return classes.filter(item => !!item).join(' ')
	}

	handleChange = (event) => {
		let copystate = JSON.parse(JSON.stringify(this.state[event.currentTarget.getAttribute('box')]))
		copystate.num = event.key
		if (isFinite(event.key) && event.key > 0) {
			this.setState({
				[event.currentTarget.getAttribute('box')]: copystate
			})
		}
	}

	buttonChange = (value) => {
		let copystate = JSON.parse(JSON.stringify(this.state[this.state.selectedBox]))
		copystate.num = value
		this.setState({
			[this.state.selectedBox]: copystate
		})
	}

	buttonClear = () => {
		let copystate = JSON.parse(JSON.stringify(this.state[this.state.selectedBox]))
		copystate.num = ''
		
		this.setState({
			[this.state.selectedBox]: copystate
		})
	}

	buttonSet = () => {
		let copystate = JSON.parse(JSON.stringify(this.state[this.state.selectedBox]))
		copystate.set = !copystate.set

		this.setState({
			[this.state.selectedBox]: copystate
		})
	}

	componentDidMount() {
		this.getGame()
	}

	render () {
		return (
			<div className='container'>
				<div className='board'>
					{
						this.board.map((ele, index) => {
							return (
								<div className='inner' group={index} key={index}>
								{
									this.state.ready ?
									ele.map((e) => {
										return (
											<div 
												className={this.classList(
														'box', 
														this.state[e.row + e.collumn].set && 'set',
														this.state.selectedNum === e.num && this.state.selectedNum > 0 && 'selectedOth',
														this.state.selectedNum === this.state[e.row + e.collumn].num && this.state[e.row + e.collumn].num > 0 && 'selectedOth',
														this.state.selectedRow === e.row && 'selectedNum',
														this.state.selectedGroup === e.group && 'selectedNum',
														this.state.selectedCol === e.collumn && 'selectedNum', 
														this.state.selectedBox === (e.row + e.collumn) && 'selected',
													)}
												set={e.set.toString()}
												num={this.state[e.row + e.collumn].num}
												box={e.row + e.collumn} 
												row={e.row}
												collumn={e.collumn}
												group={e.group} 
												key={e.collumn + e.row}
												onClick={this.selectBox}
												onKeyDown={this.handleChange}
												tabIndex='0'
											>	
												{this.state[e.row + e.collumn].num}
											</div>
										)
									}) : null
								}
								</div>
							)					
						})
					}
				</div>
				<div className='controlBox'>
					<Updatecontrols 
							buttonChange={this.buttonChange} 
							buttonClear={this.buttonClear} 
							handleSubmit={this.handleSubmit}
							buttonSet={this.buttonSet}
					/>
				</div>
				{
					this.state.redirect ?  <Redirect to='/index'/> : null
				}
				{
					this.props.state.admin ? null : <Redirect to='/'/>
				}
			</div>
		)
	}
}

export default Sudoku