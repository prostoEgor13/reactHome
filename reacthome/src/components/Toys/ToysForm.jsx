import css from "./Toys.module.scss";
import cn from "classnames";
import snow from "./img/noun_Snowflake_4336155 1.png";
import ball from "./img/ball.png";
import pine from "./img/pine.png";
import start from "./img/star.png";
import bell from "./img/bell.png";
import bird from "./img/bird_toy.png";
import { useForm } from "react-hook-form";

const ToysForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(css.Toys__main_settings)}>
        <div className={cn(css.Toys__main_settings_sort)}>
          <p>сортировать</p>
          <select name="" id="">
            <option value="">По возрастанию</option>
            <option value="">По убыванию</option>
          </select>
        </div>
        <div className={cn(css.Toys__main_settings_categories)}>
          <p>категории</p>
          <div>
            <input type="checkbox" {...register("category")} />
            <p>Все</p>
          </div>
        </div>
        <div className={cn(css.Toys__main_settings_forms)}>
          <p>Форма</p>
          <div className={cn(css.Toys__main_settings_forms_imges)}>
            <div>
              <img
                src={bell}
                alt=""
                className={cn(css.Toys__header_snow_img)}
              />
              <p>колокол</p>
            </div>
            <div>
              <img
                src={ball}
                alt=""
                className={cn(css.Toys__header_snow_img)}
              />
              <p>колокол</p>
            </div>
            <div>
              <img
                src={pine}
                alt=""
                className={cn(css.Toys__header_snow_img)}
              />
              <p>колокол</p>
            </div>
            <div>
              <img
                src={start}
                alt=""
                className={cn(css.Toys__header_snow_img)}
              />
              <p>колокол</p>
            </div>
            <div>
              <img
                src={snow}
                alt=""
                className={cn(css.Toys__header_snow_img)}
              />
              <p>колокол</p>
            </div>
            <div>
              <img
                src={bird}
                alt=""
                className={cn(css.Toys__header_snow_img)}
              />
              <p>колокол</p>
            </div>
          </div>
          <div className={cn(css.Toys__main_settings_numb_of_copies)}>
            <p>Колиичество экземпляров</p>
            <input type="range" min={1940} max={2022} step={1} />
            <div>
              <p>1940</p>
              <p>2022</p>
            </div>
          </div>
          <div className={cn(css.Toys__main_settings_numb_of_copies)}>
            <p>Год приобретения</p>
            <input type="range" min={1940} max={2022} step={1} />
            <div>
              <p>1940</p>
              <p>2022</p>
            </div>
          </div>
          <div className={cn(css.Toys__main_settings_colors)}>
            <p>Цвет</p>
            <div>
              <input type="checkbox" className={cn(css.Toys__inp1)} />
              <input
                type="checkbox"
                className={cn(css.Toys__main_settings_colors_inp2)}
              />
              <input
                type="checkbox"
                className={cn(css.Toys__main_settings_colors_inp3)}
              />
              <input
                type="checkbox"
                className={cn(css.Toys__main_settings_colors_inp4)}
              />
              <input
                type="checkbox"
                className={cn(css.Toys__main_settings_colors_inp5)}
              />
            </div>
          </div>
          <div className={cn(css.Toys__main_settings_size)}>
            <div>
              <p>Размер</p>
            </div>
            <div>
              <div>
                <input type="checkbox" />
                <p>Большой</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Средний</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Маленький</p>
              </div>
            </div>
          </div>
          <div className={cn(css.Toys__main_settings_favorite)}>
            <input type="checkbox" />
            <p>Только любимые</p>
          </div>
          <div className={cn(css.Toys__main_settings_buttons)}>
            <div>
              <button onClick={onSubmit}>Сбросить фильтры</button>
              <button className={cn(css.Toys__main_settings_buttons_btn2)}>
                Сбросить настройки
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ToysForm;
