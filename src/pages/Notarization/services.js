import request from '@/common/request';

export function fetchJS(year, bh, office) {
  return request(`http://118.31.46.146:8080/api/gzsjs?year=${year}&bh=${bh}&office=${office}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchSD(year, bh, office) {
  return request(`http://118.31.46.146:8080/api/gzssd?year=${year}&bh=${bh}&office=${office}`, {
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
