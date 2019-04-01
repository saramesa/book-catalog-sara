export const onAuthenticate = payload => {
console.log('payload ', payload)
  if (payload.email === 'Test' && payload.password === '123') {
    return true
  }
  return false
};