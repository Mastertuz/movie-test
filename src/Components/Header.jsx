import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { user } from "../pages/Favourites";


const Header = () => {
  const {searchValue,onChangeSearch,cartItems}=useContext(AppContext)
  return (
    <header className="header">
      <div className="header__inner">
        
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Search for movies, TV shows..."
            value={searchValue}
            onChange={onChangeSearch}
          />
        </div>
        <Link className="search__link" to={'/cart'}>
          <img width={70} height={70} src="images/cart.svg" alt="cart" />
          <span className="cartTotal">{user?cartItems.reduce((sum,item)=>item.price+sum,0):0}$</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
