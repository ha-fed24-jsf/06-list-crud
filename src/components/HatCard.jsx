import { useState } from 'react'

const HatCard = ({ hatInfo, changePrice }) => {
	const [isEditing, setIsEditing] = useState(false)
	const handleEdit = () => {

		setIsEditing(!isEditing)
	}

	return (
		<section className="hat-card">
			<h3> {hatInfo.name} </h3>
			<img src={hatInfo.img} alt="Hatt"/>
			{isEditing ? (
				<input type="number"
					onChange={event => changePrice(event.target.value, hatInfo.id)}
					value={hatInfo.price}
					onBlur={() => setIsEditing(false)}
					/>
			) : (
				<p onClick={handleEdit}>
					{hatInfo.price} kr 
				</p>
			)}
			<button> Ta bort </button>
		</section>
	)
}
export default HatCard
