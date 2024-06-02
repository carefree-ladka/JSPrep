const obj1 = {
  a: 1,
  b: 2,
  c: 4
}

const obj2 = {
  a: 1,
  b: 2,
  c: 4
}

const obj3 = {
  e: 2,
}

const addKeys = (...objs) => {
  return objs?.reduce((acc, curr) => {
    for (const key in curr) {
      if (!acc[key]) acc[key] = 0
      acc[key] += curr[key]
    }
    return acc
  }, {})
}

console.log(addKeys(obj1, obj2, obj3)); //{ a: 2, b: 4, c: 8, e: 2 }
