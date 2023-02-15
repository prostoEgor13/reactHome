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
  const [search, setSearch] = useSearchParams();

  const updateParams = (name, value) => {
    search.set(name, value);
    setSearch(search);
  };

  const handleImgClick = (event, fieldLabel) => {
    updateParams(fieldLabel, event.target.name);
  };

  const handleCheckboxClick = (event, fieldLabel) => {
    updateParams(fieldLabel, event.target.checked);
  };

  const handleLabelClick = (event, fieldLabel) => {
    if (event.target.checked) {
      updateParams(fieldLabel, event.target.name);
    } else {
      updateParams(fieldLabel, "");
    }
  };
  const handleValueClick = (event, fieldLabel) => {
    updateParams(fieldLabel, event.target.value);
  };
  const handleReset = () => {
    reset();
    setSearch({});
  };
  const onSubmit = () => {};

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
            <input
              type="checkbox"
              {...register(filterLabels.selectAll)}
              onChange={(event) =>
                handleCheckboxClick(event, filterLabels.selectAll)
              }
            />
            <p>Все</p>
          </div>
        </div>
        <div className={cn(css.Toys__mainSettingsForms)}>
          <p>Форма</p>
          <div className={cn(css.Toys__mainSettingsFormsImges)}>
            <div>
              <img
                src={bell}
                alt=""
                className={cn(css.Toys__headerSnowImg)}
                {...register(filterLabels.toys.bell)}
                onClick={(event) => {
                  handleImgClick(event, filterLabels.toy);
                }}
              />
              <p>колокол</p>
            </div>
            <div>
              <img
                src={ball}
                alt=""
                className={cn(css.Toys__headerSnowImg)}
                {...register(filterLabels.toys.ball)}
                onClick={(event) => {
                  handleImgClick(event, filterLabels.toy);
                }}
              />
              <p>шар</p>
            </div>
            <div>
              <img
                src={pine}
                alt=""
                className={cn(css.Toys__headerSnowImg)}
                {...register(filterLabels.toys.cone)}
                onClick={(event) => {
                  handleImgClick(event, filterLabels.toy);
                }}
              />
              <p>шишка</p>
            </div>
            <div>
              <img
                src={start}
                alt=""
                className={cn(css.Toys__headerSnowImg)}
                {...register(filterLabels.toys.star)}
                onClick={(event) => {
                  handleImgClick(event, filterLabels.toy);
                }}
              />
              <p>звезда</p>
            </div>
            <div>
              <img
                src={snow}
                alt=""
                className={cn(css.Toys__headerSnowImg)}
                {...register(filterLabels.toys.snowflake)}
                onClick={(event) => {
                  handleImgClick(event, filterLabels.toy);
                }}
              />
              <p>снежинка</p>
            </div>
            <div>
              <img
                src={bird}
                alt=""
                className={cn(css.Toys__headerSnowImg)}
                {...register(filterLabels.toys.figure)}
                onClick={(event) => {
                  handleImgClick(event, filterLabels.toy);
                }}
              />
              <p>фигурка</p>
            </div>
          </div>
          <div className={cn(css.Toys__mainSettingsNumbOfCopies)}>
            <p>Колиичество экземпляров</p>
            <input
              type="range"
              min={0}
              max={15}
              step={1}
              {...register(filterLabels.values.numberOfCopies)}
              onChange={(event) => {
                handleValueClick(event, filterLabels.value);
              }}
            />
            <div>
              <p>0</p>
              <p>15</p>
            </div>
          </div>
          <div className={cn(css.Toys__mainSettingsNumbOfCopies)}>
            <p>Год приобретения</p>
            <input
              type="range"
              min={1940}
              max={2022}
              step={1}
              {...register(filterLabels.values.year)}
              onChange={(event) => {
                handleValueClick(event, filterLabels.value);
              }}
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
                  handleLabelClick(event, filterLabels.color)
                }
              />
              <input
                type="checkbox"
                className={cn(css.Toys__mainSettingsColorsInp3)}
                {...register(filterLabels.colors.pink)}
                onChange={(event) =>
                  handleLabelClick(event, filterLabels.color)
                }
              />
              <input
                type="checkbox"
                className={cn(css.Toys__mainSettingsColorsInp4)}
                {...register(filterLabels.colors.purple)}
                onChange={(event) =>
                  handleLabelClick(event, filterLabels.color)
                }
              />
              <input
                type="checkbox"
                className={cn(css.Toys__mainSettingsColorsInp5)}
                {...register(filterLabels.colors.red)}
                onChange={(event) =>
                  handleLabelClick(event, filterLabels.color)
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
                <input
                  type="checkbox"
                  {...register(filterLabels.sizes.large)}
                  onChange={(event) =>
                    handleLabelClick(event, filterLabels.size)
                  }
                />
                <p>Большой</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register(filterLabels.sizes.medium)}
                  onChange={(event) =>
                    handleLabelClick(event, filterLabels.size)
                  }
                />
                <p>Средний</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register(filterLabels.sizes.small)}
                  onChange={(event) =>
                    handleLabelClick(event, filterLabels.size)
                  }
                />
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
              <button onClick={handleReset}>Сбросить фильтры</button>
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
