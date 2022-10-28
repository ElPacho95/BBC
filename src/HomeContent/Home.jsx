import Women from "../assets/women.jpeg";
import IT from "../assets/technology.jpeg";
import NewsBlock from "./NewsBlock";
import Preview from "./Preview";

const Home = ({ posts }) => {
  return (
    <div className="container">
      <section>
        <div className="main">
          <div className="bg-img">
            <h1>Greece Balos Beach</h1>
            <p>Tourism May 10 2023</p>
          </div>
          <div className="main__imgs">
            <img src={Women} alt="" />
            <img src={IT} alt="" />
          </div>
        </div>
      </section>

      <section>
        <NewsBlock>
          <h1>Latest Technology News</h1>
          <div className="technology">
            {posts.map(
              (item) =>
                (item.id === 18 || item.id === 19) && (
                  <Preview
                    title={item.title}
                    subTitle={item.subTitle}
                    link={item.link}
                    img={item.Image}
                    id={item.id}
                  />
                )
            )}
          </div>
        </NewsBlock>
      </section>

      <section>
        <NewsBlock>
          <h1>Latest Recipies for Fitness</h1>
          <div className="technology">
            {posts.map(
              (item) =>
                (item.id === 49 || item.id === 50) && (
                  <Preview
                    title={item.title}
                    subTitle={item.subTitle}
                    img={item.Image}
                    id={item.id}
                  />
                )
            )}
          </div>
        </NewsBlock>
      </section>
    </div>
  );
};

export default Home;
