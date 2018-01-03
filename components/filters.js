import React from 'react'
import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'
// import setFilter from '../actions/set_filter'

// const Link = ({active, children, onClick}) => {
// 	if(active){
// 		return <span>{children}</span>
// 	}
// 	return( 
// 		<a 
// 			href="#"
// 			onClick={(e) => {
// 				e.preventDefault()
// 				onClick()
// 			}}
// 		>
// 		{children}
// 		</a>
// 	)
// }

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		active: state.visibilityFilter === ownProps.filter
// 	}
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onClick: () => {
// 			dispatch(setFilter(ownProps.filter))
// 		}
// 	}
// }

// const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
const FilterLink = ({ filter, children }) => {
	return (
		<NavLink
			to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
			activeStyle={{
				textDecoration: 'none',
				color: 'black'
			}}
		>
			{children}
		</NavLink>
	)
}

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
