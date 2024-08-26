import Product from "../Product/Product";

const Productlist = () => {
  return (
    <div className="product-list">
      <p>16 Product(s) found</p>
      <div className="product-listb">
        <Product
          imga="/images/product1a.webp"
          imgb="/images/product1b.webp"
          name="Cropped Stay Groovy off white"
          price="$10.90"
          discountPrice="or 9 x$1.21"
        />
        <Product
          imga="/images/product2a.webp"
          imgb="/images/product2b.webp"
          name="Basic Cactus White T-shirt"
          price="$13.25"
          discountPrice="or 3 x$4.42"
        />
        <Product
          imga="/images/product3a.webp"
          imgb="/images/product3b.webp"
          name="Skater Black Sweatshirt"
          price="$25.90"
          discountPrice="or 12 x$2.16"
        />
        <Product
          imga="/images/product4a.webp"
          imgb="/images/product4b.webp"
          name="Black Tule Oversized"
          price="$29.45"
          discountPrice="or 5 x$5.89"
        />
        <Product
          imga="/images/product5a.webp"
          imgb="/images/product5b.webp"
          name="Black Batman T-shirt"
          price="$10.90"
          discountPrice="or 9 x$1.21"
        />
        <Product
          imga="/images/product6a.webp"
          imgb="/images/product6b.webp"
          name="Blue T-Shirt"
          price="$9.00"
          discountPrice="or 3 x$3.00"
        />
        <Product
          imga="/images/product7a.webp"
          imgb="/images/product7b.webp"
          name="Loose Black T-shirt"
          price="$14.00"
          discountPrice="or 5 x$2.80"
        />
        <Product
          imga="/images/product8a.webp"
          imgb="/images/product8b.webp"
          name="Ringer Hall Pass"
          price="$10.90"
          discountPrice="or 9 x$1.21"
        />
        <Product
          imga="/images/product9a.webp"
          imgb="/images/product9b.webp"
          name="Slim black T-shirt"
          price="$49.90"
          discountPrice="N/A"
        />
      </div>
    </div>
  );
};
export default Productlist;
