import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'warn', // Avisa si falta href en <Link> o usas <a> en lugar de <Link>
      'react/jsx-key': 'error', // Previene listas sin key
      'react/react-in-jsx-scope': 'off', // No es necesario importar React en Next.js
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }] // Ignora variables que comienzan con "_"
    }
  }
];

export default eslintConfig;
