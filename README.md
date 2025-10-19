# hoist
A virtual file system for bun.

## Installation
bun add github:phillip-england/hoist#v0.0.6

## Usage
```ts
let newFs = await VirtualFS.create('./cli',{
  './cli': VirtualAsset.rootDir(),
  './cli/index.html': VirtualAsset.file(`<h1>Hello, World!</h1>`)
})
let newText = newFs.read('./cli/index.html')

let loadedFs = await VirtualFS.load('./cli')
let loadedText = loadedFs.read('./cli/index.html')

loadedFs.write('./cli/index.html', `<h1>Hello, Nobody!</h1>`)
await loadedFs.sync()
```