import { useContext } from "react";
import Header from "../Components/Header";
import Movie from "../Components/Movie";
import SideBar from "../Components/SideBar";
import { AppContext } from "../App";


const Series = () => {
    const { series, searchValue,isLoading } = useContext(AppContext);
    const filtredItems = series.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return ( 
        <>
        <div className="container">
          <SideBar series/>
          <div className="inner">
            <Header />
            <h2 className="trending__title all">Series</h2>
            <div className="trending__items all">
              {filtredItems.map((item) => (
                <Movie key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </>
     );
}
 
export default Series;