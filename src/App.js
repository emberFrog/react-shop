import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import ApiRequester from './components/ApiRequester'
import Categories from './components/Categories'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [],
		}
	}

	handleItemsLoaded = items => {
		this.setState({ items })
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				<ApiRequester onItemsLoaded={this.handleItemsLoaded} />
				<Categories />
				<Items items={this.state.items} />
				<Footer />
			</div>
		)
	}
}

export default App
