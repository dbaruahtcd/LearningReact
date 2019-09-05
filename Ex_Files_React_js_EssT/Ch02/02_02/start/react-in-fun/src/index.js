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
	constructor(props) {
		super(props)
		this.state = {
			open: open
		}
	}

	render() {
		console.log(this.state)
		const  { books } = this.props
		return (
			<div>
				<h1>The library is: {this.state.open ? 'open' : 'closed'} </h1>
				{books.map(
					(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages} />
				)}
			</div>
		)
	}
}



const Book = ({title, author, pages}) => {
	return(
		<section>
			<h2> {title} </h2>
			<p> by: {author} </p>
			<p> Pages: {pages} pages </p>
		</section>
	)
}

render(
	<Library books={BookList}/>,
	document.getElementById('root')
)