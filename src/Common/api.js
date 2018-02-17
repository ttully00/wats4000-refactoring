// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: `//api.openweathermap.org/data/2.5/`
  });

  API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = '846f8350d823aef09f79320170feec3c';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
  }); 