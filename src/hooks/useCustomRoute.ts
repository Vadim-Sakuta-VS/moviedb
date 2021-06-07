import { ParamGetObj } from '../types/params';
import { useRouter } from 'next/router';
import { parseGetParamsStr, stringifyGetParamsObj } from '../utils/utils';
import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { useEffect } from 'react';

type UseCustomRouteParamsType = {
  handleLocationChange?: () => void;
  handleChangePage?: () => void;
};

type UseCustomRouteReturnType = {
  paramsObj: ParamGetObj;
  currentPage: number;
  onChangePage: (page: number) => void;
  router: NextRouter;
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

  useEffect(() => {
    handleLocationChange && handleLocationChange();
  }, [router.query]);

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

  return { paramsObj, currentPage, onChangePage, router };
};
