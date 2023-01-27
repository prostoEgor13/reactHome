import css from "./Toys.module.scss";
import cn from "classnames";



const ToysCards = ({cards}) => {
  const toysCards = cards.map((toy, index) => {
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
  return <div className={cn(css.Toys__mainCards)}>{toysCards}</div>;
};
export default ToysCards;
