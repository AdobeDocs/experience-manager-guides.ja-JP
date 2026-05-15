---
title: ネイティブ PDF | ネイティブ PDF パブリッシング用のノードプロセスの設定
description: ネイティブ PDF パブリッシングのノードプロセスを設定する方法について説明します
feature: Output Generation
role: Admin
level: Experienced
exl-id: f470939b-a5cb-4d28-92d1-7a0a52c4c637
TQID: https://experienceleague.adobe.com/7i-6SjvI5FuSNsWPy9sX96UsXld9fJjAjHNKDKzo824
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: d6596f3f-92a7-43ec-b444-237db6adad05id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 122
ht-degree: 1%

---

# Cloud Service向けネイティブ PDF パブリッシングのノードプロセスの設定

ネイティブのPDF公開では、公開プロセスで生成されたファイルを最終的なPDFに変換するために、別のNodeJs プロセスが開始されます。 さまざまなシナリオをサポートするために、Native PDF パブリッシングを実行しているこのNode プロセスの設定を調整する必要がある場合があります。 例えば、より大きなワークロードを実行するには、生成されたNodeJs プロセスで使用可能な最大ヒープサイズを増やす必要があります。

設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)の手順を使用します。設定ファイルで、次の（プロパティ）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|---|---|
| `com.adobe.fmdita.config.ConfigManager` | `native.pdf.node.opts` | 任意の標準`NODE_OPTIONS`.<BR>を設定する文字列値 デフォルト値：&quot;&quot; |
