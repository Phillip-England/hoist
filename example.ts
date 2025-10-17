import path from 'path';
import { VirtualAsset } from "./src/VirtualAsset";
import { VirtualFS } from './src/VirtualFS';

let newFs = await VirtualFS.overwrite(path.join(process.cwd(), 'cli'),{
  [path.join(process.cwd(), 'cli')]: VirtualAsset.rootDir(),
  [path.join(process.cwd(), 'cli', 'index.html')]: VirtualAsset.file(`<h1>Hello, World!</h1>`)
})
let newText = newFs.read(path.join(process.cwd(), 'cli', 'index.html'))
console.log(newText)

let loadedFs = await VirtualFS.load(path.join(process.cwd(), 'cli'))
let loadedText = loadedFs.read(path.join(process.cwd(), 'cli', 'index.html'))
console.log(loadedText)

loadedFs.write(path.join(process.cwd(), 'cli', 'index.html'), `<h1>Hello, Nobody!</h1>`)
await loadedFs.sync()
console.log(loadedFs.read(path.join(process.cwd(), 'cli', 'index.html')))
