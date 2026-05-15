---
title: AEM サイト出力の有効なファイル名を設定する
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
exl-id: 1e69d6f8-7baf-4189-bbbd-34cd0fec6634
feature: Filename Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/vGe4--XJ9VL5q74J7hVFCmD0vrBRnUkBAdZDCFcUxeU
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ccd46b93-df7f-4458-ba4c-90a3562d9ab0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 139
ht-degree: 0%

---

# AEM サイト出力の有効なファイル名を設定する {#id214GK0X0KXA}

DITA トピックで許可される有効なファイル名文字のリストと同様に、AEM サイト出力用に有効なファイル名文字のリストを設定することもできます。 URLで許可されていない既知の文字の一部：```'<>`@$```。 これらの文字は、AEM サイトの出力ファイル名を生成する際に見つかった場合に、自動的にアンダースコア「_」に変換するように設定されています。 AEM サイト出力で有効な文字を設定できる設定は、`com.adobe.fmdita.common.SanitizeNodeNameImpl` バンドルに存在します。 **AEM サイトの出力ファイル名にアンダースコアで置き換える文字を含めるには、「AEM Sites**&#x200B;への公開時に許可されていない文字セット」設定を設定します。

**親トピック：**&#x200B;[&#x200B; ファイル名の設定](conf-file-names.md)
