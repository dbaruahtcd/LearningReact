import React, { Component } from 'react'
import { render } from 'react-dom'


const BookList = [
	{title: "Lessons from History", author: "Durant", pages: '99'},
	{title: "Sapiens", author: "Harrari", pages: '399'},
	{title: "Man's search for meaning", author: "Victor Frank", pages: '189'},
	{title: "Super Intelligence", author: "Nick Bostrom", pages: "320"}
]

// const Library = ({books}) => {
class Library extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		open: true
	// 	}
	// 	this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
	// }
	state = { 
		open: true,
		freeBookmark: true,
		hiring: true,
		data: [],
		loading: false
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
			.then(data => data.json())
			.then(data => this.setState({data , loading: false}))

	}

	componentDidUpdate() {
		console.log("The component has updated")
	}

	toggleOpenClosed = ()  => {
		this.setState(prevState => ({
			open: !this.state.open
		}))
	}

	render() {
		const  { books } = this.props
		return (
			<div>
				{ this.state.hiring ? <Hiring /> : <NotHiring /> }
				{ this.state.loading 
						? "The data is loading ...."
						: <div>
								{ this.state.data.map(product => {
									return (
										<div key={product.id}>
											<h3> Library Product of the Week!</h3>
											<h4>{product.name}</h4>
											<img alt={product.name} src={product.image} height={100}/>
										</div>
									)
								}
								)}
							</div>
				}
				<h1>The library is: {this.state.open ? 'open' : 'closed'} </h1>
				{books.map(
					(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages} 
							freeBookmark={this.state.freeBookmark} />
				)}
				<button onClick={this.toggleOpenClosed}>Toggle open close</button>
			</div>
		)
	}
}

const Hiring = () => 
	<div>
		<p>The library is hiring. Go to www.library.com/jobs for more.</p>
	</div>

const NotHiring = () => 
	<div>
		<p>The library is not hiring. Check back later for more info.</p>
	</div>


const Book = ({title, author, pages, freeBookmark}) => {
	return(
		<section>
			<h2> {title} </h2>
			<p> by: {author} </p>
			<p> Pages: {pages} pages </p>
			<p> The book is: {freeBookmark ? "bookmarked" : "not book marked"} </p>
		</section>
	)
}

class FavouriteColorPicker extends Component {

	state = {
		value: ''
	}

	newColor = e => {
		this.setState({ value: e.target.value })
	}

	submit = (e) => {
		console.log(`New Color: ${this.state.value}`)
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.submit}>
				<label>Favourite Color : 
					<input 
						type='color'
						onChange={this.newColor }/>
				</label>
				<button>Submit</button>
			</form>
		)
	}
}

render(
	<div>
		<Library books={BookList} />
		<FavouriteColorPicker />
	</div>,
	document.getElementById('root')
)