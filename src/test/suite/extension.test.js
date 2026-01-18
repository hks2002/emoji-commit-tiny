/******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                     *
 * @CreatedDate           : 2023-02-04 20:41:53                               *
 * @LastEditors           : Robert Huang<56649783@qq.com>                     *
 * @LastEditDate          : 2023-02-05 23:29:48                               *
 * @FilePath              : emoji-commit-tiny/src/test/suite/extension.test.js*
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

const assert = require('assert');
const vscode = require('vscode');
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Sample test', () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});