import toys from "./constants";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const useToysFilter = (toysArray) => {
    const [search] = useSearchParams();
    const searchParams = search.get("search");
    console.log(searchParams);
    return useMemo(
        () => {
            const fiteredBySearch = toysArray.filter((toy) => toy.name.includes(searchParams))
            return isParamsExist(searchParams)? fiteredBySearch : toysArray



        },
        [searchParams]
    );

}
const isParamsExist = (params) => {
    return params!==null
}


export default useToysFilter