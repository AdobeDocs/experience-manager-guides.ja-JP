---
title: 通知を使用したレビュータスクの再割り当て
description: AEM Guidesの通知を使用してレビュータスクを再割り当てする。 インボックス通知からレビュー担当者タスクを再割り当てする方法を理解する。
feature: Reviewing
role: User
hide: true
exl-id: 3e43206b-c1a3-43ba-a4e5-c45c68c8b941
source-git-commit: ea597cd14469f21e197c700542b9be7c373aef14
workflow-type: tm+mt
source-wordcount: '263'
ht-degree: 0%

---

# 通知を使用したレビュータスクの再割り当て {#id21BNH03M0KS}

自分に割り当てられたレビュータスクを、同じレビュープロジェクトに追加された別のユーザーに再割り当てすることができます。 レビュータスクの再割り当ては、インボックスに配信されるレビュー通知から簡単に行うことができます。 ただし、レビュー担当者は、レビュータスクを個々のユーザーにのみ再割り当てでき、通知を使用するユーザーグループには再割り当てできません。

再割り当ては、レビュー担当者タスクに対してのみ実行でき、所有者タスクに対しては実行できないことに注意してください。

1. **レビュー担当者タスク**：レビューのレビュー担当者に割り当てられたタスク。
1. **所有者タスク**：所有者に対してのみ作成されるタスク。 レビュータスクを作成してレビュー担当者に割り当てると、その所有者は Close &lt; レビュータスク名\> \（たとえば close-reviewtask1\）という名前の所有者タスクも受け取りますが、この所有者タスクを誰にも再割り当てすることはできません。

インボックス通知からレビュータスクを再割り当てするには、次の手順を実行します。

1. インボックスでレビュータスク通知を選択します。
1. 上部の **再割り当て** アイコンを選択します。
1. タスクを再割り当てするユーザー名を選択します。

   >[!IMPORTANT]
   >
   > レビュー担当者は、再割り当ての権限を持ち、ユーザー管理者グループの一員である必要があります。

   ![](images/reassign-user-inbox.png){width="800" align="left"}

1. 「**再割り当て**」を選択します。

レビュータスクが再割り当てされると、「担当者」列には、タスクが再割り当てされたレビュー担当者の名前が表示されます。

割り当てられたレビュー担当者は、再び割り当てられたレビュータスクのインボックスで通知を受け取ります。

**親トピック：**&#x200B;[ トピックまたはマップを確認する ](review.md)
