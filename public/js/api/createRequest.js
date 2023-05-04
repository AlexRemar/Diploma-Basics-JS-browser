/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {url, data, method, callback}) => {
    const {url, data, method, callback} = options; 
    const requestUrl = new URL('https://www.npmjs.com/package/express');
    const request = new XMLHttpRequest;
    request.open(method, requestUrl);

    for (const key in data) {   
  if (method === 'GET'){
      requestUrl.searchParams.set(key, data[key]);
      request.send();
    }
  if(method !== 'GET'){
    formData = new FormData;
    formData.append(key, data[key]);
    request.send(formData);
  }
    request.responseType = 'json';
  }


    request.addEventListener('readystatechange', function() {
        if (this.readyState !== this.DONE)  
          return;
              
        if (this.status === 200) { 
          callback(null, this.response);
        } else if (this.status) {
          callback({ status: this.status, statusText: this.statusText });
        } else {
          callback({ status: 0, statusText: 'Нет связи с сервером' });      
        }
      });
    };



