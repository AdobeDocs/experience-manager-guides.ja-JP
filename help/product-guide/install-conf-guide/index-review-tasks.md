---
title: インデックス作成を実行して、すべてのレビュータスクをコメントパネルに含めます
description: 既存のレビュータスクを、新しいレビュータスクと一緒に表示するようにインデックスを作成する方法をコメントパネルのレビュータスクドロップダウンで説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 7d0c757b647a2e6c5e563f0ed7db6a7225769033
workflow-type: tm+mt
source-wordcount: '219'
ht-degree: 0%

---

# 索引付けを実行して、トピックのすべてのレビュータスクをコメントパネルに含めます

コメント パネルで使用できるトピック ](../user-guide/review-address-review-comments.md#view-all-review-tasks-for-a-topic)のすべてのレビュータスクを[表示すると、作成者はレビュープロジェクトを切り替えることなく、現在開いているトピックに関連付けられている任意のレビュータスク（開いているか閉じられている）を選択できます。 有効にすると、エディターの&#x200B;**コメント** パネルに、トピックが含まれているすべてのレビュータスク、各タスクの状態、および各タスクが属するプロジェクトが一覧表示されます。

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
