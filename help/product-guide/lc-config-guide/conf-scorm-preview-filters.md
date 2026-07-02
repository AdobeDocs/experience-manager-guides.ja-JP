---
title: SCORM プレビューフィルターの設定
description: SCORM プレビューフィルターの設定方法を説明します
feature: Configuration
role: Admin
level: Experienced
source-git-commit: f5b7ae41fe63b31a3b45b38fc73976987a2a5ebe
workflow-type: tm+mt
source-wordcount: '344'
ht-degree: 3%

---

# SCORM プレビューの設定

この記事では、Experience Manager Guides SCORM プレビューを設定して、SCORM プレビュー出力でスタイルシート、画像、フォント、メディア、および埋め込みコンテンツの提供を許可する外部ドメインを管理する方法について説明します。 次の手順では、使用している設定に応じて、SCORM プレビュー用のさまざまなフィルターを設定する方法について説明します。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)の手順を使用します。

1. 設定ファイルで、次のプロパティの詳細を指定します。

   | PID | プロパティキー | デフォルト値 |
   |---|---|---|
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.style.src` | `https://fonts.googleapis.com` |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.img.src` | - |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.font.src` | `https://fonts.gstatic.com` |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.media.src` | - |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.frame.src` | `https://www.youtube-nocookie.com`, `https://www.youtube.com` |


1. 設定ファイルを保存し、Cloud Service環境にデプロイします。

保存すると、SCORM プレビューで、更新されたドメインの適用が開始されます許可リストに加える。 この設定に追加されていないドメインの外部リソースは、プレビューでは使用できません。

>[!NOTE]
>
> これはプレビュー環境にのみ適用されます。ダウンロード可能なSCORM パッケージは、意図したとおりに作成されたすべてのコンテンツを引き続き配信します。


>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **Guides SCORM プレビューフィルター（com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter）** バンドルを検索して選択します。

   ![](assets/scorm-preview-filters.png){width="600"}


1. バンドル設定で、必要に応じて各リソースタイプの許可されたドメイン URLを追加します。

   | フィールド | 説明 |
   |---|---|
   | **追加のstyle-src ホスト** | 外部CSS スタイルシートの読み込みが許可されているドメイン （デフォルトは`https://fonts.googleapis.com`）。 |
   | **追加のimage-src ホスト** | 外部イメージの読み込みが許可されているドメイン。 |
   | **追加のfont-src ホスト** | 外部フォントファイル（OTF、WOFFなど）の読み込みが許可されているドメイン（デフォルトでは`https://fonts.gstatic.com`）。 |
   | **追加のmedia-src ホスト** | 外部メディアファイルの読み込みが許可されているドメイン。 |
   | **追加のframe-src ホスト** | iframe コンテンツの埋め込みが許可されているドメイン（デフォルトでは、`https://www.youtube.com`、YouTube ビデオの埋め込みが許可されます）。 |

1. 「**保存**」を選択します。

保存すると、SCORM プレビューで、更新されたドメインの適用が開始されます許可リストに加える。 この設定に追加されていないドメインの外部リソースは、プレビューでは使用できません。

>[!NOTE]
>
> これはプレビュー環境にのみ適用されます。ダウンロード可能なSCORM パッケージは、意図したとおりに作成されたすべてのコンテンツを引き続き配信します。

>[!ENDTABS]