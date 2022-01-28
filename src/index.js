module.exports = function check(str, bracketsConfig) {
  const pairs = new Map(bracketsConfig)
  let arr = []
  const a = () => arr.length === 0
  for (let char of str) {
    if (pairs.has(char) && pairs.get(char) !== char) {
      arr.push(char)
    } 
    else {
      let top = arr[arr.length - 1]
      if (pairs.get(top) === char) {
        arr.pop()
      } 
      else {
        arr.push(char)
      }
    }
  }
  return a()
}