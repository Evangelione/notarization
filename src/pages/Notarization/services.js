import request from '@/common/request';
import { api } from '@/common/constants';

export function fetchJS(year, bh, office, area) {
  return request(`${api}/api/gzsjs?year=${year}&bh=${bh}&office=${office}&areaId=${area}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchSD(year, bh, office, area) {
  return request(`${api}/api/gzssd?year=${year}&bh=${bh}&office=${office}&areaId=${area}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchNotarizationList() {
  return request(`${api}/api/office/list/select`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchNotarizationList2(area) {
  return request(`${api}/api/office/area/officeList?areaId=${area}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchAreaList(leibie) {
  return request(`${api}/api/office/area?leibie=${leibie}`, {
    method: 'GET',
    credentials: 'omit',
  });
}
