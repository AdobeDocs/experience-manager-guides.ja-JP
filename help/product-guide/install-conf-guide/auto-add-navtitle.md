---
title: デフォルトで@navtitle属性を含める
description: デフォルトで属性@navtitle含める方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '440'
ht-degree: 1%

---

# デフォルトで@navtitle属性を含める {#id2115BC0J0XA}

トピック、参照、タスク、\（sub\）マップなど、様々なタイプの参照ファイルをマップに追加できます。 これらのファイルのほとんどは`@navtitle`属性をサポートしています。 しかし、多くの作成者が一貫して使用しているわけではありません。 マップ内のすべての参照ファイルで`@navtitle`属性の使用を強制する場合は、簡単な設定で適用できます。

有効にすると、マップに追加したすべての参照ファイルに、プロパティに`@navtitle`属性が自動的に追加されます。 `@navtitle`は、参照されたコンテンツの`title`要素の値も取得します。

次のタブには、Experience Manager Guides設定に基づいて、参照ファイルのプロパティに`@navtitle`属性をデフォルトで含める手順が表示されます。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. UI設定ファイルをダウンロードするには、管理者としてAdobe Experience Managerにログインします。
1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディターの設定** タブを選択し、上部の&#x200B;**編集** アイコンをクリックします
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。
1. この変更は、グローバルレベルまたはフォルダーレベルのプロファイルで行うことができます。 この変更を行う場所に応じて、それぞれのui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、[XML Web エディターの設定とカスタマイズ &#x200B;](conf-profiles.md#id2065G300O5Z)を参照してください。

1. `ditaAttributes`定義を検索します。

   `ditaAttributes`の既定の定義は次のとおりです。

   ```
   "ditaAttributes": {
                           "attributes": [],
                           "constraint": false,
                           "required": {}
                           },
   ```

1. 次に示すように、`required` パラメーターを変更します。

   ```
   "required": {"navtitle": true}
   ```

   `true`に設定すると、**ナビゲーションタイトル属性**&#x200B;を更新ボタンが有効になり、エディターツールバーに表示されます。 `false`に設定するか、空のままにすると、ボタンはエディターで非表示のままになります。
1. ファイルを保存します。

1. 対応するプロファイル \（グローバルまたはフォルダー\）にファイルをアップロードします。


この設定では、マップに追加するすべての参照ファイルに、デフォルトで`@navtitle`属性が含まれます。

>[!TAB  オンプレミス ]

1. ui\_config.json ファイルをダウンロードします。

   この変更は、グローバルレベルまたはフォルダーレベルのプロファイルで行うことができます。 この変更を行う場所に応じて、それぞれのui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、[XML Web エディターの設定とカスタマイズ &#x200B;](conf-profiles.md#id2065G300O5Z)を参照してください。

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

>[!ENDTABS]

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](customize-overview.md)
