---
title: タグビューのデフォルト値の設定
description: タグビューのデフォルト値の設定方法について説明します
exl-id: 3ab75101-4c23-4e45-bfcf-76c1f5b92c96
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/e-BZ7-itZXflsqHW9-5Vo6ktr9RS73xdIWMZh4BU2MU
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9baid: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 215
ht-degree: 0%

---

# タグビューのデフォルト値の設定 {#id223GN0M0NDC}

AEM Guidesでは、Web エディターでタグビューのデフォルトのステートを設定できます。これにより、新規ユーザーのセッションのタグビューをデフォルトでオンまたはオフに保つことができます。タグビューのデフォルト値を設定するには、次の手順を実行します。

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

1.) ファイルを保存してアップロードします。

>[!NOTE]
>
> タグビューを有効または無効にするWeb エディターでのユーザーの環境設定は、このデフォルト値よりも優先されます。 そのため、ユーザーがWeb エディターからタグビューを有効にした場合、セッション全体でも有効のままになります。

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
