const URL_API = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body: any) {
  return {
    url: `${URL_API}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: any) {
  return {
    url: `${URL_API}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function USER_GET(token: any) {
  return {
    url: `${URL_API}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function USER_POST(body: any) {
  return {
    url: `${URL_API}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData: any, token: any) {
  return {
    url: `${URL_API}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }: any) {
  return {
    url: `${URL_API}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
    },
  };
}

export function PHOTO_GET(id: string) {
  return {
    url: `${URL_API}/api/photo/${id}`,
    options: {
      method: 'GET',
    },
  };
}

export function COMMENT_POST(id: string, body: any) {
  return {
    url: `${URL_API}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_DELETE(id: string) {
  return {
    url: `${URL_API}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    },
  };
}

export function FORGOT_PASSWORD(body: any) {
  return {
    url: `${URL_API}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function RESET_PASSWORD(body: any) {
  return {
    url: `${URL_API}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_STATS() {
  return {
    url: `${URL_API}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    },
  };
}
