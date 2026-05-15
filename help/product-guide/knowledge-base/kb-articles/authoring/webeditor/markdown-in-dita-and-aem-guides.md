---
title: DITA AEM GuidesでのMarkdownの使用
description: DITA AEM GuidesでのMarkdownの移行と使用
author: Pulkit Nagpal(punagpal)
exl-id: a94c0129-df40-4b61-ac60-679b2ffe7e86
TQID: https://experienceleague.adobe.com/z41KjrBkAeDaH-iKXOFLH44qOQElziip1FqcRhnKaUI
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 281
ht-degree: 0%

---

# AEM GuidesでのMarkdownの使用

## 利用可能なオプション

AEM Guidesでマークダウンファイルを使用する方法は2つあります。

- オプション 1：既存のマークダウンをAEM Guidesに読み込み、ditamap内で直接使用して公開する

- オプション 2：既存のマークダウンファイルをDITAに変換する

各オプションについて説明します。

### 方法1：既存のマークダウンをAEM Guidesに読み込み、ditamap内で直接使用して公開する

セットアップがシンプルになり、実装が速くなります。 ただし、AEM Guidesの機能の使用状況は、コンテンツの再利用性など限定的です。

公開エンジンがファイルの種類を理解し、それに応じて公開できるように、属性`format="markdown" `または`format="mdita"`を追加する必要があります。

サンプルファイル : [Markdown Ditamap](https://acrobat.adobe.com/id/urn:aaid:sc:AP:da31137e-be84-44fb-8974-d038eeff0283)

![参照用スクリーンショット ](../../assets/authoring/markdown_map.png)


#### PDFおよびWeb出力への公開

AEM Guidesでは、Web （Html5/AEM サイト）とPDF（Native-PDF/DITA-OT）の両方に対して、Markdown コンテンツを含むditamapを公開するオプションを提供しています

### オプション 2 :MarkdownをDITA形式に変換する

AEM Guides機能のフル活用（コンテンツの再利用性、条件付き処理翻訳、ベースラインなど）。ただし、`.md`を`.dita`形式に変換するには、事前作業が必要です。

マークダウンからDITAへの変換は、Adobe FrameMakerやDITA-OTなどの外部ツールを使用して行うことができます。


Adobe FrameMakerについては、「[Markdownを読み込む](https://www.adobe.com/in/products/framemaker/features.html#import-markdown)」を参照してください。

DITA-OTについては、[入力としてのMarkdown](https://www.dita-ot.org/dev/topics/markdown-input.html)を参照してください。

Adobe FrameMakerを使用して変換されたサンプルファイル : [MarkdownからDITA サンプル ](https://acrobat.adobe.com/id/urn:aaid:sc:AP:874881f3-ba43-410c-abc6-2df899536d79)

#### PDFおよびWeb出力への公開

マークダウンファイルがDITAに変換されると、AEM Guidesで使用可能なあらゆる形式に出力をシームレスに公開できます。

AEM Guidesで使用可能な形式：[出力形式](../../../../user-guide/generate-output-understand-presets.md)
