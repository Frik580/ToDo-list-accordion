import "./Column.css";
import img from "../../../images/icon.svg";

function Column() {
  return (
    <section className="column">
      <img src={img} className="column__image" alt="Значок" />
    </section>
  );
}

export default Column;
