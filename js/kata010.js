//============ [7kyu] Mumbling ==============//
function accum(s) {
	let strArr = s.split('')
  return strArr.map((letter, i) => {
    for(let x = 0; x < i; x++){
        letter+=letter.toLowerCase()
        letter[0] = letter[0].toUpperCase()
    }
  }).join('-')
}

console.log(accum("ZpglnRxqenU"))