# 🚀 Deployment Instructions

## 📋 Prerequisites
-   **Node.js** (v18+ recommended)
-   **Git** installed and authenticated

## 🛠️ Setup

1.  **Install dependencies:**
    ```bash
    npm install
    # If issues arise:
    npm install --legacy-peer-deps
    ```

## 🚀 How to Deploy

To publish your site, simply run:

```bash
npm run deploy
```

### What happens under the hood?
This command automatically executes the following steps (defined in `package.json`):
1.  **Builds the project** (`predeploy` runs `npm run build`), creating an optimized `dist/` folder.
2.  **Deploys to GitHub** (`gh-pages` pushes the `dist/` folder to the `gh-pages` branch).

You **do not** need to run `npm run build` manually—it's handled for you! ✨
