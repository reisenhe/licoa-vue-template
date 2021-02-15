import Mock from 'mockjs'

export default () => {
  Mock.mock(/\/test/, () => ({
    data: 'test page',
    error: 0
  }))
}