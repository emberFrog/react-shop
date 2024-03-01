import React, { Component } from 'react'

export class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'Показать всё',
				},
				{
					key: 'product',
					name: 'Название',
				},
				{
					key: 'price',
					name: 'Цена',
				},
				{
					key: 'brand',
					name: 'Бренд',
				},
			],
		}
	}
	render() {
		return (
			<div className='categories'>
				{this.state.categories.map(el => (
					<div key={el.key}>{el.name}</div>
				))}
			</div>
		)
	}
}

export default Categories
