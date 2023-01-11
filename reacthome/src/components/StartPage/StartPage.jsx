import css from "./StartPage.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import mainpic from "../StartPage/img/aleksei-ezhkov-tdzktAdGOHg-unsplash.jpg";
import cn from "classnames";


const StartPage = () => {
  return (
    <>
      <div className={cn(css.StartPage__wrapper)}>
        <div className={cn(css.StartPage__main)}>
          <div className={cn(css.StartPage__center_block)}>
            <p>помогите бабушке</p>
            <p>нарядить елку</p>
          </div>
          <div className={cn(css.StartPage__main_button)}>
            <Link to="/toys" className={cn(css.StartPage__main_link)}>
              <p className={cn(css.StartPage__main_link_tittle)}>начать</p>
            </Link>
          </div>
        </div>
      </div>
      <footer className={cn(css.StartPage__footer)}>
        <div className={cn(css.StartPage__footer_created_by)}>
          <p>created by Egor Zhirkov</p>
        </div>
        <div className={cn(css.StartPage__logo_img)}>
          <h1>Logo</h1>
        </div>
      </footer>

    </>
  );
};
export default StartPage;
