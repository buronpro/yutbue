import React from "react";
import { Link } from "react-router-dom";

import PostsList from "../../Components/PostsList/PostsList";
import Post from "../../Components/Post/Post";
import User from "../../Components/Lib/Icons/User";

import "./Home.scss";

const Home = () => {
  const [postsTop, setPostsTop] = React.useState([]);
  const [postsRecommended, setPostsRecommended] = React.useState([]);
  const [postsBottom, setPostsBottom] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await response.json();

      if (data) {
        setPostsTop(data.slice(0, 20));
        setPostsRecommended(data.slice(20, 40));
        setPostsBottom(data.slice(40, 60));
      }
    })();
  }, []);

  return (
    <section className="home">
      <div className="home__top">
        <div className="home__top__inner">
          <User className="home__top__image" width={50} height={50} />

          <Link className="home__top__link" to={"/channel/1"}>
            Dollie Blair
          </Link>
        </div>

        <PostsList className={"posts"}>
          {postsTop.length > 0 && postsTop.map((post) => <Post key={post.id} post={post} />)}
        </PostsList>
      </div>

      <div className="home__recommended">
        <div className="home__recommended">
          <h2 className="home__recommended__title">Recommended</h2>

          <PostsList className={"recommended"}>
            {postsRecommended.length > 0 &&
              postsRecommended.map((post) => <Post key={post.id} post={post} />)}
          </PostsList>
        </div>
      </div>

      <div className="home__bottom">
        <div className="home__bottom">
          <h2 className="home__bottom__title">Food & Drink</h2>

          <PostsList className={"bottom"}>
            {postsBottom.length > 0 &&
              postsBottom.map((post) => <Post key={post.id} post={post} />)}
          </PostsList>
        </div>
      </div>
    </section>
  );
};

export default Home;
