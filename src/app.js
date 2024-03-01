import React, { useState } from 'react'
import md5 from 'md5'

const App = () => {
	const [password, setPassword] = useState('Valantis')
	const [apiUrl, setApiUrl] = useState('http://api.valantis.store:40000/')

	const generateAuthHeader = () => {
		const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '')
		const authString = `${password}_${currentDate}`
		return md5(authString)
	}

	const callApi = async () => {
		const authHeader = generateAuthHeader()
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				'X-Auth': authHeader,
			},
		})

		if (response.ok) {
			console.log('Успешный доступ к API')
			// Обработка ответа API
		} else {
			console.log('Ошибка доступа:', response.status)
		}
	}

	return (
		<div>
			<button onClick={callApi}>Получить данные от API</button>
		</div>
	)
}

export default App
