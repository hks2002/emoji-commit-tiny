/******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                     *
 * @CreatedDate           : 2023-02-04 20:42:10                               *
 * @LastEditors           : Robert Huang<56649783@qq.com>                     *
 * @LastEditDate          : 2023-02-05 23:29:39                               *
 * @FilePath              : emoji-commit-tiny/src/test/suite/index.ts         *
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

import glob from 'glob'
import Mocha from 'mocha'
import path from 'path'

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true
  })

  const testsRoot = path.resolve(__dirname, '..')

  return new Promise((c, e) => {
    glob('**/**.test.js', { cwd: testsRoot }, (err: unknown, files: string[]) => {
      if (err) {
        return e(err)
      }

      // Add files to the test suite
      files.forEach((f: string) => mocha.addFile(path.resolve(testsRoot, f)))

      try {
        // Run the mocha test
        mocha.run((failures: number) => {
          if (failures > 0) {
            e(new Error(`${failures} tests failed.`))
          } else {
            c()
          }
        })
      } catch (err) {
        console.error(err)
        e(err)
      }
    })
  })
}
