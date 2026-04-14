---
title: AEM GuidesでのFrameMaker Publishing Server（FMPS）を使用した公開
description: AEM Guidesを使用したFMPSでの公開
exl-id: 05d4d876-f83b-473c-bf31-14d6565e80e2
feature: AEM Guides FrameMaker Publishing Server
author: Pulkit Nagpal(punagpal)
role: User, Admin
source-git-commit: 9c53ac725618db1164b0ed310a47b258a7224778
workflow-type: tm+mt
source-wordcount: '623'
ht-degree: 0%

---

# AEM GuidesでのFrameMaker Publishing Server（FMPS）を使用した公開

高品質の自動公開を探している場合は、AEM GuidesとFrameMaker Publishing Serverの統合が解決策になる可能性があります。\
この記事では、AEM GuidesでFMPSを設定および実行する際に役立ちます。

## FMPSとAEM Guidesの互換性

- 4.1 AEM Guidesとの互換性：[4.1互換性マトリックス ](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/release-notes/on-prem-release-notes/release-notes-4.1.html?lang=en/#compatibility-matrix)
- 4.0 AEM Guidesとの互換性：[4.0互換性マトリックス ](https://helpx.adobe.com/xml-documentation-for-experience-manager/release-note/release-notes-xml-documentation-solution-4-0.html/#Compatibility%20matrix)
- 最新リリース：[最新リリース情報](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/latest-release-info.html?lang=en)

## インストール

AEM GuidesおよびFMPSのインストールと設定については、次を参照してください

### AEM ガイド

インストールと設定の参照：[4.1 インストールと設定](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-1-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf)

### FMPS

FMPSのインストールについては、[YouTubeのリンク ](https://www.youtube.com/watch?v=2deelyM5VA8&t)または[FMPSのインストールと設定](https://help.adobe.com/en_US/framemaker/server/index.html#t=fmps-user-guide%2Finstall_config_fmps.html%23install_config_fmps&rhtocid=_2)を参照できます

## 必要な設定

FrameMaker Publishing Server（FMPS）を使用すると、DITA コンテンツを生成できます。 FMPSは、幅広い出力形式をサポートしています。 Web コンソールの「com.adobe.fmdita.config.ConfigManager バンドル」の次のプロパティを変更して、FMPSを使用するようにAEM Guidesを設定します。

Web コンソールを開くには、URL Access http://\&lt; サーバー名\>:\&lt;port\>/system/console/configMgrに移動します。

**設定プロパティとその説明** [4.1 インストールと設定](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-1-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf#page=89)

## 実行中のテスト：

FMPSを使用すると、DITAおよびFM Assets用に&#x200B;**PDF、Responsive HTML5**&#x200B;および&#x200B;**Epub**&#x200B;を自動的に公開できます。

「PDFを使用して生成」メニューから、「FrameMaker Publishing Server」を選択します。

ユーザーは「settings File （.sts）」と「ditaval」を指定できます。 フィルタリングは、指定した条件に基づいてditavalを使用して実行されます。

- **設定ファイル**: FMPSで公開時に尊重するすべての設定を含むFrameMaker /FMPS公開設定ファイル。 たとえば、カスタマイズされたテンプレートで出力を作成する、マークと裁ち落とし（PDF）を作成する、目次でPDFを作成する、などです。
- **FMPS プリセット：** ditaval ファイルと設定ファイルの事前定義済みの組み合わせです。 ditaval ファイルと設定ファイルを個別に指定する代わりに、ユーザーはFMPS プリセットを事前作成して、公開ニーズに再利用できます。

**注意：**&#x200B;設定またはFMPS プリセットのいずれかを選択しない場合は、デフォルトのシステム設定を使用して公開します。

FMPS プリセットを選択し、AEMからカスタム設定またはditaval ファイルを指定した場合は、競合となります。 この場合、FMPS プリセットは、カスタム設定またはditaval ファイルよりも優先されます。

### FMPSを使用したベースライン公開：

FMPS2020.0.2以降のバージョンで、既に作成したベースラインを公開できます。

開始する&#x200B;**サンプル FMPS設定ファイル（.sts ファイル）:** [ サンプル FMPS設定ファイル ](https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ef750752-7a7e-4e51-923e-6b7d9861ed54) （このファイルを解凍）

## FAQとトラブルシューティング：

### FMPSの公開が「タイムアウト例外」で失敗する

>/system/console/configMgr/com.adobe.fmdita.config.ConfigManagerの「FMPS タイムアウト」（秒）の値を確認して増やします

### ドロップダウンでFMPS プリセットを取得できない

>サーバーで事前に定義されたFMPS プリセットが作成されていること、および接続設定が正しいことを確認してください。

### 公開時に空白のPDFが表示される

>UUIDを使用している場合は、FrameMakerの環境設定で「UUID ベースの参照を使用」にチェックを入れ、逆にUUID以外のAEM ガイドにチェックを入れてください。

### 最終的に公開された出力で設定/ditavalが適用されない

>FMPS プリセットと設定/diaval ファイルを同時に選択していないことを確認します。 FrameMakerを使用して、出力を手動で確認します。

### ベースラインがFMPSから公開されない

>FMPS2020.0.2以降のバージョンは、ベースライン公開と互換性があります。
>ベースラインが正しく作成されていることを確認します。確認するには、マップダッシュボードのトピックのダウンロードに移動します  マッピングして「ベースラインを使用」を選択します。

### FMPSからのタスクの公開には、他のエンジンよりも時間がかかります

>FMPSから公開する場合、理想的な固定ヘッダー時間は約3 ～ 4分です。長いと思われる場合は、FMPS管理者に確認するか、Adobe サポートにお問い合わせください。

## 関連トピックス：

[FMPSの学習とサポート ](https://helpx.adobe.com/support/framemaker-publishing-server.html)

[AEM Guidesの学習とサポート ](https://helpx.adobe.com/in/support/xml-documentation-for-experience-manager.html)

[FrameMakerとFMPS コミュニティ ](https://community.adobe.com/t5/framemaker/ct-p/ct-framemaker?page=1&sort=latest_replies&lang=all&tabid=all)

[AEM Guides コミュニティ ](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation)
