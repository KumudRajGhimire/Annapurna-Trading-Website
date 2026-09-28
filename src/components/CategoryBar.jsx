const productCategories = [
  'Maplitho Paper',
  'Copier Paper',
  'Duplex Board',
  'FBB Board',
  'Colour & Nepali Paper',
]

function CategoryBar() {
  return (
    <section className="category-bar" aria-label="Product categories">
      {productCategories.map((category) => (
        <a href="#products" key={category}>
          {category}
        </a>
      ))}
    </section>
  )
}

export default CategoryBar
