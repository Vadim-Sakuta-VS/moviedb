import { ParamGetObj } from '../types/params';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const paramsObj = parseGetParamsStr(
    stringifyGetParamsObj(router.query as ParamGetObj)
  );
  const currentPage = +paramsObj.page || 1;

  const onChangePage = (page: number) => {
    if (currentPage !== page) {
      paramsObj.page = page.toString();
      router.push({
        pathname: router.pathname,
        search: stringifyGetParamsObj(paramsObj),
      });
      handleChangePage && handleChangePage();
    }
  };

  return { paramsObj, currentPage, onChangePage };
};
