import { useEffect } from 'react';
import { ParamGetObj } from '../types/params';
import { useHistory, useLocation } from 'react-router-dom';
import { parseGetParamsStr, stringifyGetParamsObj } from '../utils/utils';

type UseCustomRouteParamsType = {
  handleLocationChange?: () => void;
  handleChangePage?: () => void;
};

type UseCustomRouteReturnType = {
  paramsObj: ParamGetObj;
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const useCustomRoute = ({
  handleLocationChange,
  handleChangePage,
}: UseCustomRouteParamsType): UseCustomRouteReturnType => {
  const history = useHistory();
  const location = useLocation();
  const paramsObj = parseGetParamsStr(location.search);
  const currentPage = +paramsObj.page || 1;

  useEffect(() => {
    handleLocationChange && handleLocationChange();
  }, [location]);

  const onChangePage = (page: number) => {
    if (currentPage !== page) {
      paramsObj.page = page.toString();
      history.push({
        pathname: location.pathname,
        search: stringifyGetParamsObj(paramsObj),
      });
      handleChangePage && handleChangePage();
    }
  };

  return { paramsObj, currentPage, onChangePage };
};
