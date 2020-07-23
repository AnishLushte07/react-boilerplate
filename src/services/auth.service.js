import httpService from './http.service';

class AuthService {
  async authorize(userId, pass) {
    return httpService.post('/api/login', { userId, pass });
  }
}

const authService = new AuthService();

export default authService;
