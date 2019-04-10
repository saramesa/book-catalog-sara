export const onAuthenticate = payload => {
  if (payload.email === 'Test' && payload.password === '123') {
    return true
  }
  return false
};