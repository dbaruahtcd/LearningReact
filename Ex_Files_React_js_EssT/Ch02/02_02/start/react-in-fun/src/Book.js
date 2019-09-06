import React, { Component } from 'react'

export const Book = ({title="No title provided", author="No author", pages=0, freeBookmark}) => {
	return(
		<section>
			<h2> {title} </h2>
			<p> by: {author} </p>
			<p> Pages: {pages} pages </p>
			<p> The book is: {freeBookmark ? "bookmarked" : "not book marked"} </p>
		</section>
	)
}