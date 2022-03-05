/****************************************/

// 题目：
// 假设我们已有一个方法，可用来向服务器请求用户的基本数据，如下所示：
// 此方法的参数是一个数组 uidList，它可以通过批量接口向服务器请求多个用户的数据

const fetchUserList = uidList => {
  return fetch(
    `/user/get?uidlist=${encodeURIComponent(uidList.join('.'))}`
  ).then(res => {
    return res.json()
  })
}

// 现在，请你实现一个方法 fetchUser 来获取 **单个** 用户的基本数据
// 此方法应当返回一个 promise，并且将 100ms 以内的请求进行合并（即：100ms 内的所有调用，最终仅到服务端上查询一次）

const fetchUser = uid => {
  /** 从这里开始编写代码作答 ********/
  /** 答题区域结束  ***************/
}

fetch('001').then(data => console.log(data))
fetch('002').then(data => console.log(data))

/****************************************/

/****************************************/

// 题目：将 url 后的 query 参数解析成对象的形式
// 比如：这样的 url：'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
// 将被解析成：
// {
//    user: 'anonymous',
//    id: [123, 456],    // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//    city: '北京',       // 中文
//    enabled: true,     // 未指定值的 key 约定为 true
// }

function parseUrl(url) {
  /** 从这里开始编写代码作答 ********/
  let ans = {}
  let arr = url.split('?')[1].split('&')
  for (let item of arr) {
    var key, value
    let cur = item.split('=')
    key = cur[0]

    if (typeof value === 'number') {
      value = parseFloat(value)
    }

    value = cur[1]
    if (key in ans) {
      if (typeof ans[key] !== 'array') {
        ans[key] = [ans[key], value]
      } else {
        ans[key] = [...value]
      }
    } else {
      if (value === undefined) {
        ans[key] = true
      } else if (value.canBeConvert()) {
        //判断能否转为中文
        ans[key] = value.convert()
      } else {
        ans[key] = value
      }
    }
  }
  return ans

  /** 答题区域结束  ***************/
}

/****************************************/

const func = value => {
  let key
  const func2 = value2 => {
    console.log(key)
    key = value2
  }
  func2()
}

func()
