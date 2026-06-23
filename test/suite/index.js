/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2023-02-04 20:42:10                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-06-23 19:23:27                                *
 * @FilePath              : emoji-commit-tiny/test/suite/index.js              *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/
import FastGlob from 'fast-glob'
import Mocha from 'mocha'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function run() {
  const mocha = new Mocha({
    ui: 'tdd',
    color: true,
  })

  const testsRoot = resolve(__dirname, '..')

  try {
    const files = await FastGlob('**/*.test.js', { cwd: testsRoot })

    files.forEach((f) => {
      mocha.addFile(resolve(testsRoot, f))
    })

    await new Promise((res, rej) => {
      mocha.run((failures) => {
        if (failures > 0) {
          rej(new Error(`${failures} tests failed.`))
        } else {
          res()
        }
      })
    })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { run }
