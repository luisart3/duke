# DUKE — Modern & Minimal Hero 

![Preview](./src/assets/preview.png)

#

- Este repositorio contiene la implementación técnica de una interfaz de alta fidelidad, traduciendo un diseño conceptual de Figma Community a un entorno funcional utilizando tecnologías modernas de frontend.
- ✨ Modern & Minimal Hero Layouts
- 🎨 Clean Landing Page UI
- 🚀 Figma to Frontend: Hero Sections

## 🛠️ Tecnologías utilizadas
- Vite
- Vue
- TypeScript
- TailwindCSS
- Figma Community (diseño base)


## 🙌 Créditos
- **Diseño original:** [dsingr](https://www.figma.com/@dsingr) en Figma Community  
- **Archivo de diseño:** [Ver en Figma](https://www.figma.com/community/file/1613865615655687921/modern-website-ui-design-clean-simple-web-layout-figma-template)  
- **Implementación frontend:** Luis Arteaga(este repositorio)


```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
