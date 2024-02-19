export const wrap = (body) => {
    if(body.length < 200) return body
    return(body.substring(0, 200)+'...')
}

export const titleTrunc = (title) => {
  if(title.length < 50) return title
  return(title.substring(0, 50)+'...')
}