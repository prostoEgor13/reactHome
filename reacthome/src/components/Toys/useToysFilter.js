import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const isParamsExist = (params) => {
    return params !== null
}

const useToysFilter = (toysArray) => {
    const [search] = useSearchParams();
    const [favorite] = useSearchParams();
    const searchParams = search.get("search");
    const favoriteParams = favorite.get("favorite");
    console.log(searchParams);
    return useMemo(
        () => {
            if (isParamsExist) {
                const fiteredBySearch = toysArray.filter((toy) => toy.name.includes(searchParams))
                return isParamsExist(searchParams) ? fiteredBySearch : toysArray;
            }

            if (isParamsExist) {
                const fiteredByfavorite = toysArray.filter((toy) => toy.favorite.includes(favoriteParams))
                return isParamsExist(favoriteParams) ? fiteredByfavorite : toysArray
            }
            return []
        },
        [searchParams, favoriteParams]

    );

}





export default useToysFilter