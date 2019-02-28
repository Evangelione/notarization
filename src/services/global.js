import request from '@/common/request';
//
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
  return request('http://118.31.46.146:8080/api/category', {
    method: 'GET',
    credentials: 'omit',
  });
}

export function fetchArticle(id) {
  return request(`http://118.31.46.146:8080/api/article?articleId=${id}`, {
    method: 'GET',
    credentials: 'omit',
  });
}
