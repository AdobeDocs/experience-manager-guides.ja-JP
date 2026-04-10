---
title: ネイティブ PDF | ネイティブ PDF パブリッシング用のノードプロセスの設定
description: ネイティブ PDF パブリッシングのノードプロセスを設定する方法について説明します
feature: Output Generation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '121'
ht-degree: 1%

---

# Cloud Service向けネイティブ PDF パブリッシングのノードプロセスの設定

ネイティブのPDF公開では、公開プロセスで生成されたファイルを最終的なPDFに変換するために、別のNodeJs プロセスが開始されます。 さまざまなシナリオをサポートするために、Native PDF パブリッシングを実行しているこのNode プロセスの設定を調整する必要がある場合があります。 例えば、より大きなワークロードを実行するには、生成されたNodeJs プロセスで使用可能な最大ヒープサイズを増やす必要があります。

設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)で指定された手順を使用します。設定ファイルで、次の（プロパティ）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|---|---|
| `com.adobe.fmdita.config.ConfigManager` | `native.pdf.node.opts` | 任意の標準`NODE_OPTIONS`を設定する文字列値。<BR> デフォルト値：&quot;&quot; |
