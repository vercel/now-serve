import fs from 'fs-extra'
import path from 'path'
import { spawn } from 'child_process'
import { walk } from 'walk'

export function exists (path) {
  try {
    fs.statSync(path)
  } catch (err) {
    return false
  }

  return true
}

export function injectPackage (tmpDir, defaults) {
  const pkgPath = path.join(tmpDir, 'package.json')

  fs.writeJSON(pkgPath, defaults, err => {
    if (err) throw err
    exports.deploy(tmpDir)
  })
}

export function deploy (dir) {
  let oldCwd = process.cwd()
  process.chdir(dir)

  const now = spawn('now', [], {
    stdio: 'inherit'
  })

  now.on('exit', () => {
    process.chdir(oldCwd)
    //exports.cleanup(dir)
  })

  process.on('SIGINT', () => {
    now.kill('SIGINT')
    //exports.cleanup(dir)
  })
}

export function cleanup (dir) {
  fs.remove(dir, err => {
    if (err) throw err
    process.exit()
  })
}

export function copyContents (content, tmp, defaults) {
  const walker = walk(content, {
    filters: [
      'node_modules'
    ]
  })

  walker.on('file', (root, fileStats, next) => {
    const file = path.join(root, fileStats.name),
          target = path.join(tmp + '/content', path.relative(content, file))

    fs.copy(file, target, err => {
      if (err) throw err
      next()
    })
  })

  walker.on('errors', (root, nodeStatsArray, next) => {
    console.error(`Not able to copy file: ${nodeStatsArray}`)
    next()
  })

  walker.on('end', () => exports.injectPackage(tmp, defaults))
}
