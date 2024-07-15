---
title: Jui フレームワーク
description: Jui フレームワークについて
role: User, Admin
exl-id: c193cf90-5916-4d8c-88f1-be5014beca1c
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '265'
ht-degree: 1%

---

# Jui フレームワーク

拡張機能の書き方を学ぶ前に、フレームワークのアーキテクチャを理解します。
効果的に拡張できるように。

## はじめに

JUI は、React およびAdobe React Spectrum コンポーネント上の MVC フレームワークです。 JUI は JSON ユーザーインターフェイスです。 複数の Git リポジトリで構成されています。

JUI-Core は、JSON 設定を動作する React コンポーネントに変換し、関連するコントローラクラスインスタンスとリンクするためのすべてのロジックを備えたコアライブラリです。
JUI-React-Spectrum  ライブラリには、Adobe React Spectrum コンポーネントのラッパーウィジェットがあります

## JUI コアデザイン

### MVC UI デザイン

![JUI MVC フロー ](./imgs/jui-mvc-flow.png)

### ウィジェット

- 一意の ID を持ちます。
- 表示する個々の JSON ファイルを持ちます。
- 独自または共有のコントローラを持つことができます。
- 親モデルまたは新規モデルを使用できます。
- UI 要素（React コンポーネント）を持つことができます
- 他のウィジェットを使用できる
- アプリはウィジェットです

![JUI ウィジェット ](./imgs/jui-widget.png)

### 要素

- は、HTML/React コンポーネントです。
- モデルがなく、親ウィジェットモデルを使用します。

### イベント ハンドラー

- Next （eventOpts）
   - 一部のオプションでイベントをトリガーするには
- 購読（コールバック）
   - 設定でイベントが発生したという通知を取得

### アプリ/グローバルモデル

- Next （新しい値）
   - 新しい値を公開するには
- 購読（コールバック）
   - 変更された値の通知を取得するには
   - 初回の古い値の取得
- GetValue （）
   - 現在の値を取得

### コントローラー

- Controller クラスから拡張する必要があります
- API
- CreateModel
   - 子ウィジェットを個別のモデルとして作成するには
- InitEventHandler
   - 子ウィジェットに個別のイベントハンドラーを作成するには
- RegisterCommand
   - ローカル、親、またはアプリケーションのイベントを登録するには
- Next （eventName, eventHandler）
   - 子ウィジェットイベントハンドラー、親ウィジェットイベントハンドラーまたはアプリイベントハンドラーのトリガーイベントへ
- Subscribe （callback, eventHandler）
- SubscribeAppModel （callback）

### サンプルアプリデザイン

![ サンプルアプリ ](./imgs/jui-sample-app.png)
