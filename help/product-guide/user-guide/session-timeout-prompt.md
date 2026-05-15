---
title: Experience Manager Guidesのセッションタイムアウトについて
description: Experience Manager Guidesのセッションタイムアウトについて説明します。
feature: Authoring, Publishing
role: User
exl-id: f09b1215-4753-4dfd-89ef-1629257e5efe
TQID: https://experienceleague.adobe.com/nrxkVxSUooy2-08PaUp1pjiH8w2kBBNGC9efarvepbQ
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 249
ht-degree: 0%

---

# Experience Manager Guidesが特定の期間が経過した後にログアウトするのはなぜですか？

Experience Manager Guidesは、定義された非アクティブ期間（アイドルタイムアウト）の後にユーザーセッションを終了します。 この自動ログアウト機能は、Adobe Experience Managerで設定されます。 セッションの有効期限が切れると、ポップアップアラートが表示され、期限切れのセッションについてユーザーに通知されます。 このアラートは、コンテンツに対するユーザーの変更を制限します。

**セッションのタイムアウトの仕組みはどのようになっていますか？**

Experience Manager Guidesは、セッションを検証するために、30秒ごとにバックグラウンドリクエスト `token.json`を送信します。 セッションがまだアクティブな場合は、有効なトークンが返されます。 非アクティブが原因でセッションが期限切れになった場合、空のトークンが返され、セッションは非アクティブと見なされます。

**セッションの有効期限が切れるとどうなりますか？**

非アクティブなセッションが検出された場合：

- ログアウトしたことを知らせるポップアップアラートが表示されます。

  ![](images/sign-out-prompt.png)

- アラートは、アプリケーションとのすべてのインタラクションを無効にします。

- **OK**&#x200B;を選択すると、ブラウザーが更新され、ログインページに移動します。
- ログインすると、Experience Manager Guidesの最後に開いたページにリダイレクトされます。

**次の手順**

セッション有効期限アラートは、非アクティブセッション中にアプリケーションに変更を加えることを制限することで、データの損失を防ぐのに役立ちます。 コンテンツの誤った損失を避けるために、特に長期にわたってシステムから離れる前に、エディターで定期的に作業を保存することをお勧めします。
