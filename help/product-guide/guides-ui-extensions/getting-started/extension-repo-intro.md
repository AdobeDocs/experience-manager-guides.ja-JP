---
title: 拡張機能リポジトリの概要
description: AEM Guides拡張機能パッケージディレクトリ構造
role: User, Admin
exl-id: 99a00b3e-a5c9-41d8-a73d-8690d587277e
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '110'
ht-degree: 0%

---

# AEM Guides拡張機能パッケージディレクトリ構造

```text
├── src
│   ├── **/*{js,ts}
│   ├── index.ts
├── dist
│   ├── guides-extension.js
│   ├── guides-extension.umd.cjs
│   ├── build.css
├── node_modules
├── package.json
├── package-lock.json 
└── .gitignore
└── buildCSS.mjs // for creating tailwind classes
└── vite.config.js // config for specifying TS and javascript build options
└── taliwind.config.js // config for tailwind we can add custom config for a design system here
├── jsons // jsons for the aem app
│   ├── context_menus // jsons for the context menus
│   ├── review_app // jsons for the review app
│   ├── xmleditor // jsons for xmleditor
```

## /src

```text
├── src
│   ├── **/*{js,ts}
│   ├── index.ts
```

ソースディレクトリには、拡張機能の typescript ファイルまたは Javascript ファイルが含まれます。 index.ts ファイルは、拡張機能のエントリポイントです。 すべてのコンポーネントをここに読み込み、単一のオブジェクトとして書き出すことができます。 このオブジェクトは、拡張機能でコンポーネントのレンダリングに使用されます。

### /dist

これが最終的なビルドディレクトリです。 これには、AEMにコピーする必要がある最終的な JS と CSS が含まれています

```test
├── dist
│   ├── gudies-extension.js // you can either choose es module (this one) or .cjs(other one) file
│   ├── gudies-extension.umd.cjs
│   ├── build.css // this is your tailwind css output
```

## /jsons

このディレクトリには、様々なビューの JSON が含まれています。 これらの JSON を使用してターゲットを識別し、ビューをカスタマイズできます。

```text
├── jsons // jsons for the aem app
│   ├── context_menus // jsons for the context menus
│   ├── review_app // jsons for the review app
│   ├── xmleditor // jsons for xmleditor
```
