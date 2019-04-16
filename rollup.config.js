/* eslint-disable @typescript-eslint/camelcase */
import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    compiler({
      compilation_level: 'SIMPLE', // SIMPLE or ADVANCED
    }),
  ],
};
