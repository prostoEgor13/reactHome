import css from "./Toys.module.scss";
import cn from "classnames";
import ToysHeader from "./ToysHeader";
import ToysForm from "./ToysForm";
import ToysCards from "./ToysCards";
import Footer from "../Footer";
import toys from "./constants";
import useToysFilter from "./useToysFilter";

const Toys = () => {
  const filterToys = useToysFilter(toys);
  return (
    <>
      <div className={cn(css.Toys__wrapper)}>
        <div className={cn(css.Toys__main)}>
          <ToysHeader />
          <div className={cn(css.Toys__mainBlocks)}>
            <ToysForm />
            <ToysCards cards={filterToys} />
          </div>
        </div>
      </div>
      <Footer createdBy="secondPage" />
    </>
  );
};
export default Toys;
