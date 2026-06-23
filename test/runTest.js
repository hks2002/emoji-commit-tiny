/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2023-02-04 20:42:10                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-06-20 01:00:28                                *
 * @FilePath              : emoji-commit-tiny/src/test/runTest.js              *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { runTests } from '@vscode/test-electron'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = resolve(__dirname, '../../')

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = resolve(__dirname, './suite/index.js')

    // Download VS Code, unzip it and run the integration test
    await runTests({ extensionDevelopmentPath, extensionTestsPath })
  } catch {
    console.error('Failed to run tests')
    process.exit(1)
  }
}

main()
