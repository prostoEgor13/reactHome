import css from "./TreeDicoration.module.scss";
import cn from "classnames";

const TreeDicorationFinished = () => {
  return (
    <div className={cn(css.TreeDicoration__toysBlockFinished)}>
      <div className={cn(css.TreeDicoration__toysBlockHeaderdone)}>
        <h1>ВЫ НАРЯДИЛИ</h1>
      </div>
      <div className={cn(css.TreeDicoration__toysBlockLineOne)}>
        <div className={cn(css.TreeDicoration__toysBlockLeftTree)}></div>
        <div className={cn(css.TreeDicoration__toysBlockRightTree)}></div>
      </div>

      <div className={cn(css.TreeDicoration__toysBlockLineTwo)}>
        <div className={cn(css.TreeDicoration__toysBlockLeftTree)}></div>
        <div className={cn(css.TreeDicoration__toysBlockRightTree)}></div>
      </div>
    </div>
  );
};
export default TreeDicorationFinished;
