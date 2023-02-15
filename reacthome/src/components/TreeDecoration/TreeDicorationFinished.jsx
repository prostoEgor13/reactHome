import css from "./TreeDicoration.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const TreeDicorationFinished = ({ cards }) => {
  const toysCards = cards.map((toy, index) => {
    return (
      <div className={cn(css.TreeDicoration__toysBlockFinished)} key={index}>
        <div className={cn(css.TreeDicoration__toysMainBlockFinished)}>
          <div className={cn(css.TreeDicoration__toysMinBlock)}>
            <h3>{toy.img}</h3>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={cn(css.TreeDicoration__toysBlockHeaderdone)}>
        <h1>ВЫ НАРЯДИЛИ</h1>
      </div>
      <div className={cn(css.TreeDicoration__toysCardBlock)}>{toysCards}</div>
    </div>
  );
};
TreeDicorationFinished.propTypes = {
  cards: PropTypes.array,
};
export default TreeDicorationFinished;
