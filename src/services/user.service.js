export class UserService {
  constructor(request) {
    this.request = request
  }
  // 登录接口
  async login(username, password) {
    return this.request.post('/api/member/login', {
      username,
      password
    })
  }
}