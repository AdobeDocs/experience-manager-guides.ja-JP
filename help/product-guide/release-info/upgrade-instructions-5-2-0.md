---
title: リリースノート | Adobe Experience Manager Guides 5.2.0 リリースのアップグレード手順
description: 互換性マトリックスと、Adobe Experience Manager Guidesの5.2.0 リリースにアップグレードする方法について説明します。
source-git-commit: a2d4731af4f4996c87dd177a6e45f1d8ebabd6cf
workflow-type: tm+mt
source-wordcount: '859'
ht-degree: 4%

---

# 5.2.0 リリース（2026年5月）のアップグレード手順

この記事では、Adobe Experience Manager Guidesの5.2.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[5.2.0 リリースの新機能](../release-info/whats-new-5-2-0.md)を参照してください。

このリリースで修正された問題のリストについては、「[5.2.0 リリースで修正された問題](../release-info/fixed-issues-5-2-0.md)」を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 5.2.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

| AEM ガイド | AEM のバージョン | サービスパック |
| --- | --- | --- |
| 5.2.0 （UUID） | 6.5 LTS | 2 |
| 5.2.0 （UUID） | 6.5 | 24, 23, 22 |

詳細については、『オンプレミス インストールおよび設定ガイド』の「[技術要件](../install-guide/download-install-technical-requirements.md)」セクションを参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS | FM |
| --- | --- | --- |
| 5.2.0 （UUID） | サポート対象 | 2026年以降 |

### Oxygen コネクタ

| リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 5.2.0 （UUID） | 3.8-uuid.1 | 3.8-uuid.1 | 2.3 | 2.3 |

### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |

### 新しいAEM サイトテンプレートのバージョン


| AEM ガイド | AEM バージョン | コンポーネントバージョン | サイトバージョン |
|---|---|---| ---|
| 5.2.0 UUID | 6.5 LTS | guides-components.all-1.4.1 | 該当なし |
| 5.2.0 UUID | 6.5 | guides-components.all-1.4.0 | aemg-sites-template-1.3.0 |

## 前提条件

Experience Manager Guides 5.2.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 5.0.0、5.0.3、5.1.0、5.1.3、または5.1.4にアップグレードしました。
1. （オプション）すべての翻訳タスクを閉じました。
1. `com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` クラスのログレベルを&#x200B;**INFO**&#x200B;に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。

## Experience Manager Guides 5.2.0のアップグレードパス

現在のバージョンのExperience Manager Guidesを、**AEM 6.5**&#x200B;または&#x200B;**AEM 6.5 LTS**&#x200B;のバージョン 5.2.0に簡単にアップグレードできます。

>[!IMPORTANT]
>
> - **AEM 6.5 LTS**&#x200B;の場合：Experience Manager Guides 5.2.0は、AEM 6.5 LTS サービスパック 2でのみサポートされます。
> - **AEM 6.5**&#x200B;の場合：Experience Manager Guides 5.2.0は、AEM 6.5 Service Pack 24、23、および22でのみサポートされています。
> - 現在AEM 6.5を使用しており、AEM 6.5 LTSに移行する予定がある場合は、Experience Manager Guides 5.2.0 アップグレードを進める前に、必ずAEM アップグレードを完了してください。 詳しくは、[Adobe Experience Manager（AEM） 6.5 LTS](https://experienceleague.adobe.com/ja/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)へのアップグレードを参照してください。

Experience Manager Guidesのバージョン 5.2.0へのアップグレードを進める前に、次の点を考慮する必要があります。

- バージョン 5.0.0、5.0.3、5.1.0、5.1.3または5.1.4を使用している場合は、バージョン 5.2.0に直接アップグレードできます。
- バージョン 4.6.3、4.6.4、5.0.xを使用している場合は、バージョン 5.1.0に直接アップグレードできます。
- バージョン 4.6.0、4.6.1を使用している場合、バージョン 5.1.0にアップグレードする前に、バージョン 4.6.3または4.6.4または5.0.0にアップグレードする必要があります。
- バージョン 4.3.x、4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または4.1.xを使用している場合は、バージョン 5.1.0にアップグレードする前にバージョン 4.4にアップグレードする必要があります。
- バージョン 4.0を使用している場合は、バージョン 4.3.xにアップグレードする前にバージョン 4.2にアップグレードする必要があります。
- バージョン 3.8.5を使用している場合は、バージョン 4.2にアップグレードする前にバージョン 4.0にアップグレードする必要があります。
- 3.8.5より前のバージョンを使用している場合は、[Adobe Experience Manager Guides ヘルプ Experience Manager Guides アーカイブ &#x200B;](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドの「PDFのアップグレード」セクションを参照してください。

## Experience Manager Guides 5.2.0のアップグレードプロセス

>[!IMPORTANT]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から5.2.0 バージョンのパッケージをダウンロードします。
1. アップグレードするバージョンパッケージをインストールし、バンドルがインストールされるまで待ちます。
1. *（オプション）* アップグレード Oxygen コネクタプラグインは、アップグレード先のバージョンでリリースされました。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. 以前にキャプチャしたコンテンツのソースビューの検索と置換機能にアクセスするための設定`Enable markup find and replace`を有効にしている場合は、`guidesAssetLucene` インデックスを再インデックスする必要があります。 詳細については、「検索と置換[&#128279;](../install-conf-guide/custom-indexing-on-prem.md)」の インデックス再作成を参照してください。
1. システム設定を更新して、バージョン 5.2.0で導入された新しい設定を組み込み、次の機能強化をサポートするようにします。


| 追加された設定 | 設定ファイル | 設定のラベルを表示 | 設定の名前 |
|-----|-----|------|-----|
| 新規エディターを有効または無効にする | `com.adobe.fmdita.config.ConfigManager` | エディター2.0を有効にする | `enable.markup.editor` |
| 新規ベースラインを有効または無効にする | `com.adobe.fmdita.config.ConfigManager` | より高速なベースライン（v2）の有効化 | `enable.baseline.v2` |
| バージョンをダーティとしてマークするためのメタデータプロパティを無視 | `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | ダーティバージョンのメタデータプロパティを無視 | `xmleditor.dirtychecker.ignoremetadata` |
| Source ビューでの機能の検索と置換 | `com.adobe.fmdita.config.ConfigManager` | マークアップの検索と置換を有効にする | `enable.markup.findreplace` |
| 古いベースラインのピアリンクのスキップを有効または無効にする | `com.adobe.fmdita.config.ConfigManager` | ベースライン V1のピア リンクをスキップ | `guides.baseline.v1.skip.peer.links` |
| 翻訳ワークフローのソースコンテンツを使用した宛先コピーの初期化を有効または無効にします。これは、従来の翻訳ワークフローが無効になっている場合にのみ適用されます。  | `com.adobe.fmdita.config.ConfigManager` | ソースコンテンツを使用した宛先言語コピーの初期化 | `translation.workflow.propagate.source.content` |
| 参照ストアのクリーンアップ | `com.adobe.fmdita.config.ConfigManager` | ガイドのツリー削除有効 | `btree.deletion.enabled` |
| DITA アセットレプリケーション | `com.adobe.fmdita.config.ConfigManager` | DITA アセットのレプリケート | `publish.replicate` |
| アセット処理 | `com.adobe.fmdita.config.ConfigManager` | Guides アセット処理スケジュール ジョブを有効にする | `enable.asset.processing.scheduler` |

これらの設定設定について詳しくは、[設定の更新](../install-conf-guide/configuration-on-prem.md)を参照してください。







