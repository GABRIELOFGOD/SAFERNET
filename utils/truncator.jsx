export const wrap = (body) => {
    if(body.length < 200) return body
    return(body.substring(0, 200)+'...')
  }