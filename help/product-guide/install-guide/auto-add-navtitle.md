---
title: デフォルトで@navtitle属性を含める
description: デフォルトで属性@navtitle含める方法を説明します
exl-id: 3def20dc-dd24-4526-ae36-45708249d34a
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '222'
ht-degree: 1%

---

# デフォルトで@navtitle属性を含める {#id2115BC0J0XA}

トピック、参照、タスク、\（sub\）マップなど、様々なタイプの参照ファイルをマップに追加できます。 これらのファイルのほとんどは`@navtitle`属性をサポートしています。 しかし、多くの作成者が一貫して使用しているわけではありません。 マップ内のすべての参照ファイルで`@navtitle`属性の使用を強制する場合は、簡単な設定で適用できます。

有効にすると、マップに追加したすべての参照ファイルに、プロパティに`@navtitle`属性が自動的に追加されます。 `@navtitle`は、参照されたコンテンツの`title`要素の値も取得します。

参照ファイルのプロパティにデフォルトで`@navtitle`属性を含めるには、次の手順を実行します。

1. ui\_config.json ファイルをダウンロードします。

   この変更は、グローバルレベルまたはフォルダーレベルのプロファイルで行うことができます。 この変更を行う場所に応じて、それぞれのui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、[XML Web エディターの設定とカスタマイズ ](conf-folder-level.md#id2065G300O5Z)を参照してください。

1. `ditaAttributes`定義を検索します。

   `ditaAttributes`の既定の定義は次のとおりです。

   ```json
   "ditaAttributes": {
   "attributes": [],
   "constraint": false,
   "required": {}
   },
   ```

1. `required` パラメーターを次のように変更します。

   ```json
   "required": {"navtitle": true}
   ```

1. ファイルを保存します。

1. 対応するプロファイル \（グローバルまたはフォルダー\）にファイルをアップロードします。


この設定では、マップに追加するすべての参照ファイルに、デフォルトで`@navtitle`属性が含まれます。
