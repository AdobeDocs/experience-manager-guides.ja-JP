---
title: タグビューのデフォルト値の設定
description: タグビューのデフォルト値の設定方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: d54e3a3c-9f61-43cf-a925-12e4ce948a55
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '210'
ht-degree: 0%
---
# タグビューのデフォルト値の設定 {#id223GN0M0NDC}

AEM Guidesでは、エディターでタグビューのデフォルトステートを設定できます。これにより、新規ユーザーのセッションのタグビューをデフォルトでオンまたはオフに保つことができます。タグビューのデフォルト値を設定するには、次の手順を実行します。

1. 管理者としてAdobe Experience Managerにログインして、UI設定ファイルをダウンロードします。
1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディターの設定** タブを選択し、上部の&#x200B;**編集** アイコンをクリックします。
1. **XML エディターのUI設定** セクションで、**ダウンロード** アイコンをクリックして、ローカルシステムに`ui_config.json` ファイルをダウンロードします。
1. `ui_config.json` ファイルで、次に示すようにdefaultValues セクションを変更して、デフォルトタグビューの状態を変更します。

   ```
   "defaultValues":
               {
               "tagsView": true
               }
   ```

1. ファイルを保存してアップロードします。

>[!NOTE]
>
> タグビューを有効または無効にするエディターでのユーザーの環境設定は、このデフォルト値よりも優先されます。 したがって、ユーザーがエディターからタグビューを有効にした場合、セッション全体でも有効のままになります。

**親トピック：**[ エディターのカスタマイズ ](customize-overview.md)
