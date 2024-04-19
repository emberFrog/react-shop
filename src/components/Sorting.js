import React, { Component } from 'react'

export class Sorting extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sortOptions: [
				{ key: 'all', name: 'Сбросить фильтры' },
				{ key: 'priceAsc', name: 'По возрастанию цены' },
				{ key: 'priceDesc', name: 'По понижению цены' },
				{ key: 'nameAsc', name: 'По алфавиту названия' },
				{ key: 'nameDesc', name: 'По алфавиту названия (обратное)' },
				{ key: 'brandAsc', name: 'По алфавиту бренда' },
				{ key: 'brandDesc', name: 'По алфавиту бренда (обратное)' },
			],
		}
	}
	render() {
		return (
			<div className='sorting'>
				{this.state.sortOptions.map((option, index) => (
					<div
						key={index}
						onClick={() => {
							this.props.sortItems(option.key)
							this.props.changePage(1)
						}}
					>
						{option.name}
					</div>
				))}
			</div>
		)
	}
}

export default Sorting
