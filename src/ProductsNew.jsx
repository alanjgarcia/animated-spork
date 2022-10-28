export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1> New Products </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input price="price" type="text" />
        </div>
        <div>
          Description: <input description="description" type="text" />
        </div>
        <button type="submit"> Create Product </button>
      </form>
    </div>
  );
}
