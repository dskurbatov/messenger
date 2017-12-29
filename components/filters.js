import React from 'react'
import store from '../js/store'

// const FilterLink = ({filter, currentFilter, children, onClick}) => {
// 	if(filter === currentFilter){
// 		return <span>{children}</span>
// 	}
// 	return(
// 		<a href="#"
// 			onClick={(e) => {
// 				e.preventDefault()
// 				onClick(filter)
// 			}}
// 		>
// 	{children}
// 	</a>
// 	)
// }
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

class FilterLink extends React.Component {
	componentDidMount(){
		this.unsubscribe = store.subscribe(() => {
			this.forceUpdate()
		})
	}

	componentWillUnmount(){
		this.unsubscribe()
	}

	render(){
		const props = this.props
		const state = store.getState()

		return(
			<Link 
				active={
					props.filter === state.visibilityFilter
				}

				onClick={() => {
					store.dispatch({
						type: 'SET_VISIBILITY_FILTER',
						filter: props.filter
					})
				}}
			>
			{props.children}
			</Link>
		)
	}
}

export const Footer = () => {
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
