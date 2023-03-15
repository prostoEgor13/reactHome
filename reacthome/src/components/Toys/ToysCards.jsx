import css from "./Toys.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
// import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { isTSExpressionWithTypeArguments } from "@babel/types";
import { getToDo } from "store/toys/actions";

const ToysCards = ({ cards }) => {
  const dispatch = useDispatch();
  const getToDoDispatch = async () => {
    const res = await dispatch(getToDo());
    console.log(res);
  };

  // const getToDo = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos/1"
  //   );
  //   console.log(response.data);
  // };

  // const getToDoFetch = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1"
  //   );
  //   console.log(response.json().then((data) => data));
  // };

  useEffect(() => {
    getToDoDispatch();
    // getToDo();
    // getToDoFetch();
  }, []);
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
