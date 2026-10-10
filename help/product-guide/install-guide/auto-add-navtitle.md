---
title: デフォルトで@navtitle属性を含める
description: デフォルトで属性@navtitle含める方法を説明します
exl-id: 3def20dc-dd24-4526-ae36-45708249d34a
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/bwVOZrkVrn6QPq7BoUttFvnFAzdLIL6--JGCoHYkA0o'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
    internal-label: Profiles
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '221'
ht-degree: 1%
---
# デフォルトで@navtitle属性を含める {#id2115BC0J0XA}

トピック、参照、タスク、\（sub\）マップなど、様々なタイプの参照ファイルをマップに追加できます。 これらのファイルのほとんどは`@navtitle`属性をサポートしています。 しかし、多くの作成者が一貫して使用しているわけではありません。 マップ内のすべての参照ファイルで`@navtitle`属性の使用を強制する場合は、簡単な設定で適用できます。

有効にすると、マップに追加したすべての参照ファイルに、プロパティに`@navtitle`属性が自動的に追加されます。 `@navtitle`は、参照されたコンテンツの`title`要素の値も取得します。

参照ファイルのプロパティにデフォルトで`@navtitle`属性を含めるには、次の手順を実行します。

1. ui\_config.json ファイルをダウンロードします。

   この変更は、グローバルレベルまたはフォルダーレベルのプロファイルで行うことができます。 この変更を行う場所に応じて、それぞれのui\_config.json ファイルをダウンロードする必要があります。 ui\_config.json ファイルのダウンロードについて詳しくは、[XML エディターの設定とカスタマイズ ](conf-folder-level.md#id2065G300O5Z)を参照してください。

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
