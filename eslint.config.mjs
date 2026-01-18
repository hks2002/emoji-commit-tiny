/******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                     *
 * @CreatedDate           : 2026-01-18 12:41:42                               *
 * @LastEditors           : Robert Huang<56649783@qq.com>                     *
 * @LastEditDate          : 2026-01-18 12:41:42                               *
 * @FilePath              : emoji-commit-tiny/eslint.config.js                *
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { 
      globals: { 
        ...globals.node,
        ...globals.browser
      }
    }
  },
  {
    files: ['**/test/**/*.{js,mjs,cjs}'],
    languageOptions: { 
      globals: { 
        ...globals.mocha
      }
    }
  }
])