---
title: メタデータプロパティの無視リストの設定
description: AEM Guidesでメタデータプロパティの無視リストを設定する方法について説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: '250'
ht-degree: 0%

---

# メタデータプロパティの無視リストの設定

ファイルを編集すると、**ファイルのプロパティ**&#x200B;で使用可能なメタデータフィールドへの変更、またはドキュメント版のアスタリスク（*）をバックエンドトリガーに適用します。 システム生成のメタデータ更新がこのインジケーターに影響を与えるのを防ぐために、管理者はメタデータプロパティの無視リストを設定できます。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、次の（プロパティ）詳細を指定して、ダーティバージョン **の**&#x200B;無視メタデータプロパティを設定します。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.dirtychecker.ignoremetadata` | `<comma-separated list / array of metadata properties>` |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig*&#x200B;設定で、**ダーティ バージョン** オプションのメタデータ プロパティを無視に移動します。

   現在無視するように設定されているデフォルトのメタデータプロパティのリストを確認します。

1. 要件に従ってメタデータプロパティを追加または削除します。
1. **保存**&#x200B;を選択して、更新された設定を保存します。


>[!ENDTABS]

## 無視リストのデフォルトのメタデータプロパティ

AEM Guidesには、デフォルトのメタデータプロパティのセットが無視リストに含まれています。 このリストを変更して、必要に応じてメタデータプロパティを追加または削除できます。

* &quot;jcr:mixinTypes&quot;,
* &quot;jcr:primaryType&quot;,
* &quot;jcr:frozenMixinTypes&quot;,
* &quot;jcr:frozenPrimaryType&quot;,
* &quot;jcr:frozenUuid&quot;,
* &quot;jcr:uuid&quot;,
* &quot;dam:extracted&quot;,
* &quot;jcr:lastModified&quot;,
* &quot;jcr:lastModifiedBy&quot;,
* &quot;dc:modified&quot;,
* &quot;dam:sha1&quot;,
* &quot;dam:size&quot;,
* &quot;guides:wordCount&quot;,
* &quot;dam:scene7UploadTimeStamp&quot;,
* 「dam:scene7LastModified」

無視リストに含まれていないメタデータプロパティのみが、ドキュメントのバージョンをダーティとマークするために考慮されます。

**親トピック：**[ エディターのカスタマイズ ](customize-overview.md)
