

const AddHat = () => {

	return (
		<section className="add-hat">
		<h2> Lägg till ny hatt </h2>
		<div>
			<label htmlFor=""> Namn </label>
			<input type="text" />
		</div>
		<div>
			<label htmlFor=""> Pris </label>
			<input type="text" />
		</div>
		<div>
			<label htmlFor=""> Bildlänk </label>
			<input type="text" />
		</div>
		</section>
	)
}

export default AddHat
