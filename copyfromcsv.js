import { appendFileSync } from 'fs';
import { readFileSync } from 'fs';

const readTextFile = async () => {
  let t1 = performance.now()
  const File = await readFileSync('demoData.txt', 'utf-8')
  let arr = File.split('|')
  let modified = []
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    // arr[i] = `'${arr[i]}'`
    if (i % 10 === 0) {
      modified.push([...temp])
      temp = []
      temp.push(arr[i].replace('\x00\r\n', ' '))
    } else {
      temp.push(arr[i])
    }
  }
  modified.shift()
  modified.forEach(el => {
    try {
      const csv=`${el[0]},${el[1]},${el[2]},${el[3]},${el[4]},${el[5]},${el[6]},${el[7]},${el[8]},${el[9]}`
      appendFileSync("./demo.csv",csv)
    } catch (error) {
      console.log(error);
    }  
  })
  let t2 = performance.now()
  console.log(`Time Taken: ${(t2 - t1) / 1000} seconds`) 
}

const test = async () => {
  try {
    console.log(`Started`)
    await readTextFile()
  } catch (error) {
    console.log(error)
  }
}
test()
