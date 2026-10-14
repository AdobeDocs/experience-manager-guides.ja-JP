---
title: 新しいPDF エンジンを有効にする
description: Experience Manager Guidesで新しいPDF エンジンを有効にする方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: f89becea89888f7dec81e18c9220dcabda8f4e7d
workflow-type: tm+mt
source-wordcount: '161'
ht-degree: 4%
---

# ネイティブ PDF エンジン v2の設定

ネイティブ PDF用の新しい公開エンジン、つまり&#x200B;_ネイティブ PDF エンジン v2_&#x200B;では、_ネイティブ PDF エンジン v1_&#x200B;の問題に関する更新されたPDF レンダリング機能と修正が提供されます。

>[!BEGINTABS]
>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)の手順を使用します。 設定ファイルで、次の（プロパティ）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|-----|--------------|----------------|
| `com.adobe.fmdita.publish.config.GuidesPublishConfiguratorService` | `guides.publish.config` | `{"PDF_ENGINE": "v2"}` <br> デフォルト値：`v1` |

>[!TAB  オンプレミス ]


オンプレミスのデプロイメントの場合、その可用性はAEMとJavaのバージョンによって異なります。

_ネイティブ PDF エンジン v2_&#x200B;には&#x200B;**Java 17以降**&#x200B;が必要です。

- **AEM 6.5:** AEM 6.5がJava 8で実行されているため、ネイティブ PDF パブリッシング エンジン v2はサポートされていません。
- **AEM 6.5 LTS:** ネイティブ PDF パブリッシング エンジン v2は、デフォルトで有効になっています。 追加の設定は必要ありません。

AEM 6.5 LTSを使用して&#x200B;_Native PDF engine v2_に切り替える場合は、PDF パブリッシャーパッケージをアンインストールします。
CRX Package Managerの`/crx/packmgr/index.jsp#/etc/packages/com.adobe.guides/pdf-publisher-package-3.0.0.zip`。

>[!ENDTABS]

