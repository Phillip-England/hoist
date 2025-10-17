import { VirtualAsset } from "./src/VirtualAsset";
import { VirtualFS } from './src/VirtualFS';

let newFs = await VirtualFS.overwrite('./cli',{
  './cli': VirtualAsset.rootDir(),
  './cli/index.html': VirtualAsset.file(`<h1>Hello, World!</h1>`)
})
let newText = newFs.read('./cli/index.html')
console.log(newText)

let loadedFs = await VirtualFS.load('./cli')
let loadedText = loadedFs.read('./cli/index.html')
console.log(loadedText)

loadedFs.write('./cli/index.html', `<h1>Hello, Nobody!</h1>`)
await loadedFs.sync()
console.log(loadedFs.read('./cli/index.html'))
