import React from "react";
import { useParams } from "react-router-dom";
import ChannelNav from "../../Components/ChannelNav/ChannelNav";
import Bell from "../../Components/Lib/Icons/Bell";
import UserIcon from "../../Components/Lib/Icons/User";
import SubscribeButton from "../../Components/SubscribeButton/SubscribeButton";

import "./Channel.scss";

const Channel = () => {
  const { channelId } = useParams();

  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users?id=" + channelId);

      const data = await response.json();

      if (data) {
        setUser(data[0]);
      }
    })();
  }, [channelId]);

  return (
    <section className="channel">
      <img
        className="channel__banner"
        src={"https://via.placeholder.com/1595x280"}
        alt=""
        width={1595}
        height={280}
      />

      <div className="channel__top">
        <div className="channel__top__inner">
          <UserIcon className="channel__top__avatar" width={80} height={80} />

          <div className="channel__top__info">
            <h2 className="channel__top__heading">{user.name}</h2>

            <span className="channel__top__text">245K subscribed</span>
          </div>
        </div>

        <div className="channel__top__right">
          <button className="channel__top__button">
            <Bell />
          </button>

          <SubscribeButton />
        </div>
      </div>

      <div className="channel__hero">
        <div className="channel__hero__left">
          <ChannelNav />
        </div>
      </div>
    </section>
  );
};

export default Channel;
