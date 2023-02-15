import css from "./Toys.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const ToysCards = ({ cards }) => {
  const toysCard = cards.map((toy, index) => {
    return (
      <div className={cn(css.Toys__mainCard)} key={index}>
        <div className={cn(css.Toys__mainCardName)}>
          <h3>{toy.name}</h3>
          <h3> колличество {toy.count}</h3>
          <h3>год выпуска {toy.year}</h3>
        </div>
      </div>
    );
  });
  return <div className={cn(css.Toys__mainCards)}>{toysCard}</div>;
};
ToysCards.propTypes = {
  cards: PropTypes.array,
};
export default ToysCards;
