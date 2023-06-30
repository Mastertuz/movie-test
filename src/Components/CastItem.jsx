const CastItem = ({name,role,img}) => {
    return ( 
        <div className="cast__item">
                        <img
                          src={img}
                          alt="cast"
                          className="cast__item-img"
                        />
                        <p className="cast__item-name">{name}</p>
                        <p className="cast__item-position">
                          {role}
                        </p>
                      </div>
     );
}
 
export default CastItem;