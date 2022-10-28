import { Link } from "react-router-dom";

const AboutPlaces = (props) => {
  return (
    <div>
      <div className="blocks">
        <div>
          <img className="places" src={props.img} alt="" />
        </div>
        <div className="text">
          <h1>{props.title.toString().split("").slice(0, 30)}</h1>
          <p>{props.information.toString().split("").slice(0, 140)}</p>
          <Link to={`/news/${props.id}`}>Read More</Link>
          <h2>{props.category}</h2>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutPlaces;
