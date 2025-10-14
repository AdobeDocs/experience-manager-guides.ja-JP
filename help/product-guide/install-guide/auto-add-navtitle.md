---
title: デフォルト@navtitle 属性を含める
description: '@navtitle 属性をデフォルトで含める方法を説明します'
exl-id: 3def20dc-dd24-4526-ae36-45708249d34a
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '222'
ht-degree: 1%

---

# デフォルト@navtitle 属性を含める {#id2115BC0J0XA}

トピック、参照、タスク、\（sub\） マップなど、マップには異なるタイプの参照ファイルを追加できます。 これらのファイルのほとんどは、`@navtitle` 属性をサポートしています。 ただし、一貫して使用する作成者は多くありません。 マップ内のすべての参照ファイルで `@navtitle` 属性の使用を強制する場合は、簡単な設定で行うことができます。

有効にすると、マップに追加するすべての参照ファイルは、そのプロパティに追加された `@navtitle` 属性を自動的に取得します。 `@navtitle` は、参照されたコンテンツの `title` 要素の値も取得します。

参照ファイル `@navtitle` プロパティに属性をデフォルトで含めるには、次の手順を実行します。

1. ui\_config.json ファイルをダウンロードします。

   この変更は、グローバルレベルまたはフォルダーレベルのプロファイルで行うことができます。 この変更を行う場所に応じて、それぞれの ui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、[XML web エディターの設定とカスタマイズ &#x200B;](conf-folder-level.md#id2065G300O5Z) を参照してください。

1. `ditaAttributes` 定義を検索します。

   `ditaAttributes` のデフォルト定義は次のとおりです。

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


この設定では、マップに追加するすべての参照ファイルに、デフォルトで `@navtitle` 属性が含まれます。
