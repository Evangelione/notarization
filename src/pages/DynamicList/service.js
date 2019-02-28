import request from '@/common/request';
import { pageSize } from '@/common/constants';

export function fetchDynamicList({ id, pageNo }) {
  return request(`http://118.31.46.146:8080/api/article/list?categoryId=${id}&pageNo=${pageNo}&pageSize=${pageSize}`, {
    method: 'GET',
    credentials: 'omit',
  });
}
