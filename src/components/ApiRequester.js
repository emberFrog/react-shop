import React, { useEffect, useState } from 'react'
import md5 from 'md5'

const ApiRequester = ({ onItemsLoaded }) => {
	useEffect(() => {
		const password = 'Valantis'
		const date = new Date()
		const timestamp = `${date.getUTCFullYear()}${(date.getUTCMonth() + 1)
			.toString()
			.padStart(2, '0')}${date.getUTCDate().toString().padStart(2, '0')}`
		const authString = md5(`${password}_${timestamp}`)

		const fetchItems = async () => {
			try {
				// Получение списка идентификаторов товаров
				const responseIds = await fetch('https://api.valantis.store:41000/', {
					method: 'POST',
					headers: {
						'X-Auth': authString,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						action: 'get_ids',
						params: {},
					}),
				})

				if (!responseIds.ok) {
					throw new Error(
						`Ошибка при получении идентификаторов: ${responseIds.status}`
					)
				}

				const dataIds = await responseIds.json()
				const ids = dataIds.result

				// Получение детальной информации о товарах
				const responseItems = await fetch('https://api.valantis.store:41000/', {
					method: 'POST',
					headers: {
						'X-Auth': authString,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						action: 'get_items',
						params: { ids: ids },
					}),
				})

				if (!responseItems.ok) {
					throw new Error(
						`Ошибка при получении детальной информации: ${responseItems.status}`
					)
				}

				const dataItems = await responseItems.json()
				onItemsLoaded(dataItems.result)

				// Обработка дубликатов по id
				const uniqueItems = dataItems.result.reduce(
					(acc, current) => {
						if (!acc.ids.has(current.id)) {
							acc.ids.add(current.id)
							acc.items.push(current)
						}
						return acc
					},
					{ ids: new Set(), items: [] }
				).items
				onItemsLoaded(uniqueItems)
			} catch (error) {
				console.error('Ошибка при запросе данных:', error)
			}
		}

		fetchItems()
	}, [onItemsLoaded])

	return null // Этот компонент не отображает ничего сам по себе
}
export default ApiRequester
