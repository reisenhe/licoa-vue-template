import Mock from 'mockjs'

export default () => {
  Mock.mock(/\/test\/test/, () => ({
    data: 'page test',
    error: 0
  }))
  Mock.mock(/\/test\/t2/, () => ({
    data: 'page test2',
    error: 0
  }))
}