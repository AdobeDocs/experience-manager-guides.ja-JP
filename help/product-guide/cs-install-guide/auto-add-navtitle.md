---
title: デフォルト@navtitle 属性を含める
description: '@navtitle 属性をデフォルトで含める方法を説明します'
exl-id: 38711c0c-efa8-461a-92e1-ecfcdcdd36d3
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: a3c7973868549c72e868c05a3fc6ca8bdce9bce3
workflow-type: tm+mt
source-wordcount: '327'
ht-degree: 0%

---

# デフォルト@navtitle 属性を含める {#id2115BC0J0XA}

トピック、参照、タスク、\（sub\） マップなど、マップには異なるタイプの参照ファイルを追加できます。 これらのファイルのほとんどは、`@navtitle` 属性をサポートしています。 ただし、一貫して使用する作成者は多くありません。 マップ内のすべての参照ファイルで `@navtitle` 属性の使用を強制する場合は、簡単な設定で行うことができます。

有効にすると、マップに追加するすべての参照ファイルは、そのプロパティに追加された `@navtitle` 属性を自動的に取得します。 `@navtitle` は、参照されたコンテンツの `title` 要素の値も取得します。

参照ファイル `@navtitle` プロパティに属性をデフォルトで含めるには、次の手順を実行します。

1. UI 設定ファイルをダウンロードするには、管理者としてAdobe Experience Managerにログインします。

1. 上部の「Adobe Experience Manager」リンクをクリックし、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」をクリックします。
1. **グローバルプロファイル** タイルをクリックします。
1. 「**XML エディター設定**」タブを選択し、上部の「**編集** アイコンをクリックします
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。
1. この変更は、グローバルレベルまたはフォルダーレベルのプロファイルで行うことができます。 この変更を行う場所に応じて、それぞれの ui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、[XML web エディターの設定とカスタマイズ ](conf-folder-level.md#id2065G300O5Z) を参照してください。

1. `ditaAttributes` 定義を検索します。

   `ditaAttributes` のデフォルト定義は次のとおりです。

   ```
   "ditaAttributes": {
                           "attributes": [],
                           "constraint": false,
                           "required": {}
                           },
   ```

1. `required` パラメーターを次のように変更します。

   ```
   "required": {"navtitle": true}
   ```

   `true` に設定すると、「**ナビゲーションタイトル属性の更新** ボタンが有効になり、エディターツールバーに表示されます。 `false` に設定するか、空のままにすると、ボタンはエディターで非表示のままになります。
1. ファイルを保存します。

1. 対応するプロファイル \（グローバルまたはフォルダー\）にファイルをアップロードします。


この設定では、マップに追加するすべての参照ファイルに、デフォルトで `@navtitle` 属性が含まれます。



**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
