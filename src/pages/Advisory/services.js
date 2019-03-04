import request from '@/common/request';
import { pageSize } from '@/common/constants';

export function fetchAdvisoryList(pageNo) {
  return request(`http://118.31.46.146:8080/api/guestbook/list?pageNo=${pageNo}&pageSize=${pageSize}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function postAdvisory(value) {
  let formData = new FormData();
  formData.append('content', value);
  return request(`http://118.31.46.146:8080/api/guestbook`, {
    method: 'POST',
    credentials: 'omit',
    body: formData,
  });
}
