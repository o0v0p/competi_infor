class Auth {
  static login(username, password) {
    if (username === 'admin' && password === 'admin') {
      window.location.href = 'index.html';
      return true;
    }
    return false;
  }
} 