const Header = () => {
  return (
    <div className="head">
      <div className="logo">
        <i className="fa-solid fa-cat"></i>
      </div>
      <div className="category">
        <i className="fa-solid fa-cart-shopping"></i>
        <p className="cart-number">0</p>
      </div>
    </div>
  );
};
export default Header;
