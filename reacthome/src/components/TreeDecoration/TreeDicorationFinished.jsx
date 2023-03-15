import css from "./TreeDicoration.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
// import pic from "./img/kam-idris-L9-sfN04jdk-unsplash.jpg";

const TreeDicorationFinished = ({ cards, title, isSmall = false }) => {
  const toysCards = cards.map((toy, index) => {
    return (
      <div className={cn(css.TreeDicoration__toysBlockFinished)} key={index}>
        <div
          className={
            isSmall
              ? css.TreeDicoration__toysMainBlockFinishedSmall
              : css.TreeDicoration__toysMainBlockFinished
          }
        >
          <div className={cn(css.TreeDicoration__toysMinBlock)}>
            <h3>{toy.year}</h3>
            {/* <img src={pic} alt="" /> */}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={cn(css.TreeDicoration__toysBlockHeaderdone)}>
        <h1>{title}</h1>
      </div>
      <div className={cn(css.TreeDicoration__toysCardBlock)}>{toysCards}</div>
    </div>
  );
};
TreeDicorationFinished.propTypes = {
  cards: PropTypes.array,
  isSmall: PropTypes.bool,
  title: PropTypes.string,
};

export default TreeDicorationFinished;
