import css from "./Toys.module.scss";
import cn from "classnames";
import ToysHeader from "./ToysHeader";
import ToysForm from "./ToysForm";
import ToysCards from "./ToysCards";
import Footer from "../Footer";
import toys from "./constants";
import useToysFilter from "./useToysFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toysActions } from "store/toys/index";
import { getToys } from "store/toys/selectors";

const Toys = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toysActions.setToys(toys));
  }, []);
  useToysFilter();
  const filterToys = useSelector(getToys);
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
