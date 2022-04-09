import React from "react";

import Post from "../Post/Post";

import "./NextVideo.scss";

const NextVideo = () => {
  const [nextVideo, setNextVideo] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await response.json();

      if (data) {
        setNextVideo(data.slice(60, 80));
      }
    })();
  }, []);

  return (
    <div className="next-video">
      <div className="next-video__top">
        <h2 className="next-video__heading">Next</h2>

        <div className="next-video__autoplay">
          <span className="next-video__autoplay__heading">Autoplay</span>

          <label className="next-video__autoplay__label">
            <input className="next-video__autoplay__input visually-hidden" type="checkbox" />

            <span className="autoplay__controller">
              <span className="autoplay__button"></span>
            </span>
          </label>
        </div>
      </div>

      <ul className="next-videos__list">
        {nextVideo.length > 0 && nextVideo.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  );
};

export default NextVideo;
