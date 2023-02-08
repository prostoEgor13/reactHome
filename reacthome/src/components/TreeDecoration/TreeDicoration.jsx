import css from "./TreeDicoration.module.scss";
import Footer from "../Footer";
import cn from "classnames";
import volume from "../Toys/img/noun_Speaker_248990 1.png";
import snow from "../Toys/img/noun_Snowflake_4336155 1.png";
import garland1 from "../Toys/img/Garland_1.png";
import garland2 from "../Toys/img/Garland_2.png";
import garland3 from "../Toys/img/Garland_3.png";
import TreeDicorationToys from "./TreeDicorationToys";
import TreeDicorationFinished from "./TreeDicorationFinished";

const TreeDicoration = () => {
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
              <div
                className={cn(css.TreeDicoration__chooseBlockChooseTreeHeader)}
              >
                <h1> ВЫБЕРИТЕ ЕЛКУ</h1>
              </div>
              <div className={cn(css.TreeDicoration__chooseBlockChooseTrees)}>
                <div
                  className={cn(
                    css.TreeDicoration__chooseBlockChooseTreesLineOne
                  )}
                >
                  <div
                    className={cn(
                      css.TreeDicoration__chooseBlockChooseTreesLeftTree
                    )}
                  ></div>
                  <div
                    className={cn(
                      css.TreeDicoration__chooseBlockChooseTreesRightTree
                    )}
                  ></div>
                </div>

                <div
                  className={cn(
                    css.TreeDicoration__chooseBlockChooseTreesLineTwo
                  )}
                >
                  <div
                    className={cn(
                      css.TreeDicoration__chooseBlockChooseTreesLeftTree
                    )}
                  ></div>
                  <div
                    className={cn(
                      css.TreeDicoration__chooseBlockChooseTreesRightTree
                    )}
                  ></div>
                </div>
              </div>
              <div
                className={cn(css.TreeDicoration__chooseBlockChooseBackHeader)}
              >
                <h1>ВЫБЕРИТЕ ФОН</h1>
              </div>
              <div className={cn(css.TreeDicoration__chooseBlockChooseBack)}>
                <div
                  className={cn(
                    css.TreeDicoration__chooseBlockChooseBackLineOne
                  )}
                >
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                </div>
                <div
                  className={cn(
                    css.TreeDicoration__chooseBlockChooseBackLineTwo
                  )}
                >
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>
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
            <TreeDicorationToys />
            <TreeDicorationFinished />
          </div>
        </div>
      </div>
      <Footer createdBy="treDec" logo="logo3" />
    </>
  );
};
export default TreeDicoration;
