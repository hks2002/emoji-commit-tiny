/******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                     *
 * @CreatedDate           : 2023-02-04 10:01:21                               *
 * @LastEditors           : Robert Huang<56649783@qq.com>                     *
 * @LastEditDate          : 2026-01-18 19:27:20                               *
 * @FilePath              : emoji-commit-tiny/src/extension.js                *
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import packageJson from '../package.json'
import { Logger } from './logger'
import { emojiCommit } from './utils'

const config = vscode.workspace.getConfiguration(packageJson.name)
// console.debug(config)

const logger = new Logger()
logger.setOutputLevel(config.get('logLevel', 'INFO'))
logger.info(`locale: ${vscode.env.language}`)

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(`Congratulations, "${packageJson.displayName}" is now active!`)
  logger.info(`"${packageJson.displayName}" is now active!`)

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(`${packageJson.name}.emojiCommit`, emojiCommit)

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
export function deactivate() {}