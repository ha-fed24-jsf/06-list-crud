import { useState } from 'react'
import './App.css'
import AddHat from './components/AddHat.jsx'
import HatList from './components/HatList.jsx'
import { hatList } from './data/hats.js'

function App() {
	const [hats, setHats] = useState(hatList)

	const changePrice = (newPrice, id) => {
		// Den vanliga metoden
		const newList = hats.map(hat => (
			hat.id === id ? { ...hat, price: Number(newPrice) } : hat
		))
		// console.log('App changePrice: ', newPrice, id, newList)
		setHats(newList)

		/* En enklare (?) metod
		setHats(hats.map(hat => {
			if( hat.id === id ) {
				return { ...hat, price: newPrice }
			} else {
				return hat
			}
		}))
		*/
	}

	return (
		<div className="hitta-hatt">
			<header>
				<h1> Hitta hatt </h1>
			</header>
			<main>
				<AddHat />

				<HatList
					hats={hats}
					changePrice={changePrice }
					/>
			</main>
		</div>
	)
}

export default App
