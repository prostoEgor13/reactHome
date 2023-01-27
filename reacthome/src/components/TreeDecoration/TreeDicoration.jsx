import css from "./TreeDicoration.module.scss";

import Footer from "../Footer";
import cn from "classnames";

const TreeDicoration = () => {
  return (
    <>
      <div className={cn(css.TreeDicoration__wrapper)}>
        <div className={cn(css.TreeDicoration__main)}>
          <div className={cn(css.TreeDecoration__centralBlock)}></div>
        </div>
      </div>
      <Footer createdBy="treDec" logo="logo3" />
    </>
  );
};
export default TreeDicoration;
