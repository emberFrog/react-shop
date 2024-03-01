import React, { useState } from 'react'
import { FaBookmark } from 'react-icons/fa'

export default function Header() {
	let [markOpen, setMarkOpen] = useState(false)

	return (
		<header>
			<div>
				<span className='logo'>Valantis Jewelry</span>
				<ul className='nav'>
					<li>12</li>
					<li>13</li>
					<li>14</li>
					<li>15</li>
				</ul>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
