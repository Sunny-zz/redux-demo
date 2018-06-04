export const getCurrentComments = (comments, id) => {
  const currnetComments = comments.filter(t => t.postId.toString() === id)
  return currnetComments
}
