import HatCard from './HatCard.jsx'

const HatList = ({ hats, changePrice }) => {
	// console.log('HatList hats=', hats)
	return (
		<section className="hat-list">	
			{hats.map(hat => (
				<HatCard
					key={hat.id}
					hatInfo={hat}
					changePrice={changePrice}
					/>
			))}
		</section>
	)
}
export default HatList
