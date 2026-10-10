---
title: ネイティブ PDF | ネイティブ PDF パブリッシング用のノードプロセスの設定
description: ネイティブ PDF パブリッシングのノードプロセスを設定する方法について説明します
feature: Output Generation
role: Admin
level: Experienced
exl-id: 5321c785-8259-4ee2-9ada-ee70fb99b4fd
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '122'
ht-degree: 1%
---
# Cloud Service向けネイティブ PDF パブリッシングのノードプロセスの設定

ネイティブのPDF公開では、公開プロセスで生成されたファイルを最終的なPDFに変換するために、別のNodeJs プロセスが開始されます。 さまざまなシナリオをサポートするために、Native PDF パブリッシングを実行しているこのNode プロセスの設定を調整する必要がある場合があります。 例えば、より大きなワークロードを実行するには、生成されたNodeJs プロセスで使用可能な最大ヒープサイズを増やす必要があります。

設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)の手順を使用します。設定ファイルで、次の（プロパティ）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|---|---|
| `com.adobe.fmdita.config.ConfigManager` | `native.pdf.node.opts` | 任意の標準`NODE_OPTIONS`.<BR>を設定する文字列値 デフォルト値：&quot;&quot; |
