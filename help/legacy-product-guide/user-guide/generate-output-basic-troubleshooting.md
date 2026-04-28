---
title: 基本的なトラブルシューティング
description: AEM Guidesの基本的なトラブルシューティングの問題を解決します。 テキストエディターでログファイルを表示、コピー、確認し、JSP コンパイルエラーを解決する方法について説明します。
feature: Publishing, Troubleshooting
role: User
hide: true
exl-id: f85fee0f-30d1-453f-8700-781e0be8f616
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '690'
ht-degree: 0%

---

# 基本的なトラブルシューティング {#id1821I0Y0G0A}

AEM Guidesの操作中に、ドキュメントを公開または開く際にエラーが発生する可能性があります。 このようなエラーは、DITA マップ、トピック、またはAEM Guides プロセス自体で発生する可能性があります。 この節では、出力生成ログファイルの情報にアクセスして解析する方法について説明します。 また、DITA トピックが大きすぎる場合は、JSP コンパイルエラーが発生する可能性があります。 この節では、JSP コンパイルエラーの解決方法についても説明します。

## ログファイルの表示と確認 {#id1822G0P0CHS}

出力生成ログファイルを表示して確認するには、次の手順を実行します。

1. 出力生成プロセスを開始したら、DITA マップコンソールで「**出力**」をクリックします。

   **生成出力**&#x200B;の&#x200B;**General**&#x200B;列には、出力生成の成功または失敗に関する視覚的なヒントを与えるアイコンが表示されます。

   ![](images/output-general-settings.png){width="300" align="left"}

   上記のスクリーンショットでは、1番目と3番目のアイコンに出力の生成に失敗したことが表示されています。 2番目のアイコンは、出力の生成に成功したが、メッセージが表示されていることを示します。 最後の1つは、メッセージのない出力生成の成功です。

1. ジョブが完了したら、**生成日時**&#x200B;列のリンクをクリックします。

   ログファイルが新しいタブで開きます。

   ![](images/log-file.png){width="800" align="left"}

1. 次のフィルターを適用して、ログファイル内のテキストを強調表示します。
   - 致命的：ログファイルの致命的なエラーをピンク色で強調表示します。
   - エラー：ログファイルのエラーをオレンジ色でハイライト表示します。
   - 警告：ログファイルの警告を紫色でハイライト表示します。
   - 情報：ログファイル内の情報メッセージを青色でハイライト表示します。
   - 例外：ログファイル内の例外を黄色でハイライト表示します。
1. 上下のナビゲーションボタンを使用して、ログファイル内のハイライト表示されたテキストにジャンプします。

   Alternatively, scroll through the log file and check the messages.


## Copy and check the log file in a text editor

Perform the following steps to copy and check the output generation log file in a text editor:

1. 出力生成プロセスを開始したら、DITA マップコンソールで「**出力**」をクリックします。

1. ジョブが完了したら、**生成日時**&#x200B;列のリンクをクリックします。

   ログファイルが新しいタブで開きます。

1. Click **Copy Log** button. The log file is copied to the clipboard.
1. Open a text editor and paste the log file in the editor.

1. Scroll through the log file and check for messages.

   The following information will help you determine whether there is an error in the DITA file or AEM Guides process:

   - *DITA map file related error*: In case there is an error found in the DITA map file or any other file contained in the DITA map, the log file will contain a string, &quot;BUILD FAILED&quot;. You can check the information given in the log file to locate the erroneous file and fix the issue.

   In the following sample log file snippet, you can see the `BUILD FAILED` message along with the reason for the error.

   ![](images/dita-error-in-log-file.png){width="650" align="left"}

   - *AEM Guides-related error*: The other type of error that you can identify in the log file is related to AEM Guides process itself. In this case, the DITA map file is parsed successfully, but the output generation process fails because of some internal error in AEM Guides. For such kind of errors, you have to seek help from the technical support team.

   In the following sample log file snippet, you can see the `BUILD SUCCESSFUL` message, followed by other technical error.

   ![](images/process-error-in-log-file.png){width="650" align="left"}


## Resolve JSP compilation error

If your DITA topic is too large, then you might see the JSP compilation error \(`org.apache.sling.api.request.TooManyCallsException`\) in your browser. This error might appear when you open a topic for editing, reviewing, or publishing.

Perform the following steps to resolve this issue:

1. From the Global Navigation, select Tools and choose Operations \> Web Console.

   The Adobe Experience Manager Web Console Configuration page appears.

1. Search for and click on the *Apache Sling Main Servlet* component.

   Apache Sling Main Servletの設定可能なオプションが表示されます。

1. Increase the value for the *Number of Calls per Request* parameter as per your requirements.


**親トピック：**&#x200B;[&#x200B;出力生成](generate-output.md)
