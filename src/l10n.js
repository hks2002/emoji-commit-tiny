/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2026-06-23 16:38:46                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-06-23 16:39:26                                *
 * @FilePath              : emoji-commit-tiny/src/l10n.js                      *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/
import * as vscode from 'vscode'
import defaultL10n from '../l10n/bundle.l10n.json'

const locale = vscode.env.language

const getL10n = (key) => {
  console.info('xxxx', locale)
  if (locale === 'en') {
    return defaultL10n[key] || key
  } else {
    return vscode.l10n.t(key)
  }
}
export { getL10n }
