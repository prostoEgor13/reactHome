import css from "./Toys.module.scss";
import cn from "classnames";
import snow from "./img/noun_Snowflake_4336155 1.png";
import ball from "./img/ball.png";
import pine from "./img/pine.png";
import start from "./img/star.png";
import bell from "./img/bell.png";
import bird from "./img/bird_toy.png";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { filterLabels } from "./utils";

const ToysForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [, setSearch] = useSearchParams();

  const handleCheckboxClick = (event, fieldLabel) => {
    setSearch({ [fieldLabel]: event.target.checked });
    console.dir(event.target);
  };

  const handleLabelClick = (event, fieldLabel) => {
    if (event.target.checked) {
      setSearch({ [fieldLabel]: event.target.name });
    } else {
      setSearch({ [fieldLabel]: "" });
    }

    console.dir(event.target);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(css.Toys__mainSettings)}>
        <div className={cn(css.Toys__mainSettingsSort)}>
          <p>сортировать</p>
          <select name="" id="">
            <option value="">По возрастанию</option>
            <option value="">По убыванию</option>
          </select>
        </div>
        <div className={cn(css.Toys__mainSettingsCategories)}>
          <p>категории</p>
          <div>
            <input type="checkbox" {...register(filterLabels.category)} />
            <p>Все</p>
          </div>
        </div>
        <div className={cn(css.Toys__mainSettingsForms)}>
          <p>Форма</p>
          <div className={cn(css.Toys__mainSettingsFormsImges)}>
            <div>
              <img src={bell} alt="" className={cn(css.Toys__headerSnowImg)} />
              <p>колокол</p>
            </div>
            <div>
              <img src={ball} alt="" className={cn(css.Toys__headerSnowImg)} />
              <p>шар</p>
            </div>
            <div>
              <img src={pine} alt="" className={cn(css.Toys__headerSnowImg)} />
              <p>шишка</p>
            </div>
            <div>
              <img src={start} alt="" className={cn(css.Toys__headerSnowImg)} />
              <p>звезда</p>
            </div>
            <div>
              <img src={snow} alt="" className={cn(css.Toys__headerSnowImg)} />
              <p>снежинка</p>
            </div>
            <div>
              <img src={bird} alt="" className={cn(css.Toys__headerSnowImg)} />
              <p>фигурка</p>
            </div>
          </div>
          <div className={cn(css.Toys__mainSettingsNumbOfCopies)}>
            <p>Колиичество экземпляров</p>
            <input
              type="range"
              min={1940}
              max={2022}
              step={1}
              {...register("category1")}
            />
            <div>
              <p>1940</p>
              <p>2022</p>
            </div>
          </div>
          <div className={cn(css.Toys__mainSettingsNumbOfCopies)}>
            <p>Год приобретения</p>
            <input
              type="range"
              min={1940}
              max={2022}
              step={1}
              {...register("category2")}
            />
            <div>
              <p>1940</p>
              <p>2022</p>
            </div>
          </div>
          <div className={cn(css.Toys__mainSettingsColors)}>
            <p>Цвет</p>
            <div>
              <label>
                green
                <input
                  type="checkbox"
                  className={cn(css.Toys__inp1)}
                  {...register(filterLabels.colors.green)}
                  onChange={(event) =>
                    handleLabelClick(event, filterLabels.color)
                  }
                />
              </label>

              <input
                type="checkbox"
                className={cn(css.Toys__mainSettingsColorsInp2)}
                {...register(filterLabels.colors.yellow)}
                onChange={(event) =>
                  handleCheckboxClick(event, filterLabels.color)
                }
              />
              <input
                type="checkbox"
                className={cn(css.Toys__mainSettingsColorsInp3)}
                {...register(filterLabels.colors.pink)}
                onChange={(event) =>
                  handleCheckboxClick(event, filterLabels.color)
                }
              />
              <input
                type="checkbox"
                className={cn(css.Toys__mainSettingsColorsInp4)}
                {...register(filterLabels.colors.purple)}
                onChange={(event) =>
                  handleCheckboxClick(event, filterLabels.color)
                }
              />
              <input
                type="checkbox"
                className={cn(css.Toys__mainSettingsColorsInp5)}
                {...register(filterLabels.colors.red)}
                onChange={(event) =>
                  handleCheckboxClick(event, filterLabels.color)
                }
              />
            </div>
          </div>
          <div className={cn(css.Toys__mainSettingsSize)}>
            <div>
              <p>Размер</p>
            </div>
            <div>
              <div>
                <input type="checkbox" {...register("category8")} />
                <p>Большой</p>
              </div>
              <div>
                <input type="checkbox" {...register("category9")} />
                <p>Средний</p>
              </div>
              <div>
                <input type="checkbox" {...register("category10")} />
                <p>Маленький</p>
              </div>
            </div>
          </div>
          <div className={cn(css.Toys__mainSettingsFavorite)}>
            <input
              type="checkbox"
              {...register(filterLabels.onlyFavourites)}
              onChange={(event) =>
                handleCheckboxClick(event, filterLabels.onlyFavourites)
              }
            />
            <p>Только любимые</p>
          </div>
          <div className={cn(css.Toys__mainSettingsButtons)}>
            <div>
              <button onClick={onSubmit}>Сбросить фильтры</button>
              <button className={cn(css.Toys__mainSettingsButtonsBtn2)}>
                Сбросить настройки
              </button>
              <Link
                to="/treeDicoration"
                className={cn(css.Toys__mainSettingsButtonsBtn2)}
              >
                <button className={cn(css.Toys__mainSettingsBtnNext)}>
                  next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ToysForm;
