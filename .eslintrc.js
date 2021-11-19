module.exports = {
  parser: '@babel/eslint-parser',
  globals: {
    __PATH_PREFIX__: true
  },
  env: {
    browser: true,
    es2021: true
  },
  overrides: [
    {
      files: ['*.jsx']
    }
  ],
  extends: [
    'plugin:react/recommended',
    'react-app',
    'standard',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      presets: ['@babel/preset-react']
    },
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 0
  }
}
