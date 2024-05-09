export default function CreateFunFact() {
	return (
		<section id="create">
			<div className="form">
				<h2>Add Fact</h2>
				<form className="create-form">
					<input
						type="text"
						name="category"
						id="category"
						placeholder="Category"
					/>
					<input
						type="text"
						name="image-url"
						id="image-url"
						placeholder="Image URL"
					/>
					<textarea
						id="description"
						name="description"
						placeholder="Description"
						rows="10"
						cols="50"
					></textarea>
					<textarea
						id="additional-info"
						name="additional-info"
						placeholder="Additional Info"
						rows="10"
						cols="50"
					></textarea>
					<button type="submit">Add Fact</button>
				</form>
			</div>
		</section>
	)
}