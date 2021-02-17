import Mock from 'mockjs'

export default () => {
  Mock.mock(/\/test\/test/, () => ({
    data: 'page test',
    error: 0
  }))
}