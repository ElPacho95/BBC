import Header from "./Header/Header";
import Home from "./HomeContent/Home";
import { Routes, Route } from "react-router-dom";
import News from "./News";
import { useEffect, useState } from "react";
import Posts from "./Links/Posts";
import loadingSvg from "./assets/loadingImg.svg";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        ` https://blog-u-n.herokuapp.com/api/content`
      );
      const resJSON = await response.json();
      setData([...data, ...resJSON]);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  const newsByCategory = (category) => {
    return data.filter((item) => item.category === category);
  };
  return (
    <div className="App">
      <Header />
      {!data.length ? (
        <div className="loading">
          <img src={loadingSvg} alt="" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home posts={data} />} />
          <Route
            path="/Tourism"
            element={
              <Posts
                data={newsByCategory("Technology")}
                item={newsByCategory("Tourism")}
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <Posts
                data={newsByCategory("fitness")}
                item={newsByCategory("Technology")}
              />
            }
          />
          <Route
            path="/Fitness"
            element={
              <Posts
                data={newsByCategory("food")}
                item={newsByCategory("fitness")}
              />
            }
          />
          <Route
            path="/Food"
            element={
              <Posts
                data={newsByCategory("Tourism")}
                item={newsByCategory("food")}
              />
            }
          />

          <Route path="/news/:idNews" element={<News posts={data} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
