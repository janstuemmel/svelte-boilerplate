export const login = async (email, password) => {
  return new Promise(res => {

    if (email == 'foo' && password == 'bar') {
      return res({ error: false, status: 200, token: 'baz' })
    }

    res({ error: true, status: 401, message: 'Unauthorized' })
  })
}