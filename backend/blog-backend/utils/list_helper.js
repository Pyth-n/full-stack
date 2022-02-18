const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => sum + item.likes

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  let i = 0
  const reducer = (sum, item, index) => {
    if (item.likes > sum) {
      sum = item.likes
      i = index
    }
    return sum
  }
  blogs.reduce(reducer, 0)
  return blogs[i]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}