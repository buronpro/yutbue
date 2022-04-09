import { NavLink } from "react-router-dom";
import "./ChannelNav.scss";

const ChannelNav = () => {
  return (
    <ul className="channel__nav__list">
      <li className="channel__nav__item">
        <NavLink
          className={({ isActive }) =>
            `channel__nav__link ${isActive ? "channel__nav__link--active" : ""}`
          }
          to={"/channel/1"}
        >
          <span className="channel__item__text">Home</span>
        </NavLink>
      </li>
      <li className="channel__nav__item">
        <NavLink
          className={({ isActive }) =>
            `channel__nav__link ${isActive ? "channel__nav__link--active" : ""}`
          }
          to={"/channel/videos"}
        >
          <span className="channel__item__text">Videos</span>
        </NavLink>
      </li>
      <li className="channel__nav__item">
        <NavLink
          className={({ isActive }) =>
            `channel__nav__link ${isActive ? "channel__nav__link--active" : ""}`
          }
          to={"/channel/playlists"}
        >
          <span className="channel__item__text">Playlists</span>
        </NavLink>
      </li>
      <li className="channel__nav__item">
        <NavLink
          className={({ isActive }) =>
            `channel__nav__link ${isActive ? "channel__nav__link--active" : ""}`
          }
          to={"/channel/channels"}
        >
          <span className="channel__item__text">Channels</span>
        </NavLink>
      </li>
      <li className="channel__nav__item">
        <NavLink
          className={({ isActive }) =>
            `channel__nav__link ${isActive ? "channel__nav__link--active" : ""}`
          }
          to={"/channel/discussion"}
        >
          <span className="channel__item__text">Discussion</span>
        </NavLink>
      </li>
      <li className="channel__nav__item">
        <NavLink
          className={({ isActive }) =>
            `channel__nav__link ${isActive ? "channel__nav__link--active" : ""}`
          }
          to={"/channel/About"}
        >
          <span className="channel__item__text">About</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default ChannelNav;
