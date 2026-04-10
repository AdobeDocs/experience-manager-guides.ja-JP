---
title: デフォルトで@navtitle属性を含める
description: デフォルトで属性@navtitle含める方法を説明します
exl-id: 38711c0c-efa8-461a-92e1-ecfcdcdd36d3
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '327'
ht-degree: 0%

---

# デフォルトで@navtitle属性を含める {#id2115BC0J0XA}

トピック、参照、タスク、\（sub\）マップなど、様々なタイプの参照ファイルをマップに追加できます。 これらのファイルのほとんどは`@navtitle`属性をサポートしています。 しかし、多くの作成者が一貫して使用しているわけではありません。 マップ内のすべての参照ファイルで`@navtitle`属性の使用を強制する場合は、簡単な設定で適用できます。

有効にすると、マップに追加したすべての参照ファイルに、プロパティに`@navtitle`属性が自動的に追加されます。 `@navtitle`は、参照されたコンテンツの`title`要素の値も取得します。

参照ファイルのプロパティにデフォルトで`@navtitle`属性を含めるには、次の手順を実行します。

1. UI設定ファイルをダウンロードするには、管理者としてAdobe Experience Managerにログインします。

1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディターの設定** タブを選択し、上部の&#x200B;**編集** アイコンをクリックします
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。
1. この変更は、グローバルレベルまたはフォルダーレベルのプロファイルで行うことができます。 この変更を行う場所に応じて、それぞれのui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、[XML Web エディターの設定とカスタマイズ ](conf-folder-level.md#id2065G300O5Z)を参照してください。

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



**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
