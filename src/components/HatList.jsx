import HatCard from './HatCard.jsx'

const HatList = ({ hats }) => {
	console.log('HatList hats=', hats)
	return (
		<section className="hat-list">	
			{hats.map(hat => (
				<HatCard
					key={hat.id}
					hatInfo={hat}
					/>
			))}
		</section>
	)
}
export default HatList
