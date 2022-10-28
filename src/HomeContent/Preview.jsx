import { Link } from "react-router-dom";

const Preview = (props) => {
  return (
    <div className="technology__block">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
      <Link to={`/news/${props.id}`}>Read more</Link>
    </div>
  );
};

export default Preview;
