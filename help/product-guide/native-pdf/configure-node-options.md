---
title: ネイティブPDF | PDFのネイティブパブリッシング用ノードプロセスの設定
description: ネイティブPDF公開用にノードプロセスを設定する方法を説明します
exl-id: f470939b-a5cb-4d28-92d1-7a0a52c4c637
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '118'
ht-degree: 1%

---

# ネイティブPDF公開用のノードプロセスの設定

ネイティブPDFの公開は、個別の NodeJs プロセスを開始して、公開プロセスで生成されたファイルを最終PDFに変換します。 異なるシナリオをサポートするために、ネイティブPDF公開を実行するこのノードプロセスの設定を調整する必要がある場合があります。 例えば、より大きなワークロードを実行するには、生成された NodeJs プロセスで使用できる最大ヒープサイズを増やす必要があります。

[ 設定の上書き ](../cs-install-guide/download-install-additional-config-override.md) に示された手順に従って設定ファイルを作成します。設定ファイルで、次の（プロパティ）の詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|---|---|
| `com.adobe.fmdita.config.ConfigManager` | `native.pdf.node.opts` | 任意の標準 `NODE_OPTIONS` を設定する文字列値。<BR> デフォルト値：&quot;&quot; |
