import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'


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

	static defaultProps = {
		books: [
			{"title": "Default title", "author": "Fake author", "pages": "234" }
		]
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


Library.propTypes = {
	books: PropTypes.array
}

Book.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	pages: PropTypes.number,
	freeBookmark: PropTypes.bool
}

export default Library;