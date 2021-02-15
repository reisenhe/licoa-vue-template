export class UserService {
  constructor(request) {
    this.request = request
  }
  // 测试接口
  async login(username, password) {
    return this.request.post('/api/member/login', {
      username,
      password
    })
  }
}