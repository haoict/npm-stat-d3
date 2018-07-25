import { UPDATE_QUERY_PARAMS } from 'configs/actionTypes';

export const updateQueryParams = queryParams => ({
  type: UPDATE_QUERY_PARAMS,
  queryParams
});
