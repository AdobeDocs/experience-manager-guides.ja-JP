---
title: Experience Manager GuidesでのAdobe Workfrontの設定
description: Experience Manager GuidesでのWorkfrontの設定方法を説明します
feature: Authoring
role: Admin
level: Experienced
exl-id: 1f72642c-e694-47cd-9182-f4f4aaf69655
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '532'
ht-degree: 3%

---

# Adobe Workfrontの設定

Adobe Workfrontは、チームや組織が作業を効率的に計画、追跡、管理するのに役立つ、クラウドベースの作業管理ソリューションです。 Experience Manager GuidesとAdobe Workfrontの連携により、Experience Manager Guidesの主要なCCMSに加えて、堅牢なプロジェクト管理機能を利用して、タスクを効率的に計画、割り当て、追跡できます。

Experience Manager Guidesでの[Adobe Workfront統合](../user-guide/workfront-integration.md)の詳細をご覧ください。

## 前提条件

まず、次のことを確認してください。

1. Adobe Workfrontへの標準アクセス権と、Experience Manager Guidesへの管理者アクセス権があります。
2. 次のフィールドを使用して、Experience Manager Guidesに必要な新しいカスタムフォームを[Adobe Workfront](https://experienceleague.adobe.com/ja/docs/workfront/using/administration-and-setup/customize/custom-forms/design-a-form/design-a-form)で作成します。

   | フィールドタイプ | ラベル | 名前 | 選択肢（値を表示を有効） |
   |------------|------|------|-------------------------------|
   | 単一選択ドロップダウン | タスクのタイプ | タスクタイプ | オーサリング（値=オーサー）、公開（値=公開）、翻訳（値=翻訳）、レビュー（値=レビュー） |
   | 単一選択ドロップダウン | タスクの状態 | タスクの状態 | オーサリング（値=オーサー）、公開（値=公開）、翻訳（値=翻訳）、レビュー（値=レビュー） |
   | 書式付きテキスト | オーサーリスト | author-list | - |
   | 書式付きテキスト | 審査担当者一覧 | reviewer-list | - |
   | 1 行のテキスト | URLを確認 | review-url | - |
   | 1 行のテキスト | タスク URL | task-url | - |
   | 1 行のテキスト | メール件名 | email-subject | - |

>[!NOTE]
>
> * 上記の表では、選択肢は、**タスクタイプ** フィールドで使用可能なオプションを表しています。 各オプションについて、**タスク名**&#x200B;と&#x200B;**タスク値**&#x200B;を指定する必要があります。 各タスクタイプの名前と値は、上記の表に記載されているとまったく同じである必要があります。 例えば、タスクタイプ Authorの場合、**Authoring**&#x200B;を名前として、**AUTHOR**&#x200B;を対応する値として指定します。
> * オンプレミスサービスを使用する場合は、電子メール通知で解決されたタスクリンクを正しく受信するために、`localhost`Day CQ Link Externalizer **設定で**&#x200B;が正しいサーバーアドレスに置き換えられていることを常に確認してください。
> * Workfrontでレビュータスクを作成する場合、ユーザー（作成者またはレビューアー）は&#x200B;**workflow-users** グループに属している必要があります。 さらに、**作成者**&#x200B;として&#x200B;**content-authors**&#x200B;および&#x200B;**authors** グループに参加する必要がありますが、**レビュアー**&#x200B;として&#x200B;**レビューアー** グループに参加する必要があります。


## 今すぐ始める

Experience Manager GuidesでAdobe Workfrontを設定するには、次の手順を実行します。

1. **ツールパネル**&#x200B;を開き、**ガイド**&#x200B;を選択します。
2. 「**Workfrontを構成**」を選択します。

   **Workfront設定** ページが表示されます。

   ![](assets/configure-workfront-page.png)

3. **Workfront設定** ページで、組織のWorkfront ドメイン、クライアント ID、およびクライアント秘密鍵の完全なURLを入力します。

   Adobe Workfront設定で設定された&#x200B;**クライアント ID**&#x200B;および&#x200B;**クライアントシークレット** キーにアクセスするには、`Setup >> Systems>> oAuth2 Applications`に移動します。

   Adobe Workfront ドメインの設定について詳しくは、[Workfront統合用のOAuth2 アプリケーションの作成](https://experienceleague.adobe.com/ja/docs/workfront/using/administration-and-setup/configure-integrations/create-oauth-application#create-an-oauth2-application-using-user-credentials-authorization-code-flow)の「認証コード フロー」セクションを参照してください。

4. **ログインを選択して**&#x200B;を確認します。

   Adobe Workfront Signのページにリダイレクトされます。
5. Adobe Workfrontの電子メールアドレスを使用してログインし、**アクセスを許可**&#x200B;を選択して、Oauth2 アプリケーションがそれぞれのAdobe Workfront アカウントにアクセスできるようにします。

   Experience Manager GuidesのWorkfront設定ページに自動的にリダイレクトされます。

6. カスタムフォーム ドロップダウンリストで、Experience Manager Guides用に作成したAdobe Workfront カスタムフォームを選択します。 [前提条件](#prerequisites)を表示します。
7. 「**保存して閉じる**」を選択して、Workfront設定の変更を適用および保存します。

設定が完了したら、[Experience Manager Guidesと同じ電子メールアドレスを使用してAdobe Workfront](https://experienceleague.adobe.com/ja/docs/workfront/using/administration-and-setup/add-users/create-manage-users/add-users)にユーザーを追加します。
