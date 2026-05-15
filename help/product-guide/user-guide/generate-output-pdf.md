---
title: PDF プリセットタイプ
description: Adobe Experience Manager Guidesを使用して作成できるPDF プリセットの種類について説明します。
exl-id: f12c91fd-3f95-478e-a9cd-68d037206ee8
feature: Publishing
role: User
TQID: https://experienceleague.adobe.com/RN5CYho8TpklBivMgK6ifb--eTwlBQgD-1jNU8HvF7E
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2: id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3id: d6596f3f-92a7-43ec-b444-237db6adad05id: f9dbea21-a714-40dd-bc90-080d8046c93f
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 330
ht-degree: 0%

---

# PDF出力プリセットの概要 {#id205BE600HAH}

Experience Manager Guidesでは、PDF プリセットを作成して、個々のトピックのPDFやマップファイル全体を生成できます。 次の3つの方法のいずれかを使用して、PDF形式でコンテンツを公開できます。

**DITA-OT**

マップコンソールまたはマップダッシュボードからマップのPDF出力を生成するには、このメソッドを使用します。 PDFを生成する前に、マップコンソールまたはマップダッシュボードで開いているマップの出力プリセットを作成することで、公開プロパティを設定できます。

DITA-OT メソッドを使用したPDF出力プリセットの作成について詳しくは、[DITA-OT PDF出力プリセットの作成](./generate-output-pdf-dita-ot.md)を参照してください

**FrameMaker Publishing Server （FMPS）**

>[!NOTE]
>
> FMPS公開オプションは、マップダッシュボードでのみ使用できます。

この方法を使用すると、DITA コンテンツだけでなく、AEM リポジトリで使用可能なFrameMaker ドキュメント（.bookおよび.fm）からPDF出力を生成できます。 PDFは、出力プリセットを設定し、FrameMaker Publishing Server（FMPS）を使用して公開することで作成できます。 PDFやその他のフォーマット用に出力のルックアンドフィールを設計および設定し、設定ファイル（.sts）に格納できます。 この設定ファイルは、FMPSでDITA マップまたは.book ファイルの出力を生成するために使用されます。 出力プリセットを作成または編集するには、[出力プリセットについて](../user-guide/generate-output-understand-presets.md)を参照してください。

FMPSの設定について詳しくは、[FrameMaker ドキュメントから出力を生成](../user-guide/fm-output-generatation.md)を参照してください。

**ネイティブ PDF**

この方法を使用すると、W3C CSS3およびCSS Paged Media標準に基づいて、機能豊富なPDF出力を生成できます。 PDFのネイティブパブリッシング機能では、テンプレートを使用してコンテンツのレイアウトやスタイルを設定し、さまざまな設定を適用してPDFを調整できます。 さらに、テンプレートエディターを使用して、独自のテンプレートを変更および作成できます。

ネイティブ PDF プリセットの作成について詳しくは、[ ネイティブ PDF出力プリセットの作成](../web-editor/native-pdf-web-editor.md)を参照してください。





**親トピック：**[&#x200B;出力プリセットについて](generate-output-understand-presets.md)
