const Product = (props) => {
  const { imga, imgb, name, price, discountPrice, children } = props;
  return (
    <div className="product-item">
      <div className="product-item-img">
        <div className="product-item-img-front">
          <img src={imga} alt="" />
        </div>
        <div className="product-item-img-back">
          <img src={imgb} alt="" />
        </div>
      </div>
      <p className="name" style={{ height: "45px" }}>
        {name}
      </p>
      <p>{price}</p>
      <p>{discountPrice}</p>
      <button>Art to cart</button>
    </div>
  );
};
export default Product;
