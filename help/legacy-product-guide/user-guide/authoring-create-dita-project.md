---
title: DITA プロジェクトの作成
description: AEM Guidesでテンプレートを使用して DITA プロジェクトを作成します。 DITA プロジェクトを使用してレビューを開始する方法を説明します。
feature: Reviewing
role: User
hide: true
exl-id: 1b29c50a-04d0-4052-b893-44fb8bcc3c97
source-git-commit: 7286c3fb36695caa08157296fd6e0de722078c2b
workflow-type: tm+mt
source-wordcount: '468'
ht-degree: 0%

---

# DITA プロジェクトの作成 {#id1645HA00NM6}

AEM Guidesには、レビュータスクの作成と管理に使用できる DITA プロジェクトテンプレートが用意されています。

DITA プロジェクトを作成し、それを使用してレビューを開始できます。 プロジェクトを使用すると、期限を定義し、プロジェクトを作成したレビュータスクを完了するために必要なタスクと時間を制御できます。

チームメンバーをプロジェクトに追加すると、作成者、レビュー担当者、公開者など、様々な役割をプロジェクトに割り当てることができます。

DITA プロジェクトを作成したら、Web エディタまたはAssets UI からレビューを開始できます。 詳しくは、[ レビュー用のトピックの送信 ](review-send-topics-for-review.md#) を参照してください。

同様に、作成者がレビューワークフローを開始するたびに、プロジェクトの選択されたメンバーにメール通知が届きます。 メール通知を設定するには、Adobe Experience Manager Guides as a Cloud Serviceのインストールと設定の *メールテンプレートのカスタマイズ* を参照してください。

DITA プロジェクトを作成するには、以下の手順を実行します。

1. プロジェクトコンソールを開きます。

   次の URL を使用して、プロジェクトコンソールにアクセスすることもできます。

   ```http
   http://<server name>:<port>/projects.html
   ```

1. **作成** \> **プロジェクト** をクリックして、プロジェクトを作成ウィザードを起動します。

   ![](images/project-console-63.png){width="650" align="left"}

1. 「プロジェクトを作成」ページで、「**DITA プロジェクト**」テンプレートを選択し、「**次へ**」をクリックします。

1. プロジェクトプロパティページで、次の詳細を入力します。

   「**基本** タブの情報：

   ![](images/create-project.png){width="650" align="left"}

   - プロジェクトの **タイトル**、**説明** および **期限** を入力します。

   - 必要に応じて、プロジェクトのサムネールを選択できます。

   - デフォルトでは、あなたはプロジェクトの所有者になります。 このプロジェクトにさらにユーザーを追加するには：

   1. **ユーザー** ドロップダウンリストからユーザーを入力または選択します。

   1. 作成者、レビュー担当者または公開者からユーザータイプを選択します。

      >[!NOTE]
      >
      >このドロップダウンリストには他のユーザーのタイプが表示されますが、DITA プロジェクトの場合は、作成者、レビュー担当者、または公開者のユーザーのタイプのみを選択してください。 異なるタイプのユーザーを追加しても、そのユーザーはAEM Guidesで使用可能な DITA 固有の機能にアクセスできません。

   1. 「**追加**」をクリックします。

      >[!NOTE]
      >
      >AEM Guides バージョン 3.5 以前を使用している場合は、DITA マップファイルを選択して、トピックの編集、プレビュー、レビューのワークフローの主要な参照を解決するオプションが表示されます。 3.6 以降のバージョンでは、web エディターを使用してルートマップを設定できます。 詳しくは、Web エディターの [ ユーザー環境設定 ](web-editor-features.md#id2087G0P40SB) を参照してください。 ルートマップを設定するもう 1 つの方法は、グローバルプロファイルまたはフォルダーレベルのプロファイルでルートマップを設定することです。 詳細については、『インストールと設定ガイド』の *グローバルプロファイルまたはフォルダーレベルのプロファイルの設定* を参照してください。

   「**詳細** タブの情報：

   - プロジェクトの名前を入力します。 この名前は、このプロジェクトの URL を作成するために使用されます。

1. 「**作成**」をクリックします。

   プロジェクトが作成されましたダイアログが表示されます。

1. **開く** をクリックして、プロジェクトページを開きます。


**親トピック：**&#x200B;[ トピックまたはマップを確認する ](review.md)
