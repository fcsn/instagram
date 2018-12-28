const _Fetch = (api, query = '', body) => {
  if (api.method === 'GET') {
    return _getFetch(api.url + query);
  }
  if (api.method === 'PUT') {
    return _putFetch(api.url + query, body);
  }
  if (api.method === 'POST') {
    return _postFetch(api.url + query, body);
  }
  if (api.method === 'DELETE') {
    return _deleteFetch(api.url + query, body);
  }
  return true;
};

const _getFetch = (url) => {
  const userAuth = sessionStorage.getItem('userAuth') ? JSON.parse(sessionStorage.getItem('userAuth')) : false;

  const token = userAuth ? userAuth.token : 'NOT_HAVE_TOKEN';
  const id = userAuth ? userAuth.uid : 'NOT_HAVE_ID';

  const options = {
    token,
    id,
  };

  // window IE에서 cache-control을 no-cache로 처리. 데이터 페칭 작업시 문제가 생기면 주석처리해보고 작업해보세요.
  // const agent = navigator.userAgent.toLowerCase();
  // if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf('msie') !== -1)) {
  //   options['Pragma'] = 'no-cache';
  // }

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: { ...options },
    })
      .then((res) => {
        if (res.status !== 200) {
          alert('서버 오류입니다.\n관리자에게 문의하세요.');
          return res.statusText;
        }
        return res.json();
      })
      .then((res) => { return JSON.parse(res); })
      .then((data) => {
        if (data.status === 200) {
          resolve(data.results);
        } else if (data.status === 1160) {
          alert('장시간 미사용으로 로그아웃 되었습니다.');
          sessionStorage.setItem('userAuth', '');
          window.location.pathname = '/login';
        } else if (data.status === 1106) {
          console.log(data);
          resolve(data);
        } else if (data.status === 1000) {
          console.log(data);
          resolve(data);
        } else if (data.status === 1120) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data);
        }
      })
      .catch((e) => {
        console.log(e);
        resolve(e);
      });
  });
};

const _putFetch = (url, body) => {
  const userAuth = sessionStorage.getItem('userAuth') ? JSON.parse(sessionStorage.getItem('userAuth')) : false;

  const token = userAuth ? userAuth.token : 'NOT_HAVE_TOKEN';
  const id = userAuth ? userAuth.uid : 'NOT_HAVE_ID';

  const options = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    token,
    id,
  };

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: { ...options },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status !== 200) {
          alert('서버 오류입니다.\n관리자에게 문의하세요.');
          resolve();
        }
        return res.json();
      })
      .then((res) => { return JSON.parse(res); })
      .then((data) => {
        if (data.status === 200) {
          resolve(data.results);
        } else if (data.status === 1160) {
          alert('장시간 미사용으로 로그아웃 되었습니다.');
          sessionStorage.setItem('userAuth', '');
          window.location.pathname = '/login';
        } else if (data.status === 1120) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data);
        }
      })
      .catch((e) => {
        console.log(e);
        resolve(e);
      });
  });
};

const _postFetch = (url, body) => {
  const userAuth = sessionStorage.getItem('userAuth') ? JSON.parse(sessionStorage.getItem('userAuth')) : false;

  const token = userAuth ? userAuth.token : 'NOT_HAVE_TOKEN';
  const id = userAuth ? userAuth.uid : 'NOT_HAVE_ID';

  const options = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    token,
    id,
  };

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: { ...options },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status !== 200) {
          alert('서버 오류입니다.\n관리자에게 문의하세요.');
          return res.statusText;
        }
        return res.json();
      })
      .then((res) => { return JSON.parse(res); })
      .then((data) => {
        if (data.status === 200) {
          resolve(data.results);
        } else if (data.status === 1160) {
          alert('장시간 미사용으로 로그아웃 되었습니다.');
          sessionStorage.setItem('userAuth', '');
          window.location.pathname = '/login';
        } else {
          console.log(data);
          resolve(data);
        }
      })
      .catch((e) => {
        console.log(e);
        resolve(e);
      });
  });
};

const _deleteFetch = (url, body) => {
  const userAuth = sessionStorage.getItem('userAuth') ? JSON.parse(sessionStorage.getItem('userAuth')) : false;

  const token = userAuth ? userAuth.token : 'NOT_HAVE_TOKEN';
  const id = userAuth ? userAuth.uid : 'NOT_HAVE_ID';

  const options = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    token,
    id,
  };

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: { ...options },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status !== 200) {
          alert('서버 오류입니다.\n관리자에게 문의하세요.');
          return res.statusText;
        }
        return res.json();
      })
      .then((res) => { JSON.parse(res); })
      .then((data) => {
        if (data.status === 200) {
          resolve(data.results);
        } else if (data.status === 1160) {
          alert('장시간 미사용으로 로그아웃 되었습니다.');
          sessionStorage.setItem('userAuth', '');
          window.location.pathname = '/login';
        } else {
          console.log(data);
          resolve(data);
        }
      })
      .catch((e) => {
        console.log(e);
        resolve(e);
      });
  });
};

export default _Fetch;
