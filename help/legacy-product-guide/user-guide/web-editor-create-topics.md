---
title: トピックの作成
description: AEM Guidesの Web エディタでカスタムテンプレートを使用して DITA トピックのタイプを作成する方法を説明します。
feature: Authoring
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '596'
ht-degree: 0%

---

# トピックの作成 {#id2056AL00O5Z}

AEM Guidesでは、トピック、タスク、コンセプト、リファレンス、用語集、DITAVAL など、タイプの DITA トピックを作成できます。 標準のテンプレートに基づいてトピックを作成する以外に、カスタムテンプレートを定義することもできます。 これらのテンプレートは、テンプレート選択ブループリントと web エディターに表示するために、フォルダープロファイルに追加する必要があります。

グローバルおよびフォルダープロファイル設定は、フォルダーレベルの管理者ユーザーのみが使用できます。 グローバルプロファイルおよびフォルダーレベルのプロファイルの設定について詳しくは、お使いの設定に合わせたAdobe Experience Manager Guidesのインストールと設定の *オーサリングテンプレートの設定* を参照してください。

トピックを作成するには、以下の手順を実行します。

1. Assets UI で、トピックを作成する場所に移動します。

1. 新しいトピックを作成するには、**作成** \> **DITA トピック** をクリックします。

1. 「ブループリント」ページで、作成する DITA 文書のタイプを選択し、「**次へ**」をクリックします。

   ![](images/create_dita_topic.png){width="800" align="left"}

   デフォルトでは、AEM Guidesは最もよく使用される DITA トピックテンプレートを提供します。 組織の要件に応じて、より多くのトピックテンプレートを設定できます。詳しくは、「セットアップ用のAdobe Experience Manager Guidesのインストールと設定」の *オーサリングテンプレートの設定* を参照してください。

   >[!NOTE]
   >
   > Assets UI のリストビューでは、「Type」列に「Topic」、「Task」、「Concept」、「Reference」、「Glossentry」、または「DITAVAL」として DITA トピックタイプが表示されます。 DITA マップは Map として表示されます。

1. プロパティページで、ドキュメント **タイトル** を指定します。

1. \（オプション\） ファイル **名前** を指定します。

   管理者が UUID 設定に基づいて自動的にファイル名を設定している場合、ファイル名を指定するオプションは表示されません。 UUID ベースのファイル名がファイルに自動的に割り当てられます。

   ファイル命名オプションが使用可能な場合は、ドキュメントの **タイトル** に基づいて名前が自動的に提案されます。 ドキュメント名を手動で指定する場合は、**Name** にスペース、アポストロフィ、または中括弧が含まれず、.xml または.dita で終わっていることを確認してください。 デフォルトでは、AEM Guidesはすべての特殊文字をハイフンに置き換えます。 DITA ファイルの命名のベストプラクティスについては、ベストプラクティスガイドのファイル名の節を参照してください。

1. 「**作成**」をクリックします。「トピックを作成しました」のメッセージが表示されます。

   トピックを Web エディタで開いて編集するか、またはトピック ファイルをAEM リポジトリに保存するかを選択できます。

   Assets UI **Create** \> **DITA Topic** または Web Editor から新しいトピックを作成するたびに、一意のトピック ID が割り当てられます。 この ID の値はファイル名自体です。 また、新しいドキュメントは、トピックの最新の作業用コピーとして DAM に保存されます。 新しく作成したトピックのリビジョンを保存するまで、バージョン履歴にバージョン番号は表示されません。 編集するトピックを開くと、トピック ファイルのタブの右上隅にバージョン情報が表示されます。

   ![](images/topic-version-none_cs.png){width="550" align="left"}

   新しく作成したトピックのバージョン情報は *なし* と表示されます。 新しいバージョンを保存すると、そのバージョンには 1.0 というバージョン番号が割り当てられます。新しいバージョンの保存の詳細については、「[ 新しいバージョンとして保存 ](web-editor-features.md#save-as-new-version-id209ME400GXA)」を参照してください。


>[!NOTE]
>
> 管理者が編集前にファイルをチェックアウトするように Web エディタを設定している場合、チェックアウトするまでファイルを編集することはできません。 同様に、これが設定されていると、チェックアウトされたファイルを閉じる前にチェックインするよう求められます。

>[!IMPORTANT]
>
> DITA トピックを作成したら、作業コピーへの変更を保存し続け、トピックの更新が完了したら新しいバージョンを作成します。

**親トピック：**[ トピックの作成とプレビュー ](create-preview-topics.md)