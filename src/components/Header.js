import { useLocation } from "react-router-dom";
import Button from "./Button";

export default function Header({ title, onShow, openForm }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={openForm ? "red" : "green"}
          text={openForm ? "Close" : "Add Task"}
          onClick={onShow}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
