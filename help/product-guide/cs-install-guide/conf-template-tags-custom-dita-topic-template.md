---
title: カスタム DITA トピックテンプレートの設定
description: カスタム DITA トピックテンプレートの設定方法を学ぶ
exl-id: 5a2f4897-9697-4c5c-b5be-8fdb3a211948
feature: Template Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '354'
ht-degree: 2%

---

# カスタム DITA トピックテンプレートの設定 {#id16A7G0O02TD}

AEM Guidesには、次の DITA トピックテンプレートが付属しています。

- トピック

- タスク

- 概念

- 参照

- 用語集

- トラブルシューティング

- 空白


オーサリング要件に応じて、これらのテンプレートのいずれかを使用して、トピックテンプレートを作成できます。 空白 DITA テンプレートには、ほかのテンプレートのような構造や要素は含まれません。 標準の DITA トピックテンプレートに基づいていないテンプレートが高度にカスタマイズされている場合は、空白テンプレートをベースとして使用できます。

DITA トピックテンプレートをカスタマイズしてオーサリングに使用するには、次の 3 つの主なタスクを実行する必要があります。

1. *\（オプション\）*[ カスタム DITA テンプレートフォルダーパスを設定 ](#id191LCF0095Z)

1. [カスタムオーサリングテンプレートの作成](conf-folder-level.md#id1917D0EG0HJ)

1. [ オーサリングテンプレートの設定 ](conf-folder-level.md#id1889D0IL0Y4) の節で説明しているように、カスタムテンプレートをグローバルレベルまたはフォルダーレベルのプロファイルに追加する


## カスタム DITA テンプレートフォルダーパスの設定 {#id191LCF0095Z}

AEM Guidesでは、カスタマイズした DITA マップとテンプレートを保存するフォルダを設定できます。 デフォルトでは、テンプレートファイルは DAM の次のフォルダーに保存されます。

`/content/dam/dita-templates/`

トピックおよびマップ テンプレート ファイルを管理するには、トピックおよびマップ テンプレートを保存する専用のフォルダがあります。 デフォルトでは、すべてのトピックテンプレートは `/content/dam/dita-templates/topics` の下に保存されます

フォルダー。 すべてのマップテンプレートは、`/content/dam/dita-templates/maps` フォルダーに保存されます。

管理者は、デフォルトのフォルダーにカスタムマップまたはトピックテンプレートを作成するか、カスタムテンプレートを保存する独自のフォルダーを作成するかを選択できます。 デフォルトのフォルダーを使用する予定がある場合は、この処理をスキップできます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、カスタム DITA トピックテンプレートのフォルダを設定するために、次の\（property\）詳細を指定します。

>[!IMPORTANT]
>
> デフォルトのフォルダーを使用してカスタムテンプレートを保存する場合は、このプロセスをスキップできます。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `topic.templates` | カスタムテンプレートを保存する場所を指定します。<br> 指定した場所が DAM に存在する場合、すべてのデフォルトのマップおよびトピックテンプレートがそのフォルダーにコピーされます。 場所が存在しない場合は、すべてのデフォルトのマップとトピックのテンプレートを使用してフォルダーが作成されます。 |

**親トピック：**&#x200B;[ トピックおよびマップ テンプレートを設定 ](conf-template-tags.md)
