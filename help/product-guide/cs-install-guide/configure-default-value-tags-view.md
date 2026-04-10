---
title: タグビューのデフォルト値の設定
description: タグビューのデフォルト値の設定方法について説明します
exl-id: 3ab75101-4c23-4e45-bfcf-76c1f5b92c96
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '215'
ht-degree: 0%

---

# タグビューのデフォルト値の設定 {#id223GN0M0NDC}

AEM Guidesでは、Web エディターでタグビューのデフォルトのステートを設定できます。これにより、新規ユーザーのセッションに対してタグビューをデフォルトでオンまたはオフに保つことができます。タグビューのデフォルト値を設定するには、次の手順を実行します。

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

1.）ファイルを保存してアップロードします。

>[!NOTE]
>
> タグビューを有効または無効にするWeb エディターでのユーザーの環境設定は、このデフォルト値よりも優先されます。 そのため、ユーザーがWeb エディターからタグビューを有効にした場合、セッション全体でも有効のままになります。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
