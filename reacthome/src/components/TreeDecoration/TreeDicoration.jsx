import css from "./TreeDicoration.module.scss";
import Footer from "../Footer";
import cn from "classnames";
import volume from "../Toys/img/noun_Speaker_248990 1.png";
import snow from "../Toys/img/noun_Snowflake_4336155 1.png";
import garland1 from "../Toys/img/Garland_1.png";
import garland2 from "../Toys/img/Garland_2.png";
import garland3 from "../Toys/img/Garland_3.png";
import { useSelector } from "react-redux";
import TreeDicorationFinished from "./TreeDicorationFinished";
// import ChooseTree from "./ChooseTree";
// import toys from "../Toys/constants";
import toys from "./arrayFnished";

import { getToys } from "store/toys/selectors";
// import arrayFnished from "./arrayFnished";
// import useFinishedFilter from "./useFinishedFilter";

const TreeDicoration = () => {
  const filterToys = useSelector(getToys);
  return (
    <>
      <div className={cn(css.TreeDicoration__wrapper)}>
        <div className={cn(css.TreeDicoration__main)}>
          <div className={cn(css.TreeDicoration__chooseBlock)}>
            <div className={cn(css.TreeDicoration__chooseBlockHeader)}>
              <div className={cn(css.TreeDicoration__chooseBlockHeaderVolume)}>
                <img src={volume} alt="" />
              </div>
              <div className={cn(css.TreeDicoration__chooseBlockHeaderSnow)}>
                <img src={snow} alt="" />
              </div>
            </div>
            <div className={cn(css.TreeDicoration__chooseBlockChooseTree)}>
              <TreeDicorationFinished cards={toys.slice(0, 4)} />
              <div
                className={cn(css.TreeDicoration__chooseBlockChooseBackHeader)}
              >
                <h1>ВЫБЕРИТЕ ФОН</h1>
              </div>
              <TreeDicorationFinished cards={filterToys} isSmall />
              <div
                className={cn(
                  css.TreeDicoration__chooseBlockChooseHeaderGarland
                )}
              >
                <h1>ГИРЛЯНДА</h1>
              </div>
              <div className={cn(css.TreeDicoration__chooseBlockChooseGarland)}>
                <img src={garland1} alt="" />
                <img src={garland2} alt="" />
                <img src={garland3} alt="" />
              </div>
            </div>
            <div className={cn(css.TreeDicoration__chooseBlockButtons)}>
              <button>сохранить</button>
              <button className={cn(css.Toys__mainSettingsButtonsBtn2)}>
                Сбросить настройки
              </button>
            </div>
          </div>
          <div className={cn(css.TreeDicoration__centralBlock)}></div>
          <div className={cn(css.TreeDicoration__toysBlock)}>
            <TreeDicorationFinished cards={filterToys} isSmall />
            <TreeDicorationFinished cards={filterToys} title="Вы нарядили" />
          </div>
        </div>
      </div>
      <Footer createdBy="treDec" logo="logo3" />
    </>
  );
};
export default TreeDicoration;
