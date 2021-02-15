import Mock from 'mockjs'

export default () => {
  Mock.mock(/\/member\/login/, (options) => ({
    error: 0,
    msg: `登录成功`,
    body: JSON.parse(options.body)
  }))
}