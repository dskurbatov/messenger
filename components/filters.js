import React from 'react'
import { connect } from 'react-redux'
import setFilter from '../actions/set_filter'

const Link = ({active, children, onClick}) => {
	if(active){
		return <span>{children}</span>
	}
	return( 
		<a 
			href="#"
			onClick={(e) => {
				e.preventDefault()
				onClick()
			}}
		>
		{children}
		</a>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

const Footer = () => {
	return (
		<p>
			Show:{' '}
			<FilterLink filter="SHOW_ALL">ALL</FilterLink>
			{' '}
			<FilterLink filter="SHOW_COMPLETED">COMPELTED</FilterLink>
			{' '}
			<FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>
		</p>
	)
}

export default Footer
