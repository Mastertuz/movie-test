import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Movies from "./pages/Movies";
import Movie from "./Components/Movie";
import Series from "./pages/Series";
import MovieDetails from "./Components/MovieDetails";
import Favourites from "./pages/Favourites";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
import Newest from "./pages/Newest";
import Cart from "./pages/Cart";



export const AppContext = createContext(null);
function App() {
  const [trendingItems, setTrendingItems] = useState([]);
  const [upcomingItems, setUpcomingItems] = useState([]);
  const [newestItems, setNewestItems] = useState([]);
  const [favourites,setFavourites] = useState([])
  const [cartItems,setCartItems] = useState([])
  const [series, setSeries] = useState([]);

  
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
      const allItems =  await axios.get('https://647f1303c246f166da9007f0.mockapi.io/upcoming')
      const favouriteItems = await axios.get('https://647b1465d2e5b6101db0d2ea.mockapi.io/favourites')
      const cartItems = await axios.get('https://646c77ba7b42c06c3b2b4e55.mockapi.io/cartItems')

      setFavourites(favouriteItems.data)
      setCartItems(cartItems.data)
      setUpcomingItems(allItems.data[0].movies[1].upcoming)
      setNewestItems(allItems.data[0].movies[2].newest)
      setTrendingItems(allItems.data[0].movies[0].trending)
      setSeries(allItems.data[1].series)
      setIsLoading(false);
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);
  

  const allItems = [...trendingItems,...upcomingItems,...newestItems,...series]
  const moviesOnly = [...trendingItems,...upcomingItems,...newestItems]
   const onChangeSearch = (e)=>{
    setSearchValue(e.target.value)
   }

   const renderItems = (items) => {
    if (searchValue !== "") {
      const filtredItems = allItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      return (isLoading ? ["12", "13", "14", "15"] : filtredItems).map(
        (item, index) => (
          <Movie
            key={item.name}
            isLoading={isLoading}
            hidden={index > 3 ? true : false}
            {...item}
          />
        )
      );
    } else {
      return (isLoading ? ["12", "13", "14", "15"] : items).map(
        (item, index) => (
          <Movie
            key={item.name}
            isLoading={isLoading}
            hidden={index > 3 ? true : false}
            {...item}
          />
        )
      );
      
    }
  };

  const addToFavourites =async (obj)=>{
      const product = favourites.find(item => +item.parentId === +obj.id)
      try {
        if (product && favourites.find((favObj) => +favObj.id === +product.id)) {
          await axios.delete(
            `https://647b1465d2e5b6101db0d2ea.mockapi.io/favourites/${product.id}`
          );
          setFavourites((prev) => prev.filter((item) => +item.id !== +product.id));
        } else {
          const { data } = await axios.post(
            "https://647b1465d2e5b6101db0d2ea.mockapi.io/favourites",
            obj
          );
          setFavourites((prev) => [...prev, data]);
        }
      } catch (err) {
        alert("Не удалось добавить в закладки");
      }
  }
  const addToCart=async(obj)=>{
    const product = cartItems.find(item => +item.parentId === +obj.id)
    try {
      if (product && cartItems.find((favObj) => +favObj.id === +product.id)) {
        await axios.delete(
          `https://646c77ba7b42c06c3b2b4e55.mockapi.io/cartItems/${product.id}`
        );
        setCartItems((prev) => prev.filter((item) => +item.id !== +product.id));
      } else {
        const { data } = await axios.post(
          "https://646c77ba7b42c06c3b2b4e55.mockapi.io/cartItems",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (err) {
      alert("Не удалось добавить в закладки");
    }
  }
  const removeFromCart = (id) => {
    try {
      axios.delete(`https://646c77ba7b42c06c3b2b4e55.mockapi.io/cartItems/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      alert("Не получилось удалить товар из корзины")
    }
  };
  
  return (
    <AppContext.Provider value={{ allItems,series,moviesOnly,trendingItems,newestItems, upcomingItems, isLoading,searchValue,setSearchValue,onChangeSearch ,renderItems,addToFavourites,favourites,cartItems,addToCart,removeFromCart}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/movies" element={<Movies />} exact />
          <Route path="/series" element={<Series />} exact />
          <Route path="/favourites" element={<Favourites />} exact />
          <Route path="/trending" element={<Trending />} exact />
          <Route path="/upcoming" element={<Upcoming />} exact />
          <Route path="/newest" element={<Newest />} exact /> 
          <Route path="/details/:name" element={<MovieDetails />}  />
          <Route path="/cart" element={<Cart />}  />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
