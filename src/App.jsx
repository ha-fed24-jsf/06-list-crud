import { useState } from 'react'
import './App.css'
import AddHat from './components/AddHat.jsx'
import HatList from './components/HatList.jsx'
import { hatList } from './data/hats.js'

function App() {

	return (
		<div className="hitta-hatt">
			<header>
				<h1> Hitta hatt </h1>
			</header>
			<main>
				<AddHat />

				<HatList hats={hatList}  />
			</main>
		</div>
	)
}

export default App
