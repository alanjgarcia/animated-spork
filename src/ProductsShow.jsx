export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1> Product Information </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue="props.product.name" name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue="props.product.price" name="price" type="text" />
        </div>
        <div>
          Description: <input defaultValue="props.product.description" name="description" type="text" />
        </div>
        <div>
          Image: <input defaultValue="props.product.images" name="image" type="text" />
        </div>
        <button type="submit"> Update product </button>
      </form>
      <button onClick={handleClick}> Destroy Product </button>
    </div>
  );
}
