/*****************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                    *
 * @CreatedDate           : 2023-02-04 20:42:10                              *
 * @LastEditors           : Robert Huang<56649783@qq.com>                    *
 * @LastEditDate          : 2026-01-18 14:53:57                              *
 * @FilePath              : emoji-commit-tiny/src/test/suite/index.js        *
 * @CopyRight             : MerBleueAviation                                 *
 ****************************************************************************/


const FastGlob = require('fast-glob');
const Mocha = require('mocha');
const path = require('path');

async function run() {
  const mocha = new Mocha({
    ui: 'tdd',
    color: true
  });

  const testsRoot = path.resolve(__dirname, '..');

  try {
    const files = await FastGlob('**/*.test.js', { cwd: testsRoot });

    files.forEach((f) => {
      mocha.addFile(path.resolve(testsRoot, f));
    });

    await new Promise((resolve, reject) => {
      mocha.run((failures) => {
        if (failures > 0) {
          reject(new Error(`${failures} tests failed.`));
        } else {
          resolve();
        }
      });
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = { run };