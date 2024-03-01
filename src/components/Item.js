import React, { Component } from 'react'

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<p className='id'>ID: {this.props.item.id}</p>
				<h2>{this.props.item.product}</h2>
				<p>Бренд: {this.props.item.brand || 'Не указан'}</p>
				<b>Цена: {this.props.item.price}₽</b>
			</div>
		)
	}
}

export default Item
