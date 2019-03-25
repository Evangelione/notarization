import request from '@/common/request';

export function fetchJS(year, bh, office, area) {
  return request(`http://118.31.46.146:8080/api/gzsjs?year=${year}&bh=${bh}&office=${office}&areaId=${area}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchSD(year, bh, office, area) {
  return request(`http://118.31.46.146:8080/api/gzssd?year=${year}&bh=${bh}&office=${office}&areaId=${area}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchNotarizationList() {
  return request(`http://118.31.46.146:8080/api/office/list/select`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchNotarizationList2(area) {
  return request(`http://118.31.46.146:8080/api/office/area/officeList?areaId=${area}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchAreaList() {
  return request(`http://118.31.46.146:8080/api/office/area`, {
    method: 'GET',
    credentials: 'omit',
  });
}
