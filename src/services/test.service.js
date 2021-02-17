export class TestService {
  constructor(request) {
    this.request = request
  }
  // 测试接口
  async sendTest() {
    return this.request.post('/api/test/test')
  }
}