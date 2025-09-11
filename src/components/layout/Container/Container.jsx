import "./Container.scss";
import classNames from "classnames";

const Container = (props) => {
  const {
    children,
    addClass = "",
    size = "default", // default, large, large-m
  } = props;

  const containerClass = classNames({
    container: true,
    [`${addClass}`]: addClass,
    [`container_size_${size}`]: size,
  });
  return <div className={containerClass}>{children}</div>;
};

export default Container;
