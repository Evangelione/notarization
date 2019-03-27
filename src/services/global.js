import request from '@/common/request';
import { pageSize, api } from '@/common/constants';

// export function inquireCascadeOptions({ module, district_name }) {
//   let formData = new FormData()
//   formData.append('district_name', district_name)
//   return request(`${IP}/index/${module}/district`, {
//     method: 'POST',
//     body: formData,
//   })
// }
//
// export function inquireCascadeOptionsAll({ module, province, city }) {
//   let formData = new FormData()
//   formData.append('province', province)
//   formData.append('city', city)
//   return request(`${IP}/index/${module}/district-all`, {
//     method: 'POST',
//     body: formData,
//   })
// }
//
// export function login({ account, pwd, platform_id, remember }) {
//   let formData = new FormData()
//   formData.append('account', account)
//   formData.append('pwd', pwd)
//   formData.append('platform_id', platform_id)
//   formData.append('remember', remember)
//   return request(`${IP}/index/login/login`, {
//     method: 'POST',
//     body: formData,
//   })
// }

export function fetchNavBar() {
  return request(`${api}/api/category`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchArticle(id) {
  return request(`${api}/api/article?articleId=${id}`, {
    method: 'GET',
    credentials: 'omit',
  });
}


export function fetchDynamicList({ id, pageNo }) {
  return request(`${api}/api/article/list?categoryId=${id}&pageNo=${pageNo}&pageSize=${pageSize}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function searchList({ keyword, pageNo }) {
  return request(`${api}/api/search?keyword=${keyword}&pageNo=${pageNo}&pageSize=${pageSize}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchCarouselMap() {
  return request(`${api}/api/image/article`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchNavBarList() {
  return request(`${api}/api/three/article`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchMiddleBar() {
  return request(`${api}/api/service/category`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchFriendLink() {
  return request(`${api}/api/links`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchOutLink() {
  return request(`${api}/api/outlinks`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchMainList() {
  return request(`${api}/api/mainList`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchOfficeList() {
  return request(`${api}/api/office/list`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchOfficeInfo(id) {
  return request(`${api}/api/office?officeId=${id}`, {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchQK(articleId) {
  return request(`${api}/api/journal/article?articleId=${articleId}`, {
    method: 'GET',
    credentials: 'omit',
  });
}
