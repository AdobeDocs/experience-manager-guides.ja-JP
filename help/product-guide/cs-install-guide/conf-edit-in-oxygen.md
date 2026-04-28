---
title: Oxygenで編集するオプションを設定
description: Oxygen コネクタプラグインで編集するオプションを設定する方法について説明します。
exl-id: 96081a6d-39cf-4697-8b43-6494543ea187
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: ccaf2ead1a9a24ab822298c6b9ef6866a1c32e8c
workflow-type: tm+mt
source-wordcount: '103'
ht-degree: 1%

---

# Oxygenで編集するオプションを設定

AEM Guidesでは、Oxygen コネクタプラグインでDITA トピックとDITA マップを編集することもできます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の（プロパティ）詳細を指定して、**Oxygenで編集** オプションを設定します。



| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.editinoxygen` | ブール値\（true/false\）。 **デフォルト値**: false |

>[!NOTE]
>
> この設定はデフォルトで無効になっており、このオプションはWeb エディターでは使用できません。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
