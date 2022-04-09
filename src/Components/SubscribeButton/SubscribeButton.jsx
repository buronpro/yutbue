import "./SubscribeButton.scss";

const SubscribeButton = ({ subscribers = "2.3m" }) => {
  return <button className="subscribe-button">Subscribe {subscribers}</button>;
};

export default SubscribeButton;
