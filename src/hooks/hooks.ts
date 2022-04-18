import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { paramState, resultState, itemResult, itemParam } from "atoms/atoms";

export function useSearchResults() {
  const queryParam = useParams();
  const query = queryParam;

  const setQueryValue = useSetRecoilState(paramState);
  const results = useRecoilValue(resultState);

  useEffect(() => {
    setQueryValue(query.busqueda);
  }, [query]);

  return results;
}

export function useItemResult() {
  const queryParam = useParams();
  const query = queryParam;

  const setItemValue = useSetRecoilState(itemParam);
  const result = useRecoilValue(itemResult);

  useEffect(() => {
    setItemValue(query.id);
  }, [query]);

  return result;
}
