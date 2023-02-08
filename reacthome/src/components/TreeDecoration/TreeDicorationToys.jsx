import css from "./TreeDicoration.module.scss";
import cn from "classnames";

const TreeDicorationToys = () => {
  return (
    <div className="">
      <div className={cn(css.TreeDicoration__toysBlockHeader)}>
        <h1>ИГРУШКИ</h1>
      </div>

      <div className={cn(css.TreeDicoration__toysBlockLine)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className={cn(css.TreeDicoration__toysBlockLine)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className={cn(css.TreeDicoration__toysBlockLine)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className={cn(css.TreeDicoration__toysBlockLine)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className={cn(css.TreeDicoration__toysBlockLine)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};
export default TreeDicorationToys;
