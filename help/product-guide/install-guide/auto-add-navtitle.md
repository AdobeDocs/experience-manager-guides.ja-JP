---
title: デフォルトで@navtitle属性を含める
description: デフォルトで@navtitle属性を含める方法を説明します。
exl-id: 3def20dc-dd24-4526-ae36-45708249d34a
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '222'
ht-degree: 1%

---

# デフォルトで@navtitle属性を含める {#id2115BC0J0XA}

マップには、トピック、参照、タスク、\(sub\) マップなど、様々なタイプの参照ファイルを追加できます。 これらのファイルの大部分は `@navtitle` 属性。 ただし、一貫して使用する作者は多くありません。 の使用を強制する場合は、 `@navtitle` 属性をマップ内のすべての参照ファイルに含めると、簡単な設定でこれを行うことができます。

有効にすると、マップに追加するすべての参照ファイルが自動的に `@navtitle` 属性がプロパティに追加されました。 The `@navtitle` また、 `title` 参照先コンテンツの要素。

含める `@navtitle` 属性は、デフォルトでは参照ファイルのプロパティで次の手順を実行します。

1. ui\_config.json ファイルをダウンロードします。

   この変更は、グローバルレベルまたはフォルダーレベルのプロファイルでおこなうことができます。 この変更を行う場所に応じて、それぞれの ui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、 [XML Web Editor の設定とカスタマイズ](conf-folder-level.md#id2065G300O5Z).

1. を検索します。 `ditaAttributes` 定義。

   のデフォルトの定義 `ditaAttributes` 次に該当：

   ```json
   "ditaAttributes": {
   "attributes": [],
   "constraint": false,
   "required": {}
   },
   ```

1. 次を変更： `required` パラメーター：

   ```json
   "required": {"navtitle": true}
   ```

1. ファイルを保存します。

1. 対応するプロファイル（Global または Folder）にファイルをアップロードします。


この設定を使用すると、マップに追加するすべての参照ファイルに、 `@navtitle` 属性のデフォルト値です。
