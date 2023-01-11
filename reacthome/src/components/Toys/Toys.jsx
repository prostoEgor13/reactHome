import css from "./Toys.module.scss";
import cn from "classnames";
import snow from "./img/noun_Snowflake_4336155 1.png";
import volume from "./img/noun_Speaker_248990 1.png";

import ToysForm from "./ToysForm"

const Toys = () => {
  return (
    <>
      {/* <div className={cn(css.Toys__q)}>
        Toys
        <Link to="/TeeDec">go to Dec</Link>
      </div> */}
      <div className={cn(css.Toys__wrapper)}>
        <div className={cn(css.Toys__main)}>
          <header className={cn(css.Toys__main_header)}>
            <div className={cn(css.Toys__header_block)}>
              <div className={cn(css.Toys__header_volume)}>
                <img src={volume} alt="" />
              </div>
              <div className={cn(css.Toys__header_snow)}>
                <img
                  src={snow}
                  alt=""
                  className={cn(css.Toys__header_snow_img)}
                />
              </div>
              <div className={cn(css.Toys__header_input_block)}>
                <input type="text" placeholder="    Поиск" />
              </div>
              <div className={cn(css.Toys__header_tittle)}>
                <h1>Игрушки</h1>
              </div>
            </div>
          </header>
          <div className={cn(css.Toys__main_blocks)}>
        <ToysForm/>
            <div className={cn(css.Toys__main_cards)}>
              <div className={cn(css.Toys__main_card)}>
                <div className={cn(css.Toys__main_card_name)}>
                  <h3>Красный щар</h3>
                  <h3>С рисунком</h3>
                </div>
              </div>
              <div className={cn(css.Toys__main_card)}>
                <div className={cn(css.Toys__main_card_name)}>
                  <h3>Красный щар</h3>
                  <h3>С рисунком</h3>
                </div>
              </div>
              <div className={cn(css.Toys__main_card)}>
                <div className={cn(css.Toys__main_card_name)}>
                  <h3>Красный щар</h3>
                  <h3>С рисунком</h3>
                </div>
              </div>

              <div className={cn(css.Toys__main_card)}>
                <div className={cn(css.Toys__main_card_name)}>
                  <h3>Красный щар</h3>
                  <h3>С рисунком</h3>
                </div>
              </div>
              <div className={cn(css.Toys__main_card)}>
                <div className={cn(css.Toys__main_card_name)}>
                  <h3>Красный щар</h3>
                  <h3>С рисунком</h3>
                </div>
              </div>
              <div className={cn(css.Toys__main_card)}>
                <div className={cn(css.Toys__main_card_name)}>
                  <h3>Красный щар</h3>
                  <h3>С рисунком</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={cn(css.Toys__footer)}>
        <div className={cn(css.Toys__footer_created_by)}>
          <p>created by Egor Zhirkov</p>
        </div>
        <div className={cn(css.Toys__logo_img)}>
          <h1>Logo</h1>
        </div>
      </footer>
    </>
  );
};
export default Toys;
