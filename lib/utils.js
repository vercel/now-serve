import fs from 'fs-extra'

export function exists (path) {
  try {
    fs.statSync(path)
  } catch (err) {
    return false
  }

  return true
}
