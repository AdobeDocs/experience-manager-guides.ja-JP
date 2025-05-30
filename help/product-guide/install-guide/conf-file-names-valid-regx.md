---
title: 有効なファイル名文字に対して正規表現を設定
description: 有効なファイル名文字に対して Regx を設定する方法を説明します
exl-id: 876dfc77-078f-4341-b99d-02a453d2e065
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '396'
ht-degree: 0%

---

# 有効なファイル名文字に対して正規表現を設定 {#id214BD0550E8}

AEM Guides 3.8 リリース以降、管理者は、ファイル名で使用できる有効な特殊文字のリストを定義できます。 以前のリリースでは、`@`、`$`、`>` などの特殊文字を含むファイル名を定義できていました。 これらの特殊文字により、DITA Map ダッシュボードからトピックを開く際や、目次のトピックのリンクをクリックする際に問題が発生し、URL に特殊文字が含まれているのでページが開かないことがあります。

有効なファイル名文字の正規表現を定義できる設定を使用すると、システム内でのファイルの命名方法を完全に制御できます。 ファイル名に使用できる特殊文字のリストを定義できます。 デフォルトでは、有効なファイル名設定には「`a-z A-Z 0-9 - _`」が含まれています。 新しいファイルを作成する際、ファイルのタイトルには任意の特殊文字を使用できますが、内部的には、ファイル名では「`-`」に置き換えられます。 例えば、ファイルのタイトルを「Introduction 1」または「Introduction@1」とすることができ、これらの場合に生成される対応するファイル名は「Introduction-1」になります。

有効な文字のリストを定義する場合、これらの文字「`*/:[\]|#%{}?&<>"/+`」は常に「`-`」に置き換えられることに注意してください。

有効な特殊文字リストを設定しないと、ファイル作成プロセスで予期しない結果が生じる場合があります。 このようなエラーを回避するには、ビルドを 3.8 リリースにアップグレードした後、すぐに設定を変更することを強くお勧めします。

ファイル名に有効な\（または許可された\）文字を使用するように regx を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索してクリックします。

1. **Regex for Valid Characters** プロパティで、プロパティが\[-a-zA-Z0-9\_\] に設定されていることを確認します。 このリストにさらに文字を追加できますが、これらの基本文字を含み、リストをハイフン「–」で始める必要があります。

   >[!NOTE]
   >
   > このプロパティはファイル名にのみ適用され、フォルダー名には適用されません。

1. 「**保存**」をクリックします。


>[!NOTE]
>
> 有効なファイル名文字のリストと同様に、AEM Site 出力の有効なファイル名文字のリストも指定できます。 詳しくは、[AEM サイト出力に有効なファイル名を設定する ](conf-file-names-valid-regx-aem-site-output.md#) を参照してください。

**親トピック：**&#x200B;[ ファイル名の設定 ](conf-file-names.md)
