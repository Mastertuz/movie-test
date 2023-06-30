import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
const SideBar = ({ movies, home, series, favourites }) => {
  const [leftPanel, setLeftPanel] = useState(false);
  const onPanel = () => {
    setLeftPanel(!leftPanel);
  };
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState("");
  const logIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("avatar", data.user.photoURL);
      window.location.reload();
      navigate("/");
    });
  };

  useEffect(() => {
    setUser(localStorage.getItem("email"));
    setAvatar(localStorage.getItem("avatar"));
  }, []);

  let body = document.querySelector("body");
  body.classList = leftPanel ? "overflow" : "";

  return (
    <>
    <button className="left-panel__opener">
      <img
      
        onClick={() => onPanel()}
        src="images/menuOpen.svg"
        alt=""
      />
      </button>
      <aside className={`left-panel ${leftPanel ? "show" : "hide"}`}>
        <div className="left-panel__inner">
          <Link to={"/"} className="logo">
            <img src="images/logo.svg" alt="Logo" />
          </Link>
          <div className="left-panel__scroll">

          
          <nav className="menu">
            <ul className="menu__list">
              <Link
                className={`menu__list-link ${home ? "active" : ""}`}
                to={"/"}
              >
                <li className="menu__list-item">
                  <svg
                    fill="#7B7B7B"
                    width="24px"
                    height="24px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M31.772 16.043l-15.012-15.724c-0.189-0.197-0.449-0.307-0.721-0.307s-0.533 0.111-0.722 0.307l-15.089 15.724c-0.383 0.398-0.369 1.031 0.029 1.414 0.399 0.382 1.031 0.371 1.414-0.029l1.344-1.401v14.963c0 0.552 0.448 1 1 1h6.986c0.551 0 0.998-0.445 1-0.997l0.031-9.989h7.969v9.986c0 0.552 0.448 1 1 1h6.983c0.552 0 1-0.448 1-1v-14.968l1.343 1.407c0.197 0.204 0.459 0.308 0.722 0.308 0.249 0 0.499-0.092 0.692-0.279 0.398-0.382 0.411-1.015 0.029-1.413zM26.985 14.213v15.776h-4.983v-9.986c0-0.552-0.448-1-1-1h-9.965c-0.551 0-0.998 0.445-1 0.997l-0.031 9.989h-4.989v-15.777c0-0.082-0.013-0.162-0.032-0.239l11.055-11.52 10.982 11.507c-0.021 0.081-0.036 0.165-0.036 0.252z"></path>{" "}
                    </g>
                  </svg>
                  <b className="menu__link-text">Home</b>
                </li>
              </Link>
              <Link
                className={`menu__list-link ${movies ? "active" : ""}`}
                to={"/movies"}
              >
                <li className="menu__list-item">
                  <svg
                    width="28px"
                    height="28px"
                    viewBox="0 0 123 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_423_26)">
                      <path
                        d="M12.14 0H32.8H62.23H91.03H110.74C114.08 0 117.12 1.37 119.32 3.56C121.52 5.76 122.88 8.8 122.88 12.14V19.27V76.52V83.61C122.88 86.95 121.51 89.99 119.32 92.19C117.12 94.39 114.08 95.75 110.74 95.75H91.54C91.38 95.78 91.21 95.79 91.03 95.79C90.86 95.79 90.69 95.78 90.52 95.75H62.74C62.58 95.78 62.41 95.79 62.23 95.79C62.06 95.79 61.89 95.78 61.72 95.75H33.31C33.15 95.78 32.98 95.79 32.8 95.79C32.63 95.79 32.46 95.78 32.29 95.75H12.14C8.8 95.75 5.76 94.38 3.56 92.19C1.36 90 0 86.95 0 83.61V76.52V19.27V12.14C0 8.8 1.37 5.76 3.56 3.56C5.76 1.37 8.8 0 12.14 0ZM55.19 31.24L75.72 45.56C76.04 45.76 76.33 46.04 76.56 46.37C77.48 47.7 77.14 49.51 75.82 50.43L55.37 64.57C54.87 64.98 54.22 65.23 53.52 65.23C51.9 65.23 50.59 63.92 50.59 62.3V33.63H50.6C50.6 33.05 50.77 32.47 51.12 31.96C52.05 30.64 53.87 30.32 55.19 31.24ZM93.95 79.45V89.9H110.73C112.46 89.9 114.03 89.19 115.17 88.05C116.31 86.91 117.02 85.34 117.02 83.61V79.45H93.95ZM88.1 89.9V79.45H65.16V89.9H88.1ZM59.31 89.9V79.45H35.73V89.9H59.31ZM29.87 89.9V79.45H5.85V83.61C5.85 85.34 6.56 86.91 7.7 88.05C8.84 89.19 10.41 89.9 12.14 89.9H29.87ZM5.85 73.6H32.8H62.23H91.03H117.03V22.2H91.03H62.23H32.8H5.85V73.6ZM88.1 16.35V5.85H65.16V16.34H88.1V16.35ZM93.95 5.85V16.34H117.02V12.14C117.02 10.41 116.31 8.84 115.17 7.7C114.03 6.56 112.46 5.85 110.73 5.85H93.95ZM59.31 16.35V5.85H35.73V16.34H59.31V16.35ZM29.87 16.35V5.85H12.14C10.41 5.85 8.84 6.56 7.7 7.7C6.56 8.84 5.85 10.41 5.85 12.14V16.34H29.87V16.35Z"
                        fill="#7B7B7B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_423_26">
                        <rect width="122.88" height="95.8" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <b className="menu__link-text">Movies</b>
                </li>
              </Link>
              <Link
                className={`menu__list-link ${series ? "active" : ""}`}
                to={"/series"}
              >
                <li className="menu__list-item">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 22 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Rounded"
                        transform="translate(-237.000000, -3656.000000)"
                      >
                        <g
                          id="Notification"
                          transform="translate(100.000000, 3600.000000)"
                        >
                          <g
                            id="-Round-/-Notification-/-live_tv"
                            transform="translate(136.000000, 54.000000)"
                          >
                            <g>
                              <polygon
                                id="Path"
                                points="0 0 24 0 24 24 0 24"
                              ></polygon>
                              <path
                                d="M10.5,17.15 L14.48,14.87 C15.15,14.49 15.15,13.52 14.48,13.13 L10.5,10.85 C9.83,10.47 9,10.96 9,11.72 L9,16.27 C9,17.04 9.83,17.53 10.5,17.15 Z M21,6 L13.41,6 L16.35,3.06 C16.55,2.86 16.55,2.55 16.35,2.35 C16.15,2.15 15.84,2.15 15.64,2.35 L12,5.99 L8.36,2.35 C8.16,2.15 7.85,2.15 7.65,2.35 C7.45,2.55 7.45,2.86 7.65,3.06 L10.59,6 L3,6 C1.9,6 1,6.89 1,8 L1,20 C1,21.1 1.9,22 3,22 L21,22 C22.1,22 23,21.1 23,20 L23,8 C23,6.89 22.1,6 21,6 Z M20,20 L4,20 C3.45,20 3,19.55 3,19 L3,9 C3,8.45 3.45,8 4,8 L20,8 C20.55,8 21,8.45 21,9 L21,19 C21,19.55 20.55,20 20,20 Z"
                                id="🔹-Icon-Color"
                                fill="#7B7B7B"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <b className="menu__link-text">TV Series</b>
                </li>
              </Link>
              <Link
                className={`menu__list-link ${favourites ? "active" : ""}`}
                to={"/favourites"}
              >
                <li className="menu__list-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.744 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.744 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                      fill="#9B9B9B"
                    />
                  </svg>

                  <b className="menu__link-text">Favourites</b>
                </li>
              </Link>
            </ul>
          </nav>
          </div>
          {user ? (
            <Link onClick={logOut} className="logIn">
              <div>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  width={26}
                  height={26}
                  xmlSpace="preserve"
                >
                  <path
                    fill="#7B7B7B"
                    d="M28.7,27.9c0,0,0,0.1,0,0.1c-0.1,0.2-0.5,0.5-0.7,0.6c-0.5,0.5-1.1,0.9-1.6,1.4c-0.8,0.7-1.5,1.4-2.3,2
c-0.7,0.6-0.8,1.1,0,1.8c0.9,0.8,1.6,1.8,2.4,2.7c3.8-3.7,7.2-7.2,10.7-10.7c0.7-0.7,0.8-1.1,0-1.8c-3.3-3.2-6.6-6.5-9.8-9.8
c-0.7-0.7-1-0.5-1.6,0c-2.7,2.6-2.7,2.5-0.1,5.1c0.6,0.6,1.3,1.2,1.9,1.8c0.2,0.2,0.6,0.4,0.7,0.6c0.4,0.7-0.8,0.6-1.1,0.6
c-8.3,0-16.5,0-24.8,0c-1.4,0-1.6-0.3-1.4-1.7C2.6,10.1,12.5,1.3,23.4,0.8c11.7-0.5,22.1,7,25,18.2c3.4,13.3-4.8,26.5-18.3,29.7
c-3.3,0.8-6.7,0.8-10,0.1c-3.2-0.7-6.3-2-9-3.9c-2.7-1.9-5.1-4.4-6.8-7.2c-0.9-1.5-1.7-3-2.2-4.7c-0.3-0.8-0.5-1.7-0.7-2.5
C1.2,30,1.1,29.6,1,29.2c-0.1-0.4-0.2-0.8-0.2-1.2C1,27.4,1.5,27.4,2,27.4c4.9,0,9.8,0,14.6,0c2.1,0,4.2,0,6.2,0c1,0,2.1,0,3.1,0
c0.5,0,1,0,1.5,0C27.8,27.4,28.7,27.4,28.7,27.9z"
                  />
                </svg>

                <span>Log Out</span>
              </div>
            </Link>
          ) : (
            <Link onClick={logIn} className="logIn">
              <div>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  width={26}
                  height={26}
                  xmlSpace="preserve"
                >
                  <path
                    fill="#7B7B7B"
                    d="M28.7,27.9c0,0,0,0.1,0,0.1c-0.1,0.2-0.5,0.5-0.7,0.6c-0.5,0.5-1.1,0.9-1.6,1.4c-0.8,0.7-1.5,1.4-2.3,2
	c-0.7,0.6-0.8,1.1,0,1.8c0.9,0.8,1.6,1.8,2.4,2.7c3.8-3.7,7.2-7.2,10.7-10.7c0.7-0.7,0.8-1.1,0-1.8c-3.3-3.2-6.6-6.5-9.8-9.8
	c-0.7-0.7-1-0.5-1.6,0c-2.7,2.6-2.7,2.5-0.1,5.1c0.6,0.6,1.3,1.2,1.9,1.8c0.2,0.2,0.6,0.4,0.7,0.6c0.4,0.7-0.8,0.6-1.1,0.6
	c-8.3,0-16.5,0-24.8,0c-1.4,0-1.6-0.3-1.4-1.7C2.6,10.1,12.5,1.3,23.4,0.8c11.7-0.5,22.1,7,25,18.2c3.4,13.3-4.8,26.5-18.3,29.7
	c-3.3,0.8-6.7,0.8-10,0.1c-3.2-0.7-6.3-2-9-3.9c-2.7-1.9-5.1-4.4-6.8-7.2c-0.9-1.5-1.7-3-2.2-4.7c-0.3-0.8-0.5-1.7-0.7-2.5
	C1.2,30,1.1,29.6,1,29.2c-0.1-0.4-0.2-0.8-0.2-1.2C1,27.4,1.5,27.4,2,27.4c4.9,0,9.8,0,14.6,0c2.1,0,4.2,0,6.2,0c1,0,2.1,0,3.1,0
	c0.5,0,1,0,1.5,0C27.8,27.4,28.7,27.4,28.7,27.9z"
                  />
                </svg>

                <span>Log In </span>
              </div>
            </Link>
          )}
          
        </div>
      </aside>
    </>
  );
};

export default SideBar;
