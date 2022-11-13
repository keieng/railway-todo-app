module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'standard',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: { 'react/jsx-uses-react': 'off', 'react/react-in-jsx-scope': 'off' },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
