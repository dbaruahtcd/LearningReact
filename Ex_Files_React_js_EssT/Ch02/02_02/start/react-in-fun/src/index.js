import React, { Component } from 'react'
import { render } from 'react-dom'
import Library  from './Library'
import FavouriteColorPicker  from './FavouriteColorPicker'




const BookList = [
	{title: "Lessons from History", author: "Durant", pages: 99},
	{title: "Sapiens", author: "Harrari", pages: 399},
	{title: "Man's search for meaning", author: "Victor Frank", pages: 189},
	{title: "Super Intelligence", author: "Nick Bostrom", pages: 320}
]


render(
	<div>
		<Library books={BookList} />
		// <FavouriteColorPicker />
	</div>,
	document.getElementById('root')
)