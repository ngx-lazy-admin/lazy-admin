export const random = (len: number) => {
  return Base64.encode(Math.floor(Math.random() * 1000000000).toString())
}