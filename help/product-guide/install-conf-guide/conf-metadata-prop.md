---
title: メタデータプロパティの無視リストの設定
description: AEM Guidesでメタデータプロパティの無視リストを設定する方法について説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: f74c71d6a4a293bfbae55e9e57c62b7478d0a88a
workflow-type: tm+mt
source-wordcount: '180'
ht-degree: 1%

---

# メタデータプロパティの無視リストの設定

ファイルを編集すると、**ファイルのプロパティ**&#x200B;で使用可能なメタデータフィールドへの変更、またはドキュメント版のアスタリスク（*）をバックエンドトリガーに適用します。 システム生成のメタデータ更新がこのインジケーターに影響を与えるのを防ぐために、管理者はメタデータプロパティの無視リストを設定できます。

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、次の（プロパティ）詳細を指定して、ダーティバージョン **のメタデータプロパティを無視オプションを設定します。**


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.dirtychecker.ignoremetadata` | `<comma-separated list / array of metadata properties>` |

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

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](customize-overview.md)
