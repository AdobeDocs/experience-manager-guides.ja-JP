---
title: Oxygen で編集するオプションを設定します
description: 酸素コネクタプラグインで編集するオプションを設定する方法を説明します。
exl-id: 96081a6d-39cf-4697-8b43-6494543ea187
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '104'
ht-degree: 1%

---

# Oxygen で編集するオプションを設定します

AEM Guidesでは、Oxygen コネクタプラグインで DITA トピックと DITA マップを編集することもできます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、「**酸素で編集** オプションを設定するために、次の（プロパティ）の詳細を指定します。



| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.editinoxygen` | ブール \（true/false\） **デフォルト値**:false |

>[!NOTE]
>
> この設定はデフォルトで無効になっており、オプションは web エディターでは使用できません。

**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
