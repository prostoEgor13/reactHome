import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { getToys } from "store/toys/selectors"
import { useSelector, useDispatch } from "react-redux";
import { toysActions } from "store/toys";

const isParamsExist = (params) => {
    return params !== null
}

const useToysFilter = () => {
    const dispatch = useDispatch();
    const toysArray = useSelector(getToys)
    const [search] = useSearchParams();
    const [favorite] = useSearchParams();
    const searchParams = search.get("search");
    const favoriteParams = favorite.get("favorite");
    console.log();

    return useMemo(
        () => {
            let fiteredBySearch = []
            let fiteredByfavorite = []
            if (isParamsExist(searchParams)) {
                fiteredBySearch = toysArray.filter((toy) => toy.name.includes(searchParams))
                console.log(fiteredBySearch);
                // return isParamsExist(searchParams) ? fiteredBySearch : toysArray;
            }

            if (isParamsExist(favoriteParams)) {
                fiteredByfavorite = toysArray.filter((toy) => toy.favorite === Boolean(favoriteParams))
                console.log(fiteredByfavorite);
                // return isParamsExist(favoriteParams) ? fiteredByfavorite : toysArray
            }
            const final = [...fiteredBySearch, ...fiteredByfavorite];
            dispatch(toysActions.setToys(final.length === 0 ? toysArray : final));

        },
        [searchParams, favoriteParams]

    );

}





export default useToysFilter