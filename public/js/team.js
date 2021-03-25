'use strict'

fetch('api/v0/team')
.then((res) => {
  if (!res.ok) throw new Error('Not OK!')

  return res.json()
})
.then((team) => {
  //will fill out when im not tired
})