---
title: インデックス作成を実行して、すべてのレビュータスクをコメントパネルに含めます
description: 既存のレビュータスクを、新しいレビュータスクと一緒に表示するようにインデックスを作成する方法をコメントパネルのレビュータスクドロップダウンで説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '219'
ht-degree: 0%
---
# 索引付けを実行して、トピックのすべてのレビュータスクをコメントパネルに含めます

コメント パネルで使用できるトピック [&#128279;](../user-guide/review-address-review-comments.md#view-all-review-tasks-for-a-topic)のすべてのレビュータスクを表示すると、作成者はレビュープロジェクトを切り替えることなく、現在開いているトピックに関連付けられている任意のレビュータスク（開いているか閉じられている）を選択できます。 有効にすると、エディターの&#x200B;**コメント** パネルに、トピックが含まれているすべてのレビュータスク、各タスクの状態、および各タスクが属するプロジェクトが一覧表示されます。

デフォルトでは、この機能がインスタンスで有効になっている場合、レビュータスクは作成時にインデックスが作成されるので、このドロップダウンで自動的に使用できます。

ただし、Experience Manager Guidesがインスタンスにデプロイされている時点でこの機能が無効になっている場合、無効のままの間に作成されたレビュータスクにはインデックスが付きません。 管理者として、そのようなレビュータスクが既に存在する後に機能を有効にすると、インデックスが作成されるまで、これらのタスクはドロップダウンに表示されません。 それらを使用できるようにするには、1回限りのスクリプトを実行して、既存のレビュータスクをインデックス化する必要があります。

次のcURL コマンドを1回実行して、既存のレビュータスクをインデックス化します。

```bash
curl --location 'http://<host>:<port>/bin/guides/script/start' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic <base64-encoded-credentials>' \
--header 'Cookie: cq-authoring-mode=TOUCH' \
--data-urlencode 'jobType=review-topic-guids-migration'
```
