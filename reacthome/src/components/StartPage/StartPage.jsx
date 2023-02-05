import css from "./StartPage.module.scss";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import cn from "classnames";

const StartPage = () => {
  return (
    <>
      <div className={cn(css.StartPage__wrapper)}>
        <div className={cn(css.StartPage__main)}>
          <div className={cn(css.StartPage__centerBlock)}>
            <p>помогите бабушке</p>
            <p>нарядить елку</p>
          </div>
          <div className={cn(css.StartPage__mainButton)}>
            <Link to="/toys" className={cn(css.StartPage__mainLink)}>
              <p className={cn(css.StartPage__mainLinkTittle)}>начать</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer createdBy="fddf" logo="cqkkkqq" />
    </>
  );
};
export default StartPage;
