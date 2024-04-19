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
			currentPage: 1,
			itemsPerPage: 50,
		}
		this.sortItems = this.sortItems.bind(this)
		this.changePage = this.changePage.bind(this)
	}

	handleItemsLoaded = items => {
		this.setState({ items, currentItems: items, currentPage: 1 }, () => {
			this.calculateTotalPages()
		})
	}

	calculateTotalPages() {
		const { items, itemsPerPage } = this.state
		const totalPages = Math.ceil(items.length / itemsPerPage)
		this.setState({ totalPages })
	}

	changePage = page => {
		const { items, itemsPerPage } = this.state
		const currentItems = items.slice(
			(page - 1) * itemsPerPage,
			page * itemsPerPage
		)
		this.setState({ currentItems, currentPage: page })
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
		this.setState({ currentItems: sortedItems, currentPage: 1 }, () => {
			this.calculateTotalPages()
		})
	}

	render() {
		const { currentPage, totalPages } = this.state
		return (
			<div className='wrapper'>
				<Header />
				<ApiRequester onItemsLoaded={this.handleItemsLoaded} />
				<Sorting sortItems={this.sortItems} changePage={this.changePage} />
				<Items items={this.state.currentItems} />
				<div className='pagination'>
					{Array.from({ length: totalPages }, (_, index) => (
						<button key={index} onClick={() => this.changePage(index + 1)}>
							{index + 1}
						</button>
					))}
				</div>
				<Footer />
			</div>
		)
	}
}

export default App
