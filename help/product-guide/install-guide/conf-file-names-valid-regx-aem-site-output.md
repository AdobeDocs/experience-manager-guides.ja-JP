---
title: AEM サイト出力の有効なファイル名を設定する
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
exl-id: 1e69d6f8-7baf-4189-bbbd-34cd0fec6634
feature: Filename Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '141'
ht-degree: 0%

---

# AEM サイト出力の有効なファイル名を設定する {#id214GK0X0KXA}

DITA トピックで許可される有効なファイル名文字のリストと同様に、AEM サイト出力用に有効なファイル名文字のリストを設定することもできます。 URLで許可されていない既知の文字の一部：```'<>`@$```。 これらの文字は、AEM サイトの出力ファイル名を生成する際に見つかった場合に、自動的にアンダースコア「_」に変換するように設定されています。 AEM サイト出力で有効な文字を設定できる設定は、`com.adobe.fmdita.common.SanitizeNodeNameImpl` バンドルに存在します。 **AEM サイトの出力ファイル名にアンダースコアで置き換える文字を含めるには、「AEM Sites**&#x200B;への公開時に許可されていない文字セット」設定を設定します。

**親トピック：**[ ファイル名の設定](conf-file-names.md)
