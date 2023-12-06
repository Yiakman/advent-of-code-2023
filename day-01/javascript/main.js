import { data } from '../data.json'

const testArray = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
]

const spelledDigits = {
'oneight':'1ight','threeight':'3ight','fiveight':'ight',
'sevenine':'7ine','eightwo':'8wo','nineight':'9ight',
'one':1,'two':2,'three':3,'four':4,
'five':5,'six':6,'seven':7,'eight':8,'nine':9,
'zero':0,
}

const extractDigits = str=>{
  const digits = str.replace(/[a-z]/g,'')
  console.log(digits)
  const firstDigit = digits.at(0)
  const lastDigit = digits.at(-1)
  
  let matches = s => Object.keys(spelledDigits)
  .map(d=>({ v:spelledDigits[d], index: s.indexOf(d), k:d }))
  .filter(m=>m.index!==-1)
  .sort((a,b)=>a.index - b.index)

  const prevStr = str.substring(0, str.indexOf(firstDigit))
  const postStr = str.slice(str.indexOf(lastDigit)+1)
  const firstMatch = matches(prevStr||'').at(0)
  const postMatch = matches(postStr||'').at(-1)
  console.log(postMatch)
  return String(firstMatch?.v ?? firstDigit) + String(postMatch?.v ?? lastDigit)
}

const result = data
.map(extractDigits)/* 
.map(n=>({ first: n[0], last:n[n.length -1] }))
.map(n=>Number(n.first+n.last))
.reduce((p,c)=>(p+c),0)
 */
console.log(result)


console.log(extractDigits('sgeightwo3'),'sgeightwo3')
