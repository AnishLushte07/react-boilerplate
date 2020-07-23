class SessionService {
  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  saveItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear() {
    localStorage.clear();
  }
}

const session = new SessionService();

export default session;
