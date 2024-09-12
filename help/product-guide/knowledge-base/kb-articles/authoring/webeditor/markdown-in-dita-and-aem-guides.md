---
title: DITA AEM Guidesでの Markdown の使用
description: DITA AEM Guidesでの Markdown の移行と使用
author: Pulkit Nagpal(punagpal)
exl-id: a94c0129-df40-4b61-ac60-679b2ffe7e86
source-git-commit: f971be4be9e2d32618616727cd9c682941dd3fb2
workflow-type: tm+mt
source-wordcount: '256'
ht-degree: 0%

---

# AEM Guidesでの Markdown の使用

## 使用可能なオプション

AEM Guidesで Markdown ファイルを使用する方法には、次の 2 つの選択肢があります。

- オプション 1:AEM Guidesで既存の Markdown を読み込み、ditamap 内で直接使用して公開する

- オプション 2：既存の Markdown ファイルを DITA に変換する

各オプションについて説明します。

### 方法 1:AEM Guidesで既存の Markdown を読み込み、ditamap 内で直接使用して公開する

セットアップが簡単で、実装が高速です。 ただし、コンテンツの再利用性など、AEM Guides機能の利用には制限があります。

ユーザーは、公開エンジンがファイルのタイプを認識し、それに応じて公開できるように、属性 `format="markdown" ` または `format="mdita"` を追加する必要があります。

サンプルファイル :[Markdown Ditamap](https://acrobat.adobe.com/id/urn:aaid:sc:AP:da31137e-be84-44fb-8974-d038eeff0283)

![ 参照用のスクリーンショット ](../../assets/authoring/markdown_map.png)


#### PublishからPDFおよび web への出力

AEM Guidesには、Markdown コンテンツを使用して ditamap を公開するオプションとして、web （Html5/AEM サイト）とPDF（ネイティブPDF/DITA-OT）の両方が用意されています

### オプション 2 :Markdown を DITA 形式に変換

コンテンツの再利用性、条件付き処理の翻訳、ベースラインなどのAEM Guides機能を最大限に活用 しかし、`.md` を `.dita` 形式に変換するには、事前の取り組みが必要になります。

Markdown から DITA への変換は、Adobe FrameMakerや DITA-OT などの外部ツールを使用して行うことができます。


Adobe FrameMakerについては、[Markdown の読み込み ](https://www.adobe.com/in/products/framemaker/features.html#import-markdown) を参照してください。

DITA-OT については、[Markdown as Input](https://www.dita-ot.org/dev/topics/markdown-input.html) を参照してください。

Adobe FrameMakerを使用して変換されたサンプルファイル : [Markdown から DITA サンプルへ ](https://acrobat.adobe.com/id/urn:aaid:sc:AP:874881f3-ba43-410c-abc6-2df899536d79)

#### PublishからPDFおよび web への出力

Markdown ファイルを DITA に変換すると、AEM Guidesで使用可能な任意のフォーマットに出力をシームレスに公開できます。

AEM Guidesで使用可能な形式：[ 出力形式 ](../../../../user-guide/generate-output-understand-presets.md)
