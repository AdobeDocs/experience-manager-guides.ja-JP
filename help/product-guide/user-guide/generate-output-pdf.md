---
title: PDFのプリセットタイプ
description: Adobe Experience Manager Guidesを使用して作成できるPDF プリセットの種類について説明します。
exl-id: f12c91fd-3f95-478e-a9cd-68d037206ee8
feature: Publishing
role: User
source-git-commit: 558cc1a724a483353eb5d912354e1ab37dab348a
workflow-type: tm+mt
source-wordcount: '324'
ht-degree: 0%

---

# PDF出力プリセットの概要 {#id205BE600HAH}

Experience Manager Guidesでは、PDF プリセットを作成して、個々のトピックまたはマップファイル全体の PDF を生成できます。 PDF形式でコンテンツを公開するには、次の 3 つの方法のいずれかを使用します。

**DITA-OT**

この方法を使用して、マップ・コンソールまたはマップ・ダッシュボードからマップのPDF出力を生成します。 PDFを生成する前に、マップコンソールまたはマップダッシュボードで開くマップの出力プリセットを作成して公開プロパティを設定できます。

DITA-OT メソッドを使用してPDF出力プリセットを作成する方法については、[DITA-OT PDF出力プリセットの作成 ](./generate-output-pdf-dita-ot.md) を参照してください。

**FrameMaker Publishing Server（FMPS）**

>[!NOTE]
>
> FMPS 公開オプションは、マップダッシュボードでのみ使用できます。

この方法を使用すると、DITA コンテンツだけでなく、AEM リポジトリで使用可能なFrameMaker文書（.book と.fm）からもPDF出力を生成できます。 PDFは、出力プリセットを設定することで作成でき、FrameMaker Publishing Server（FMPS）を使用して公開できます。 PDFやその他の形式に対応する出力のルックアンドフィールをデザインして設定し、設定ファイル（.sts）に保存できます。 この設定ファイルは、FMPS で DITA マップまたは.book ファイルの出力を生成するために使用されます。 出力プリセットを作成または編集するには、[ 出力プリセットについて ](../user-guide/generate-output-understand-presets.md) を表示します。

FMPS の設定について詳しくは、[FrameMaker ドキュメントからの出力の生成 ](../user-guide/fm-output-generatation.md) を参照してください。

**ネイティブ PDF**

この手法を使用して、W3C CSS3 および CSS ページメディア標準に基づいた、機能豊富なPDF出力を生成します。 PDFのネイティブパブリッシングを使用すると、テンプレートを使用してコンテンツのレイアウトとスタイルを設定し、様々な設定を適用してPDFを微調整できます。 さらに、テンプレートエディターを使用して独自のテンプレートを変更および作成できます。

ネイティブのPDF プリセットの作成について詳しくは、[ ネイティブのPDF出力プリセットの作成 ](../web-editor/native-pdf-web-editor.md) を参照してください。





**親トピック：**&#x200B;[ 出力プリセットについて ](generate-output-understand-presets.md)
