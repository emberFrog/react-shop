import React from 'react'

export default function Header() {
	return (
		<header>
			<div>
				<span className='logo'>Valantis Jewelry</span>
				<ul className='nav'>
					<li>Каталог</li>
					<li>Ремонт</li>
					<li>О нас</li>
					<li>Контакты</li>
				</ul>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
