
const HatCard = ({ hatInfo }) => (
	<section className="hat-card">
		<h3> {hatInfo.name} </h3>
		<img src={hatInfo.img} alt="Hatt"/>
		<p> {hatInfo.price} kr </p>
	</section>
)
export default HatCard
