import React from 'react'

const FilterLink = ({filter, currentFilter, children, onClick}) => {
	if(filter === currentFilter){
		return <span>{children}</span>
	}
	return(
		<a href="#"
			onClick={(e) => {
				e.preventDefault()
				onClick(filter)
			}}
		>
	{children}
	</a>
	)
}

export const Footer = ({visibilityFilter, onFilterClick}) => {
	return (
		<p>
			Show:{' '}
			<FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}>ALL</FilterLink>
			{' '}
			<FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}>COMPELTED</FilterLink>
			{' '}
			<FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}>ACTIVE</FilterLink>
		</p>
	)
}
