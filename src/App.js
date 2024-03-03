import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import ApiRequester from './components/ApiRequester'
import Sorting from './components/Sorting'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentItems: [],
			items: [],
		}
		this.sortItems = this.sortItems.bind(this)
	}

	handleItemsLoaded = items => {
		this.setState({ items })
		this.setState({ currentItems: items })
	}

	sortItems(sortType) {
		let sortedItems
		switch (sortType) {
			case 'priceAsc':
				sortedItems = [...this.state.items].sort((a, b) => a.price - b.price)
				break
			case 'priceDesc':
				sortedItems = [...this.state.items].sort((a, b) => b.price - a.price)
				break
			case 'nameAsc':
				sortedItems = [...this.state.items].sort((a, b) => {
					const nameA = a.name || ''
					const nameB = b.name || ''
					return nameA.localeCompare(nameB)
				})
				break
			case 'nameDesc':
				sortedItems = [...this.state.items].sort((a, b) => {
					const nameA = a.name || ''
					const nameB = b.name || ''
					return nameB.localeCompare(nameA)
				})
				break
			case 'brandAsc':
				sortedItems = [...this.state.items].sort((a, b) => {
					const brandA = a.brand || ''
					const brandB = b.brand || ''
					return brandA.localeCompare(brandB)
				})
				break
			case 'brandDesc':
				sortedItems = [...this.state.items].sort((a, b) => {
					const brandA = a.brand || ''
					const brandB = b.brand || ''
					return brandB.localeCompare(brandA)
				})
				break
			default:
				sortedItems = this.state.items
		}
		this.setState({ currentItems: sortedItems })
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				<ApiRequester onItemsLoaded={this.handleItemsLoaded} />
				<Sorting sortItems={this.sortItems} />
				<Items items={this.state.currentItems} />
				<Footer />
			</div>
		)
	}
}

export default App
