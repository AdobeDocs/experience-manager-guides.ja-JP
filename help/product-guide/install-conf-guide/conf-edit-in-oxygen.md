---
title: Oxygenで編集するオプションを設定
description: Oxygen コネクタプラグインで編集するオプションを設定する方法について説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 41ecbbb2-81c3-473d-b48b-7370a74a6474
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: '104'
ht-degree: 1%

---

# Oxygen for Cloud Serviceで編集するオプションを設定します

AEM Guidesでは、Oxygen コネクタプラグインでDITA トピックとDITA マップを編集することもできます。

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、次の（プロパティ）詳細を指定して、**Oxygenで編集** オプションを設定します。



| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.editinoxygen` | ブール値\（true/false\）。 **デフォルト値**: false |

>[!NOTE]
>
> この設定はデフォルトで無効になっており、このオプションはエディターでは使用できません。

**親トピック：**[ エディターのカスタマイズ ](customize-overview.md)
