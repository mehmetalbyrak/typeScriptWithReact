import './ProductDetail.css';

function ProductDetail(props: any) {
  return (
    <div className="container-md">
      <h1>{props.product.title}</h1>
      <div className="product-details">
        <p><b>Ürün Adı:</b> {props.product.title}</p>
        <div className="product-image">
          <img src={props.product.thumbnail} alt={props.product.title} />
        </div>
        <div className="product-description">
          <p><b>Brand:</b> {props.product.brand}</p>
          <p><b>Category:</b> {props.product.category}</p>
          <p><b>Original Price:</b> {props.product.price}$</p>
          <p><b>Discount Percentage:</b> {props.product.discountPercentage}%</p>
          <p><b>Discount Amount:</b> {props.product.price * (props.product.discountPercentage / 100)}$</p>
          <p><b>Price:</b> {props.product.price - props.product.price * (props.product.discountPercentage / 100)}$</p>
          <h5>Product Description</h5>
          <p>{props.product.description}</p>
        </div>
      </div>
      <div className="d-flex">
        <p><b>Rating:</b> {props.product.rating}</p>
        <p style={{ paddingLeft: 100 }}><b>Stock Quantity:</b> {props.product.stock}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
