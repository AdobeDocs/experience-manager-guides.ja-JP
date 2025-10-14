---
title: UUID ベースのリンクの表示を設定
description: UUID ベースのリンクの表示を設定する方法を学ぶ
exl-id: ab1b0ecf-cb50-4fcd-b36e-d16a8c396054
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '209'
ht-degree: 0%

---

# UUID ベースのリンクの表示を設定 {#id2035G20M0QN}

デフォルトでは、Web エディターで「参照を挿入」または「コンテンツを挿入/再利用」オプションを使用してリンクを作成すると、参照されるコンテンツの UUID を使用してリンクが作成されます。 参照されるコンテンツの **リンク** プロパティ\（プロパティパネル\）は、参照されるコンテンツの相対ファイルパスまたは UUID を表示するように設定できます。 この表示は、configMgr の **UUID を有効にする** オプションによって制御されます。 デフォルトではオンになっています。つまり、参照されるコンテンツの UUID がプロパティパネルに表示されます。

次の手順を実行して、web エディターに参照コンテンツの相対パスまたは UUID を表示します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig* 設定では、「**UUIDs を有効にする**」オプションがデフォルトで有効になっています。 つまり、参照されるコンテンツの UUID がプロパティパネルの **リンク** プロパティに表示されます。

   リンクされたコンテンツの相対パスを表示する場合は、「**UUID を有効にする**」オプションの選択を解除します。

1. 「**保存**」をクリックします。


**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
