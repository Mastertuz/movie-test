
import ContentLoader from "react-content-loader";

import { Link } from "react-router-dom";

const Movie = ({ img, hidden,isLoading,name}) => {
  return (
   
    <>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={200}
          height={315}
          viewBox="0 0 200 315"
          backgroundColor="#737373"
          foregroundColor="#3dd2cc"
        >
          <rect x="486" y="373" rx="0" ry="0" width="34" height="29" />
          <rect x="0" y="0" rx="20" ry="20" width="200" height="315" />
        </ContentLoader>
      ) : (
        <Link  to={`/details/${name.toLowerCase()}`} className={`trending__item ${hidden?"hidden":''}`} >

          <img  src={img} alt="movie" />

        </Link>
      )}
      </>
  );
};

export default Movie;
