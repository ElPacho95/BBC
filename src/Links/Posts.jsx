import AboutPlaces from "./AboutPlaces";
import MoreInfo from "./MoreInfo";
import Advertisement from "../Advertisement";

const Posts = ({ data, item }) => {
  return (
    <div>
      <div className="wrapper">
        <div>
          <h1>{item[0].category.toUpperCase()}</h1>
          {item
            .filter((l) => l.direction === "left")
            .map((item) => (
              <AboutPlaces
                key={item.id}
                information={item.information}
                category={item.category}
                title={item.title}
                img={item.Image}
                id={item.id}
              />
            ))}
        </div>
        <div>
          <h1>Top Posts</h1>
          {item
            .filter((r) => r.direction === "right")
            .map((item) => (
              <AboutPlaces
                key={item.id}
                information={item.information}
                category={item.category}
                title={item.title}
                img={item.Image}
                id={item.id}
              />
            ))}
          <Advertisement />
        </div>
      </div>
      <h1>You can watch also</h1>
      <h2>{data[0].category}</h2>
      <div className="moreInfo">
        {data.map((item) => (
          <MoreInfo
            id={item.id}
            key={item.id}
            title={item.title}
            img={item.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
