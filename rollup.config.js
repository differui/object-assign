import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/index.js',
  dest: 'dest/bundle.js',
  format: 'cjs',
  plugins: [
    buble()
  ]
}
