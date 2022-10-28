import { useParams } from "react-router-dom";

const News = ({ posts }) => {
  const { idNews } = useParams("idNews");

  const find = posts.find((item) => item.id === +idNews);

  return (
    <div className="about">
      <h1>{find.title}</h1>
      <img src={find.Image} alt="" />
      <p>{find.information}</p>
    </div>
  );
};

export default News;
