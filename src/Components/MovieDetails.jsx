import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CastItem from "./CastItem";
import { AppContext } from "../App";

const MovieDetails = () => {
  const { addToFavourites, favourites, cartItems, addToCart } =
    useContext(AppContext);
  const [modal, setModal] = useState(false);

  const isInFavs = (id) => {
    return favourites.some((item) => +item.parentId === +id);
  };
  const isInCart = (id) => {
   return cartItems.some((item) => +item.parentId === +id);
  };

  const { name } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://647b1465d2e5b6101db0d2ea.mockapi.io/items/?name=${name}`
      );

      setMovie(data.data[0]);
    }
    fetchData();
  }, []);
  const { id } = { ...movie };
  const obj = { ...movie, parentId: id };
  const onFav = () => {
    addToFavourites(obj);
  };
  const onCart = () => {
    addToCart(obj);
  };
  return (
    <>
      <div className="container">
        <SideBar movie={movie}/>
        <div className="inner">
          <Header />
          {movie && (
            <div className="wrapper">
              <div className="video">
                {modal ? (
                  <div className="modal">
                    <iframe
                      width="100%"
                      height="100%"
                      src={movie.trailerLink + "?autoplay=1&mute=1"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="video__inner">
                    <img
                      className="video__img"
                      src={movie.trailerImg}
                      alt="trailer"
                    />
                    <div className="popUp">
                      <button
                        onClick={() => setModal(!modal)}
                        className="video__btn"
                      >
                        <img src="images/content/details/play.svg" alt="play" />
                      </button>

                      <span className="video__btn-text">Watch Trailer</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="details">
                <div className="info">
                  <div className="info-top">
                  <div className="tags">
                    <span>{movie.name} • </span>
                    <span>{movie.year} • </span>
                    <span>
                      {movie.duration >= 60
                        ? `${Math.floor(movie.duration / 60)} h ${
                            movie.duration % 60 > 0
                              ? `${movie.duration % 60} min`
                              : ""
                          }`
                        : `${movie.duration} min`}
                    </span>
                  </div>
                  <div className="icons">
                      <img
                        className="cartIcon"
                        src={`images/${
                          isInCart(id) ? "isInCart.svg" : "notInCart.svg"
                        }`}
                        alt="cart"
                        onClick={() => onCart()}
                      />
                      <img
                        className="likedIcon"
                        src={`images/${
                          isInFavs(id) ? "liked.svg" : "unliked.svg"
                        }`}
                        alt="liked"
                        onClick={() => onFav()}
                      />
                    </div>
                    </div>
                  <p className="descr">{movie.description}</p>
                  <ul className="info__list">
                    <li className="info__list-item">
                      Director : <span>{movie.director}</span>
                    </li>
                    <li className="info__list-item">
                      Writers : <span>{movie.writers}</span>
                    </li>
                    <li className="info__list-item">
                      Stars : <span>{movie.stars}</span>
                    </li>
                  </ul>
                </div>
                <div className="cast">
                  <h2 className="cast__title">Top Cast</h2>
                  <div className="cast__items">
                    {movie.cast.map((item) => (
                      <CastItem
                        key={item.name}
                        role={item.role}
                        name={item.name}
                        img={item.img}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
