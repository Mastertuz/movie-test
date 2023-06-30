import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Movie from "../Components/Movie";
import { useContext } from "react";
import { AppContext } from "../App";
import { user } from "./Favourites";

const Cart = () => {
    const {cartItems} = useContext(AppContext)
    return ( 
        <>
        <div className="container">
          <SideBar />
          <div className="inner">
            <Header />
            <h2 className="trending__title all">{cartItems.length>0?"Cart":"Cart is empty"}</h2>
            
              {user?
              <div className="trending__items all">
                {cartItems.map((item)=>(
                <Movie key={item.name} {...item}/>
                ))}
                </div>
             :<h4>Sign in to see your cart</h4>}

            </div>
          
        </div>
      </>
     );
}
 
export default Cart;