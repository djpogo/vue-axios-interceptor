import Vue from 'vue';
import axios from 'axios';

axios.interceptors.request.use(
  (request) => {
    // eslint-disable-next-line no-param-reassign
    request.config = {
      showToast: false, // may be overwritten in next line
      ...(request.config ?? {}),
      start: Date.now(),
    };

    if (request.config.showToast) {
      // eslint-disable-next-line no-param-reassign
      request.config.requestToastId = Vue.$toast(
        request.config.requestToast.title,
      );
    }

    return request;
  },
);

axios.interceptors.response.use(
  (response) => {
    const now = Date.now();
    const request = response.config;
    console.info(`Api Call ${request.url} took ${now - request.config.start}ms`);

    if (request.config.requestToastId) {
      Vue.$toast.dismiss(request.config.requestToastId);
    }

    if (request.config.showToast && request.config.responseToast) {
      Vue.$toast(request.config.responseToast.title);
    }
    return response;
  },
  (error) => Promise.reject(error),
);

export default axios;
