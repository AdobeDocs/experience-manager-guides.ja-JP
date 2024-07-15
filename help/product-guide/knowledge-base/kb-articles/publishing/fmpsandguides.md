---
title: AEM GuidesでのFrameMaker Publishing Server（FMPS）を使用した公開
description: AEM Guidesを使用した FMPS での公開
exl-id: 05d4d876-f83b-473c-bf31-14d6565e80e2
feature: AEM Guides FrameMaker Publishing Server
role: User, Admin
source-git-commit: 462647f953895f1976af5383124129c3ee869fe9
workflow-type: tm+mt
source-wordcount: '623'
ht-degree: 0%

---

# AEM GuidesでのFrameMaker Publishing Server（FMPS）を使用した公開

高品質の自動公開を探している場合は、AEM GuidesとFrameMaker Publishing Serverの統合が解決策になる可能性があります。\
この記事は、AEM Guidesを使用した FMPS の設定と実行に役立ちます。

## FMPS とAEM Guidesの互換性

- 4.1 AEM Guidesとの互換性：[4.1 互換性マトリックス ](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/release-notes/on-prem-release-notes/release-notes-4.1.html?lang=en/#compatibility-matrix)
- 4.0 AEM Guidesとの互換性：[4.0 互換性マトリックス ](https://helpx.adobe.com/xml-documentation-for-experience-manager/release-note/release-notes-xml-documentation-solution-4-0.html/#Compatibility%20matrix)
- 最新リリース：[ 最新リリース情報 ](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/latest-release-info.html?lang=en)

## インストール

AEM Guidesおよび FMPS のインストールと設定については、次を参照してください

### AEM ガイド

インストールと設定については、[4.1 のインストールと設定を参照してください ](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-1-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf)

### FMPS

FMPS のインストールについては、[YouTube リンク ](https://www.youtube.com/watch?v=2deelyM5VA8&amp;t) または [FMPS のインストールと設定 ](https://help.adobe.com/en_US/framemaker/server/index.html#t=fmps-user-guide%2Finstall_config_fmps.html%23install_config_fmps&amp;rhtocid=_2) を参照してください。

## 必要な設定

FrameMaker Publishing Server（FMPS）を使用して DITA コンテンツを生成できます。 FMPS は幅広い出力形式をサポートしています。 Web コンソールで「com.adobe.fmdita.config.ConfigManager バンドル」の次のプロパティを変更し、FMPS を使用するようにAEM Guidesを設定します。

Web コンソールを開くには、URL Access http://\&lt;server name\>:\&lt;port\>/system/console/configMgr に移動します。

**設定プロパティとその説明**[4.1 のインストールと設定 ](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-1-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf#page=89)

## テストを実行中：

FMPS を使用すると、DITA および FM Assets用の **PDF、レスポンシブHTML5** および **Epub** を自動的に公開できます。

「次を使用してPDFを生成」メニューから「FrameMaker Publishing Server」を選択します。

ユーザーは「settings File （.sts）」と「ditaval」を指定できます。 フィルタリングは、指定した条件に基づいて、ditaval を使用して行います。

- **設定ファイル**：公開時に FMPS で考慮するすべての設定を含んだ、FrameMakerの/FMPS Publish設定ファイル。 例えば、カスタマイズしたテンプレートを使用して出力を作成したり、マークと裁ち落としを作成したり（PDF）、目次を使用してPDFを作成したりします。
- **FMPS プリセット：** ditaval と settings ファイルの組み合わせが事前に定義されています。 別個の設定ファイルと設定ファイルを提供する代わりに、ユーザーは、公開のニーズに再利用できる FMPS プリセットを事前に作成することができます。

**注意：** 設定や FMPS プリセットを選択しない場合、FMPS で公開するには、デフォルトのシステム設定が使用されます。

FMPS プリセットを選択し、さらにカスタム設定やAEMから別のファイルを指定した場合は、競合が発生します。 この場合、FMPS プリセットはカスタム設定または ditaval ファイルよりも優先されます。

### FMPS を使用したベースライン公開：

作成済みのベースラインを FMPS2020.0.2 以降のバージョンで公開できます。

**サンプル FMPS 設定ファイル（.sts ファイル）:** [ サンプル FMPS 設定ファイル ](https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ef750752-7a7e-4e51-923e-6b7d9861ed54) （このファイルを解凍）

## FAQ とトラブルシューティング：

- ### FMPS の公開が「タイムアウト例外」で失敗する

>/system/console/configMgr/com.adobe.fmdita.config.ConfigManager の「FMPS timeout」（秒）の値を確認して大きくします。

- ### ドロップダウンで FMPS プリセットを取得できません

>サーバーに事前定義済みの FMPS プリセットが作成されており、接続設定が正しいことを確認します。

- ### 公開時に空白のPDFが表示される

>UUID を使用している場合は、FrameMakerの編集環境設定で「UUID ベースの参照を使用」がオンになっていることを確認します。逆の場合は、UUID 以外のAEM ガイドでもオンになっています。

- ### 最終的な公開出力で設定/変数が適用されません

>FMPS プリセットと設定/無効ファイルを同時に選択していないことを確認します。 FrameMakerを使用して、出力を手動で確認します。

- ### ベースラインが FMPS から公開されない

>FMPS2020.0.2 以降のバージョンは、ベースライン公開と互換性があります。
>ベースラインが正しく作成されていることを確認します。確認するには、マップ ダッシュボード – トピック – ダウンロードに移動します。  「ベースラインを使用」をマッピングして選択します。
- ### FMPS からのPublish タスクは、他のエンジンよりも時間がかかる

>FMPS から公開する場合、理想的な固定ヘッダー時間は約 3～4 分です。それ以上になると思われる場合は、FMPS 管理者に確認するか、Adobeサポートにお問い合わせください。

## その他のリソース：

[FMPS のラーニングとサポート ](https://helpx.adobe.com/support/framemaker-publishing-server.html)

[AEM Guidesのラーニングとサポート ](https://helpx.adobe.com/in/support/xml-documentation-for-experience-manager.html)

[FrameMakerおよび FMPS コミュニティ ](https://community.adobe.com/t5/framemaker/ct-p/ct-framemaker?page=1&amp;sort=latest_replies&amp;lang=all&amp;tabid=all)

[AEM Guides コミュニティ ](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation)
