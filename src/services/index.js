import request from '@/utils/request'
import { TestService } from './test.service'
import { UserService } from './user.service'

const RequestApi = {
  test: new TestService(request),
  user: new UserService(request)
}

export default RequestApi