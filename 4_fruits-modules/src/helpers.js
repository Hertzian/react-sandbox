const choice = (items) => {
  const rand = Math.floor(Math.random() * items.length)
  return items[rand]
}

const remove = (items, item) => {
  const index = items.indexOf(item)
  const result = items.splice(index, 1)

  if (!result.length) return undefined
  return items.length
}

export { choice, remove }
