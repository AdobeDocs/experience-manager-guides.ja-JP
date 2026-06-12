---
title: Jui フレームワーク
description: Jui フレームワークについて
role: User, Admin
exl-id: c193cf90-5916-4d8c-88f1-be5014beca1c
TQID: https://experienceleague.adobe.com/AQFEy2bHTDHXq6QH8KTBOEzUvtA3Hf2ojhxvD0dsI7o
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: c6d09140-3c91-45d3-b7ed-b681af752f43id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 249
ht-degree: 1%

---

# Jui フレームワーク

拡張機能の書き方を学ぶ前に、フレームワークのアーキテクチャについて理解します。
これを効果的に拡張するためです。

## はじめに

JUIは、ReactおよびAdobe React Spectrum コンポーネントをベースにしたMVC フレームワークです。 JUIはJSON ユーザーインターフェイスです。 複数のGit リポジトリで構成されています。

JUI-Coreは、JSON設定を動作するreact コンポーネントに変換し、関連するコントローラークラスインスタンスにリンクするためのすべてのロジックを備えたコアライブラリです。
JUI-React-Spectrum ライブラリには、Adobe React Spectrum コンポーネントのラッパーウィジェットがあります

## JUI コアデザイン

### MVC UI デザイン

![JUI MVC フロー](./imgs/jui-mvc-flow.png)

### ウィジェット

- 一意のIDを持つ。
- 表示する個々のJSON ファイルがあります。
- 独自または共有のコントローラを持つことができます。
- 親モデルまたは新しいモデルを使用できます。
- UI要素を持つことができます（React コンポーネント）
- 他のウィジェットを持つことができます
- アプリはウィジェットです

![JUI ウィジェット ](./imgs/jui-widget.png)

### 要素

- はHTML/React コンポーネントです。
- モデルがありません。親ウィジェットモデルを使用します。

### イベントハンドラー

- Next （eventOpts）
   - トリガーイベントにするためのオプションがあります
- Subscribe （callback）
   - イベントが設定で起動されたという通知を取得します

### アプリ/グローバルモデル

- Next （新しい値）
   - 新しい値を公開するには
- Subscribe （callback）
   - 値が変更された通知を取得するには
   - 初めて古い値を取得
- GetValue （）
   - 現在の値を取得

### コントローラー

- コントローラクラスから拡張する必要があります
- API
- CreateModel
   - 子ウィジェットの別のモデルを作成するには
- InitEventHandler
   - 子ウィジェット別のイベントハンドラーを作成するには
- RegisterCommands
   - ローカル、親、またはアプリイベントを登録するには
- Next （eventName, eventHandler）
   - 子ウィジェットイベントハンドラー、親ウィジェットイベントハンドラーまたはアプリイベントハンドラーのイベントをトリガーするには
- Subscribe （callback, eventHandler）
- SubscribeAppModel （コールバック）

### サンプルアプリデザイン

![ サンプルアプリ ](./imgs/jui-sample-app.png)
