function type(value) {
    if (value instanceof Array) return 'array'
    if (value instanceof Date) return 'date'
    if (value instanceof Object) return 'object'
    if (value === null) return 'null'
    else return typeof value
  }