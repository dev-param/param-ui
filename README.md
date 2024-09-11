# Param-UI

### Nuxt/UI Project

Welcome to the Param-UI project! This project is built using Nuxt.js and aims to provide a sleek and modern UI with some cool features.

## Features

- **Ripple Effect on Button**: Adds a visually appealing ripple effect when buttons are clicked.
- **Floating Label on Input**: Enhances input fields with floating labels for better UX.
- **OTP Input**: A user-friendly OTP input component.

## Installation

To get started with this project, follow these steps:

1. **First Install Nuxt-UI**:
    ```bash
    npx nuxi@latest module add ui
    ```

2. **Install dependencies**:
    ```bash
        npm i param-ui
    ```
    OR 

    Just add    
    ```json
     "dependencies": {
    ...
    "param-ui": "0.0.3", 
    ...
    }
    ``` 



    Make Sure Choose latest Version 

3. **Add in nuxt.config.ts **:
    ```js
    export default defineNuxtConfig({
        ...
        modules: ['@nuxt/ui', 'param-ui'],
    });

    ```

4. **Run the development server**:
    ```bash
    npm install && npm run dev
    ```

## Usage

### Ripple Effect on Button

To use the ripple effect on a button:
```html
<PButton>Click me</PButton>
