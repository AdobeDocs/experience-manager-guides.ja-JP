---
title: カスタム DITA トピックテンプレートの設定
description: カスタム DITA トピックテンプレートの設定方法について説明します
exl-id: a9b2c479-7bf6-4c62-addd-fdfe74dc1f69
feature: Template Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/YGsNmqPAjBHtBEa-o53tns-h1DLRkTZNIq3PNbG8LNw
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
  - id: df6fa66f-4542-4a6d-90ca-9f146eb5d494
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 365
ht-degree: 2%

---

# カスタム DITA トピックテンプレートの設定 {#id16A7G0O02TD}

AEM Guidesには、次のDITA トピックテンプレートが付属しています。

- トピック

- タスク

- コンセプト

- 参照

- 用語集

- トラブルシューティング

- 空白


これらのテンプレートのいずれかを使用して、オーサリング要件に従ってトピックテンプレートを作成できます。 空白のDITA テンプレートには、他のテンプレートのような構造や要素は含まれません。 テンプレートが高度にカスタマイズされ、通常のDITA トピックテンプレートに基づいていない場合は、空白テンプレートをベースとして使用できます。

DITA トピックテンプレートをカスタマイズしてオーサリングに使用するには、次の3つの主なタスクを実行する必要があります。

1. *\（Optional\）* [&#x200B; カスタム DITA テンプレートフォルダーパスの設定](#id191LCF0095Z)

1. [カスタムオーサリングテンプレートの作成](conf-folder-level.md#id1917D0EG0HJ)

1. 「[&#x200B; オーサリングテンプレートの設定](conf-folder-level.md#id1889D0IL0Y4)」で説明しているように、カスタムテンプレートをグローバルレベルまたはフォルダーレベルのプロファイルに追加します


## カスタム DITA テンプレートフォルダーパスの設定 {#id191LCF0095Z}

AEM Guidesでは、カスタマイズしたDITA マップとテンプレートを保存するフォルダーを設定できます。 デフォルトでは、テンプレートファイルはDAMの次のフォルダーに保存されます。

`/content/dam/dita-templates/`

トピックテンプレートファイルとマップテンプレートファイルを管理するには、トピックテンプレートとマップテンプレートを保存する専用のフォルダーがあります。 デフォルトでは、すべてのトピックテンプレートは`/content/dam/dita-templates/topics`の下に保存されます

フォルダー。 すべてのマップテンプレートは`/content/dam/dita-templates/maps` フォルダーに保存されます。

管理者は、デフォルトフォルダーにカスタムマップまたはトピックテンプレートを作成するか、カスタムテンプレートを保存する独自のフォルダーを作成するかを選択できます。 デフォルトフォルダーを使用する場合は、このプロセスをスキップできます。

カスタム DITA トピックテンプレート用のフォルダーを設定するには、次の手順を実行します。

>[!IMPORTANT]
>
> デフォルトフォルダーを使用してカスタムテンプレートを保存する場合は、このプロセスをスキップできます。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索してクリックします。

1. **テンプレートの場所** プロパティで、カスタムテンプレートを保存する場所を指定します。

1. 「**保存**」をクリックします。


指定した場所がDAMに存在する場合、すべてのデフォルトマップテンプレートとトピックテンプレートがそのフォルダーにコピーされます。 場所が存在しない場合、フォルダーはすべてのデフォルトのマップテンプレートとトピックテンプレートで作成されます。

**親トピック：**&#x200B;[&#x200B; トピックとマップテンプレートの設定](conf-template-tags.md)
