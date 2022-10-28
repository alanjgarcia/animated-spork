export function ProductsIndex(props) {
  return (
    <div id="allproducts">
      <h1> All Products </h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2> {product.name} </h2>
          <img src={product.images[0].url} />
          <p> Name: {product.name}</p>
          <p> Price: {product.price}</p>
          <p> Description: {product.description}</p>
          <button onClick={() => props.onSelectProduct(product)}> More info </button>
        </div>
      ))}
    </div>
  );
}
