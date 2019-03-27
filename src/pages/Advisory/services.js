import request from '@/common/request';
import { pageSize, api } from '@/common/constants';

export function fetchAdvisoryList(pageNo) {
  return request(`${api}/api/guestbook/list?pageNo=${pageNo}&pageSize=${pageSize}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function postAdvisory(value) {
  let formData = new FormData();
  formData.append('content', value);
  return request(`${api}/api/guestbook`, {
    method: 'POST',
    credentials: 'omit',
    body: formData,
  });
}

export function useful(id) {
  let formData = new FormData();
  formData.append('guestbookId', id);
  return request(`${api}/api/guestbook/zan`, {
    method: 'POST',
    credentials: 'omit',
    body: formData,
  });
}
