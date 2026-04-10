---
title: Oxygenで編集するオプションを設定
description: Oxygen コネクタプラグインで編集するオプションを設定する方法について説明します。
exl-id: 96081a6d-39cf-4697-8b43-6494543ea187
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '104'
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

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
