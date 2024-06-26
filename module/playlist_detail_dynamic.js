// 歌单动态信息

module.exports = (query, request) => {
  const data = {
    id: query.id,
    n: 100000,
    s: query.s || 8,
  }
  return request(
    'POST',
    `https://music.163.com/api/playlist/detail/dynamic`,
    data,
    {
      crypto: 'api',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
