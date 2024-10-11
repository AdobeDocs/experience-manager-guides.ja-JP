---
title: デスクトップベースの XML エディターの統合
description: デスクトップベースの XML エディターを統合する方法を学ぶ
feature: Publishing FrameMaker Documents
role: Admin
level: Experienced
source-git-commit: b3ae1c02d3055fe15257d5de0365d30e7af21afb
workflow-type: tm+mt
source-wordcount: '363'
ht-degree: 1%

---

# デスクトップベースの XML エディターの統合

市場には多くの XML エディターが存在しており、既に使用している可能性があります。 Adobe FrameMakerは、AEM コネクタに付属する最も強力な XML エディターの 1 つです。 FrameMakerでAEM コネクタを使用すると、AEM リポジトリとの接続、ファイルのチェックアウトとチェックイン、FrameMakerでの直接編集を簡単に行うことができます。 また、web エディターからFrameMakerを起動するようにExperience Manager Guidesを設定することもできます。 ファイルをFrameMakerで開いたら、ファイルを編集してAEM リポジトリにチェックインできます。

## Web エディターからFrameMakerーでのファイル編集を有効にする

FrameMakerまたはその他の DITA エディタを使用して、DITA コンテンツを作成および更新できます。 ただし、FrameMakerを DITA エディタとして使用している場合は、AEMから直接FrameMakerで DITA 文書を開くことができます。


デフォルトでは、AEM ツールバーに「**FrameMakerで開く** ボタンは表示されません。 次の手順を実行して、このボタンをAEM ツールバーに追加します。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、AEM ツールバーにこのボタンを追加します。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframebuttonshow` | ブール \（true/false\） 「**FrameMakerで開く**」ボタンを表示する場合は、このプロパティを true に設定します。<br> **デフォルト値**:false |



9 月リリースのバージョン 2409 およびFrameMaker 2022 のアップデート 3 を使用している場合、**FrameMaker Version 2022 Update 3 以降** を有効にして、Experience Manager Guides サーバーの詳細をFrameMakerに渡す必要があります。  デフォルトでは無効になっています。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframe2022above` | ブール \（true/false\） FrameMaker 2022 年 9 月リリース – アップデート 3 を使用している場合は、このプロパティを true に設定します。<br> **デフォルト値**:false |



*openinframebuttonshow* プロパティを true に設定すると、AEM リポジトリで DITA ファイルを選択するときに「**FrameMakerで開く**」ボタンが表示されます。 このプロパティーが *true* に設定されていない場合、「**FrameMakerで開く**」ボタンは、リポジトリ内の.fm ファイルまたは.book ファイルを選択したときにのみ表示されます。



