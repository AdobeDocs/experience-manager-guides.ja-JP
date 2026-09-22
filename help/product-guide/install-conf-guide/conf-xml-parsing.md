---
title: Cloud Serviceおよびオンプレミス用のXML解析エンティティの設定
description: Cloud ServiceとオンプレミスのXML解析エンティティを設定する方法について説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: e4019ae1e605bd26f7df676a4fab8c632fd8fa8e
workflow-type: tm+mt
source-wordcount: '311'
ht-degree: 1%
---
# XML パーサーエンティティのサイズ制限の設定

Experience Manager Guidesでは、XML パーサーが公開中に受け入れるエンティティサイズの合計に制限を設定できます。 これにより、XML エンティティの拡張攻撃や、サイズが大きすぎるペイロードの処理などの問題を防ぐことができます。

>[!NOTE]
>
>公開時にXML パーサーが受け入れるエンティティサイズの合計に制限を設定して、XML エンティティ拡張攻撃やサイズ超過ペイロードの処理などのリスクを軽減できます。 エンティティティサイズ制限の処理はJava 21とJava 25で異なるため、Java 25にアップグレードする環境では、公開ワークフローがエラーなく引き続き動作するように、設定を確認して検証することをお勧めします。

この設定には、次の2つの関連プロパティが含まれます。

* **Apply XML Parser Total Entity Size Limit** （`dxml.publish.xml.apply.total.entity.size.limit`）: エンティティの合計サイズ制限チェックを有効または無効にします。
* **XML パーサーの合計エンティティサイズ制限** （`dxml.publish.xml.total.entity.size.limit`）：適用フラグが有効になっている場合にセキュア XML パーサーに適用されるJAXP `totalEntitySizeLimit`値（文字）を指定します。

以下のタブには、Experience Manager Guidesの設定に基づいて、これらのプロパティを設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService` | `dxml.publish.xml.apply.total.entity.size.limit` | **デフォルト値：** &quot;true&quot; |
   | `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService` | `dxml.publish.xml.total.entity.size.limit` | **デフォルト値：** &quot;50000000&quot; |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService* バンドルを検索して選択します。

1. 必要に応じて、次の設定を行います。

   * **XML パーサーの合計エンティティ サイズ制限** （`dxml.publish.xml.apply.total.entity.size.limit`）を適用：デフォルトでは、この設定は無効になっています。
   * **XML パーサーの合計エンティティサイズ制限** （`dxml.publish.xml.total.entity.size.limit`）：デフォルトでは、この値は`50000000`文字に設定されています。 この設定は、**XML パーサー合計エンティティサイズ制限**&#x200B;の適用の設定が有効になっている場合にのみ有効になります。

1. 「**保存**」を選択します。

>[!ENDTABS]



