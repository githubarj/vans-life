import "./vans.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function SingleVan(props) {

  const navigate = useNavigate();

  function handleClick () {
    navigate(`${props.id}`) ;
  }

  const style = {
    background:
      props.type.toLowerCase() === "rugged"
        ? "#115E59"
        : props.type.toLowerCase() === "luxury"
        ? "#161616"
        : "#E17654",
  };

  return (
    <div className="single-container" onClick={handleClick} >
      <img src={props.imageUrl} alt="" className="van-image" />
      <div className="card-information">
        <div className="first-section">
          <h1 className="card-text">{props.name}</h1>

          <p className="card-text text-group">${props.price}</p>
        </div>
        <div className="second-section">
          <button className="card-button-text" style={style}>
            {props.type}
          </button>
        </div>
      </div>
    </div>
  );
}

SingleVan.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.string,
};

export default SingleVan;
