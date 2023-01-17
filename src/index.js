
module.exports = function check(str, bracketsConfig) {
  let config = {}
  bracketsConfig.forEach(x => config[x[0]] = x[1])  
  let stack = []
  let res
  let resbtw = true
  let strArr = Array.from(str)
  strArr.forEach(x => {!Object.values(config).includes(x) ? stack.push(x) : !Object.keys(config).includes(x) ?  config[stack[stack.length - 1]] == x ? stack.pop() : resbtw = false : stack[stack.length -1] == x ? stack.pop() : stack.push(x)})
  resbtw? stack.length == 0 ? res = true : res = false : res = false
  return res
}
