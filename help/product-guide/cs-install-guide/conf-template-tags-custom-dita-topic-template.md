---
title: カスタム DITA トピックテンプレートの設定
description: カスタム DITA トピックテンプレートの設定方法について説明します
exl-id: 5a2f4897-9697-4c5c-b5be-8fdb3a211948
feature: Template Configuration
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/PX1v2yPqLErAIST8JPr-vUwV81HH6EeFQ4LqKES9gkI'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
    internal-label: Profiles
  - id: df6fa66f-4542-4a6d-90ca-9f146eb5d494
    internal-label: Template configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '354'
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

1. *\（Optional\）* [ カスタム DITA テンプレートフォルダーパスの設定](#id191LCF0095Z)

1. [カスタムオーサリングテンプレートの作成](conf-folder-level.md#id1917D0EG0HJ)

1. 「[ オーサリングテンプレートの設定](conf-folder-level.md#id1889D0IL0Y4)」で説明しているように、カスタムテンプレートをグローバルレベルまたはフォルダーレベルのプロファイルに追加します


## カスタム DITA テンプレートフォルダーパスの設定 {#id191LCF0095Z}

AEM Guidesでは、カスタマイズしたDITA マップとテンプレートを保存するフォルダーを設定できます。 デフォルトでは、テンプレートファイルはDAMの次のフォルダーに保存されます。

`/content/dam/dita-templates/`

トピックテンプレートファイルとマップテンプレートファイルを管理するには、トピックテンプレートとマップテンプレートを保存する専用のフォルダーがあります。 デフォルトでは、すべてのトピックテンプレートは`/content/dam/dita-templates/topics`の下に保存されます

フォルダー。 すべてのマップテンプレートは`/content/dam/dita-templates/maps` フォルダーに保存されます。

管理者は、デフォルトフォルダーにカスタムマップまたはトピックテンプレートを作成するか、カスタムテンプレートを保存する独自のフォルダーを作成するかを選択できます。 デフォルトフォルダーを使用する場合は、このプロセスをスキップできます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、カスタム DITA トピックテンプレート用のフォルダーを設定するための次の\（property\）詳細を指定します。

>[!IMPORTANT]
>
> デフォルトフォルダーを使用してカスタムテンプレートを保存する場合は、このプロセスをスキップできます。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `topic.templates` | カスタムテンプレートを保存する場所を指定します。<br> 指定した場所がDAMに存在する場合、すべてのデフォルトマップテンプレートとトピックテンプレートがそのフォルダーにコピーされます。 場所が存在しない場合、フォルダーはすべてのデフォルトのマップテンプレートとトピックテンプレートで作成されます。 |

**親トピック：**[ トピックとマップテンプレートの設定](conf-template-tags.md)
