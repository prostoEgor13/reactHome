import css from "./Toys.module.scss";
import cn from "classnames";
import snow from "./img/noun_Snowflake_4336155 1.png";
import volume from "./img/noun_Speaker_248990 1.png";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const ToysHeader = () => {
  const { register, } = useForm();

  const [, setSearch] = useSearchParams();

  const handleSearch = (event) => {
    setSearch({ search: event.target.value });
  
  };

  return (
    <header className={cn(css.Toys__mainHeader)}>
      <div className={cn(css.Toys__headerBlock)}>
        <div className={cn(css.Toys__headerVolume)}>
          <img src={volume} alt="" />
        </div>
        <div className={cn(css.Toys__headerSnow)}>
          <img src={snow} alt="" className={cn(css.Toys__headerSnowImg)} />
        </div>
        <form>
          <div className={cn(css.Toys__headerInputBlock)}>
            <input
              type="text"
              placeholder="    Поиск"
              {...register("search")}
              onChange={handleSearch}
             
            />
          </div>
        </form>

        <div className={cn(css.Toys__headerTittle)}>
          <h1>Игрушки</h1>
        </div>
      </div>
    </header>
  );
};
export default ToysHeader;
