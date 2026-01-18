/******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                     *
 * @CreatedDate           : 2023-02-05 18:48:09                               *
 * @LastEditors           : Robert Huang<56649783@qq.com>                     *
 * @LastEditDate          : 2026-01-18 14:44:49                               *
 * @FilePath              : emoji-commit-tiny/src/utils.js                    *
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

import i18next from 'i18next'
import * as vscode from 'vscode'
import packageJson from '../package.json'

// 点击小图标进入插件
const getGitExtension = () => {
  const vscodeGit = vscode.extensions.getExtension('vscode.git')
  const gitExtension = vscodeGit && vscodeGit.exports
  return gitExtension && gitExtension.getAPI(1)
}

// 生成提交信息
const genInput = (type, emoji, pos, message = '') => {
  switch (pos) {
    case 'prefix':
      return `${emoji}${type}: ${message}`
    case 'suffix':
      return `${type}: ${emoji}${message}`
    case 'middle':
      return `${type}${emoji}: ${message}`
    case 'none':
      return `${type}: ${message}`
    default:
      return `${type}: ${emoji}${message}`
  }
}

// emoji提交
const emojiCommit = (uri) => {
  const git = getGitExtension()
  if (!git) {
    vscode.window.showErrorMessage(i18next.t("Can't load git extension, please install it!"))
    return
  }

  const config = vscode.workspace.getConfiguration(packageJson.name)
  console.debug(config)

  const commitsOptions = []
  const emojiPreset = config.get('emojis', {})
  const position = config.get('position', 'suffix')

  for (const key in emojiPreset) {
    const label = `${emojiPreset[key]} ${key} ${i18next.t(key + '.description')}`
    const description = `[${i18next.t(key + '.title')}]`

    commitsOptions.push({
      type: key,
      emoji: emojiPreset[key],
      label: label,
      description: description
    })
  }
  const emojiAddition = config.get('additionalType', [])
  for (const emoji of emojiAddition) {
    commitsOptions.push({
      type: emoji.type,
      emoji: emoji.emoji,
      label: `${emoji.emoji} ${emoji.type} ${emoji.description}`,
      description: emoji.name
    })
  }
  console.debug(commitsOptions)

  // 显示选项列表，提示用户选择
  vscode.window.showQuickPick(commitsOptions).then((selected) => {
    if (selected) {
      vscode.commands.executeCommand('workbench.view.scm')
      if (uri) {
        const selectedRepository = git.repositories.find((repository) => {
          return repository.rootUri.path === uri.rootUri.path
        })
        if (selectedRepository) {
          selectedRepository.inputBox.value = genInput(selected.type, selected.emoji, position, '')
        }
      } else {
        for (const repo of git.repositories) {
          repo.inputBox.value = genInput(selected.type, selected.emoji, position, '')
        }
      }
    }
  })
}
export { getGitExtension, emojiCommit }