/*****************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                    *
 * @CreatedDate           : 2023-02-04 20:42:10                              *
 * @LastEditors           : Robert Huang<56649783@qq.com>                    *
 * @LastEditDate          : 2026-01-18 12:06:31                              *
 * @FilePath              : emoji-commit-tiny/src/test/runTest.js            *
 * @CopyRight             : MerBleueAviation                                 *
 ****************************************************************************/




const path = require('path');
const { runTests } = require('@vscode/test-electron');

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // Download VS Code, unzip it and run the integration test
    await runTests({ extensionDevelopmentPath, extensionTestsPath });
  } catch {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();