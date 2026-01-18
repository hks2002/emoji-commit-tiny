/*****************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                    *
 * @CreatedDate           : 2026-01-18 13:16:11                              *
 * @LastEditors           : Robert Huang<56649783@qq.com>                    *
 * @LastEditDate          : 2026-01-18 13:16:47                              *
 * @FilePath              : emoji-commit-tiny/esbuild.config.js              *
 * @CopyRight             : MerBleueAviation                                 *
 ****************************************************************************/


const esbuild = require('esbuild');

const options = {
  entryPoints: ['./src/extension.js'],
  bundle: true,
  outfile: './dist/extension.js',
  target: 'node14',
  format: 'cjs',
  platform: 'node',
  sourcemap: false,
  external: ['vscode']
};

if (process.argv.includes('--watch')) {
  esbuild.context(options).then(context => context.watch());
} else {
  esbuild.build(options);
}