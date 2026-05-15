---
title: 拡張機能リポジトリの概要
description: AEM Guides拡張機能パッケージディレクトリ構造
role: User, Admin
exl-id: 99a00b3e-a5c9-41d8-a73d-8690d587277e
TQID: https://experienceleague.adobe.com/REfq-LVYahMiO0avNtO7aOsXeJvkC9Eqo0stpiX1Qgc
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 110
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

ソースディレクトリには、拡張機能のtypescriptまたはjavascript ファイルが含まれます。 index.ts ファイルは、拡張機能のエントリポイントです。 ここにすべてのコンポーネントを読み込み、1つのオブジェクトとして書き出すことができます。 このオブジェクトは、拡張機能でコンポーネントのレンダリングに使用されます。

### /dist

これが最後のビルドディレクトリです。 これには、AEMにコピーする必要がある最終的なJSとCSSが含まれています

```test
├── dist
│   ├── gudies-extension.js // you can either choose es module (this one) or .cjs(other one) file
│   ├── gudies-extension.umd.cjs
│   ├── build.css // this is your tailwind css output
```

## /jsons

このディレクトリには、様々なビューのJSONが含まれています。 これらのJSONを使用して、ターゲットを特定し、ビューをカスタマイズできます。

```text
├── jsons // jsons for the aem app
│   ├── context_menus // jsons for the context menus
│   ├── review_app // jsons for the review app
│   ├── xmleditor // jsons for xmleditor
```
