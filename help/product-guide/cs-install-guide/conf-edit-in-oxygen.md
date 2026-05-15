---
title: Oxygenで編集するオプションを設定
description: Oxygen コネクタプラグインで編集するオプションを設定する方法について説明します。
exl-id: 96081a6d-39cf-4697-8b43-6494543ea187
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/cBWLIunbSxmmPxc5JTFc7z45xhLwWo7EEQj8zR-DpaY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 103
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
