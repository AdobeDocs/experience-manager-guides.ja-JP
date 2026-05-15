---
title: デスクトップベースのXML エディターの統合
description: デスクトップベースのXML エディターの統合方法を説明します
feature: Publishing FrameMaker Documents
role: Admin
level: Experienced
exl-id: 86ba53fa-0e08-4791-9018-09fe974691da
TQID: https://experienceleague.adobe.com/4cejVcInzwcFBWgxobUvn7g2teizpQCCeTC2Z5CZ1K8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: bf79f6d3-0ad0-4d82-99e4-42ce98324d60
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 368
ht-degree: 1%

---

# デスクトップベースのXML エディターの統合

市場には多くのXML エディターがあり、すでに使用している可能性があります。 Adobe FrameMakerは、AEM コネクタを備えた最も強力なXML エディターの1つです。 FrameMakerのAEM コネクタを使用すると、AEM リポジトリへの接続、ファイルのチェックアウトとチェックイン、FrameMakerでのファイルの直接編集を簡単に行うことができます。 また、Web エディターからFrameMakerを起動するようにExperience Manager Guidesを設定することもできます。 FrameMakerでファイルを開いた後、ファイルを編集してAEM リポジトリに戻すことができます。

## Web エディターからFrameMakerでのファイル編集を有効にする

FrameMakerまたはその他のDITA エディターを使用して、DITA コンテンツを作成および更新できます。 ただし、組織でFrameMakerをDITA エディターとして使用している場合は、AEMからFrameMakerでDITA ドキュメントを直接開くオプションをユーザーに提供できます。


デフォルトでは、AEM ツールバーに「**FrameMakerで開く**」ボタンは表示されません。 AEM ツールバーにこのボタンを追加するには、次の手順を実行します。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を入力して、AEM ツールバーにこのボタンを追加します。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframebuttonshow` | ブール値\（true/false\）。 「**FrameMakerで開く**」ボタンを表示する場合は、このプロパティをtrueに設定します。<br> **デフォルト値**: false |



バージョン 2409およびFrameMaker 2022年9月リリース – アップデート 3を使用している場合は、ユーザーがFrameMaker サーバーの詳細をFrameMakerに渡すために、**Experience Manager Guides バージョン 2022 アップデート 3以降**&#x200B;の設定を有効にする必要があります。  デフォルトでは無効になっています。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframe2022above` | ブール値\（true/false\）。 FrameMaker 2022年9月リリース（アップデート 3）を使用している場合は、このプロパティをtrueに設定します。<br> **デフォルト値**: false |



*openinframebuttonshow* プロパティをtrueに設定すると、AEM リポジトリ内の任意のDITA ファイルを選択すると、「**FrameMakerで開く**」ボタンが表示されます。 このプロパティが&#x200B;*true*&#x200B;に設定されていない場合、「**FrameMakerで開く**」ボタンは、リポジトリで.fmまたは.book ファイルを選択した場合にのみ表示されます。
