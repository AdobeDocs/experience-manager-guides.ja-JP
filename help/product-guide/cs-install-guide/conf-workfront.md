---
title: Experience Manager GuidesでのAdobe Workfrontの設定
description: Experience Manager GuidesでWorkfrontを設定する方法を学ぶ
feature: Authoring
role: Admin
level: Experienced
exl-id: 1f72642c-e694-47cd-9182-f4f4aaf69655
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '532'
ht-degree: 3%

---

# Adobe Workfrontの設定

Adobe Workfrontは、チームや組織が作業を効率的に計画、追跡、管理するのに役立つ、クラウドベースの作業管理ソリューションです。 Experience Manager GuidesとAdobe Workfrontの統合により、Experience Manager Guidesのコア CCMS 機能に加えて堅牢なプロジェクト管理機能にアクセスできるため、タスクの計画、割り当て、追跡を効率的に行うことができます。

Experience Manager Guidesでの [Adobe Workfront統合 ](../user-guide/workfront-integration.md) について詳しくは、こちらを参照してください。

## 前提条件

開始する前に、次のことを確認します。

1. Adobe Workfrontへの標準アクセス権とExperience Manager Guidesへの管理者アクセス権があります。
2. 以下のフィールドを使用して、Experience Manager Guidesに必要な [Adobe Workfrontで新しいカスタムフォームを作成 ](https://experienceleague.adobe.com/en/docs/workfront/using/administration-and-setup/customize/custom-forms/design-a-form/design-a-form) します。

   | フィールドタイプ | ラベル | 名前 | 選択肢（値を表示が有効） |
   |------------|------|------|-------------------------------|
   | 単一選択ドロップダウン | タスクのタイプ | タスクタイプ | オーサリング （値=作成者）、パブリッシュ （値= パブリッシュ）、翻訳（値= トランスレーション）、レビュー（値= レビュー） |
   | 単一選択ドロップダウン | タスクの状態 | タスクの状態 | オーサリング （値=作成者）、パブリッシュ （値= パブリッシュ）、翻訳（値= トランスレーション）、レビュー（値= レビュー） |
   | 書式付きテキスト | 作成者リスト | author-list | - |
   | 書式付きテキスト | レビュアーリスト | reviewer-list | - |
   | 1 行のテキスト | レビュー URL | review-url | - |
   | 1 行のテキスト | タスク URL | task-url | - |
   | 1 行のテキスト | メールの件名 | メールの件名 | - |

>[!NOTE]
>
> * 上記の表では、選択肢は「**タスクタイプ** フィールドで使用できるオプションを表しています。 各オプションに対して、**タスク名** と **タスク値** を指定する必要があります。 各タスクタイプの名前と値は、上記の表で説明されたものとまったく同じである必要があります。 例えば、タスクタイプがオーサーの場合は、名前として **オーサリング** を指定し、対応する値として **オーサー** を指定します。
> * オンプレミスのサービスを扱う場合は必ず、メール通知で解決されたタスクリンクを適切に受け取るために、`localhost` を **Day CQ Link Externalizer** 設定の正しいサーバーアドレスに置き換えてください。
> * Workfrontでレビュータスクを作成する場合、ユーザー（作成者またはレビュー担当者）は **workflow-users** グループに属している必要があります。 さらに、**作成者** は **content-authors** グループと **authors** グループに属している必要がありますが、**レビュー担当者** は **レビュー担当者** グループに属している必要があります。


## 今すぐ始める

Experience Manager GuidesでAdobe Workfrontを設定するには、次の手順を実行します。

1. **ツールパネル** を開き、「**ガイド**」を選択します。
2. **Workfrontを設定** を選択します。

   「**Workfront設定**」ページが表示されます。

   ![](assets/configure-workfront-page.png)

3. **Workfront configuration** ページで、組織のWorkfront ドメインの完全な URL、クライアント ID およびクライアントの秘密鍵を入力します。

   Adobe Workfrontの設定で設定された **クライアント ID** および **クライアント秘密鍵** キーにアクセスするには、`Setup >> Systems>> oAuth2 Applications` に移動します。

   Adobe Workfront ドメインの設定について詳しくは、[Workfront統合用の OAuth2 アプリケーションの作成 ](https://experienceleague.adobe.com/en/docs/workfront/using/administration-and-setup/configure-integrations/create-oauth-application#create-an-oauth2-application-using-user-credentials-authorization-code-flow) の認証コードフローの節を参照してください。

4. **ログインして確認** を選択します。

   Adobe Workfrontのログインページにリダイレクトされます。
5. Adobe Workfrontのメールアドレスを使用してログインし、「**アクセスを許可**」を選択して、Oauth2 アプリケーションが対応するAdobe Workfront アカウントにアクセスできるようにします。

   Experience Manager GuidesのWorkfront設定ページに自動的にリダイレクトされます。

6. カスタムフォーム ドロップダウンリストで、Experience Manager Guides用に作成したAdobe Workfront カスタムフォームを選択します。 [ 前提条件 ](#prerequisites) を表示します。
7. **保存して閉じる** を選択し、Workfront設定の変更内容を適用して保存します。

設定が完了したら、Experience Manager Guidesと同じメールアドレスを使用して [Adobe Workfrontにユーザーを追加 ](https://experienceleague.adobe.com/en/docs/workfront/using/administration-and-setup/add-users/create-manage-users/add-users) します。
