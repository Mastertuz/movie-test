import { useContext } from "react";
import { AppContext } from "../App";
import Movie from "./Movie";

const FullList = () => {
  const { allItems,searchValue } = useContext(AppContext);
  const filtredItems = allItems.filter((item) =>
  item.name.toLowerCase().includes(searchValue.toLowerCase())
);
  return (
    <>
      <h2 className="trending__title all">ALL</h2>
      <div className="trending__items all">
        {filtredItems.map((item) => (
          <Movie {...item} />
        ))}
      </div>
    </>
  );
};

export default FullList;
