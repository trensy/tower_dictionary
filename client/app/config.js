const _dev = {
  apiUrl: 'http://127.0.0.1:8080',
};

const _prod = {
  apiUrl: 'http://127.0.0.1:8080',
};

let config = _prod;
if (__DEV__) {
  let config = _dev;
}

export default config;
