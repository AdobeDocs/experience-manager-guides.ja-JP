---
title: リリースノート | Adobe Experience Manager Guides 5.2.0 サービスパック 4 リリースのリリースノート
description: Adobe Experience Manager Guides 5.2.0 Service Pack 4 リリースのアップグレードプロセスとバグ修正について説明します
role: Leader
TQID: https://experienceleague.adobe.com/HEWV5RxPUfqUYf6m6kQW-fU-LiAM0UFGbfzKjtOCZxk
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
source-git-commit: ad78587f55ec7190443dbbce80f596821ec41f9f
workflow-type: tm+mt
source-wordcount: '528'
ht-degree: 2%
---
# 5.2.0 サービスパック 4 リリース（2026年11月）のリリースノート

この記事では、Adobe Experience Manager Guidesの5.2.0 サービスパック 4 リリースのアップグレード手順、Java SDKの互換性、修正された問題および既知の問題について説明します。

## Java SDKのリソース

カスタム Java プラグインまたはExperience Manager Guidesとの統合を開発する場合は、次の資料を参照してください。 SDKのバージョンが、インストールされているExperience Manager Guides リリースと一致していることを確認します。

| リリース | Java SDK バージョン | Maven Central | Java API リファレンス |
|---|---|---|----|
| 5.2.0 サービスパック 4 （UUID） | 5.2.2 | [AEM Guides SDK API 5.2.2](https://central.sonatype.com/artifact/com.adobe.aem/aem-guides-sdk-api/5.2.2/) | [Javadoc 5.2.2](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api/latest/index.html) |

詳細については、[Maven Central リポジトリ &#x200B;](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/api-reference/introduction)のAPI JARを設定して使用することを参照してください。

## Experience Manager Guidesの5.2.0 Service Pack 4 リリースへのアップグレード

Experience Manager Guides 5.2.0 Service Pack 4 リリースのインストール方法について説明します。

>[!NOTE]
>
>このリリースは、AEM 6.5 LTSでのみ使用できます。 サポートされているサービスパックは、AEM 6.5 LTS サービスパック 2です。

### 前提条件

Experience Manager Guides 5.2.0 Service Pack 4のアップグレードプロセスを開始する前に、バージョン 5.2.0 Service Pack 1を使用していることを確認してください。

### アップグレードプロセス 5.2.0 サービスパック 4 リリース

1. Experience Manager Guides パッケージバージョン 5.2.0 サービスパック 4をダウンロードします。
1. パッケージマネージャー（`/crx/packmgr`）を使用して、パッケージをインスタンスにアップロードします。
1. パッケージをインストールします。 次に、`fmdita` バンドルが&#x200B;**アクティブ**&#x200B;状態に戻ったことを確認します。 バンドルの状態は`/system/console/bundles`で確認できます。
1. ブラウザーのキャッシュを消去します。

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- 別の作成者がそのアセットを移動した後に更新されていないエクスプローラーパネルからマップにアセットをドラッグ&amp;ドロップすると、壊れた参照がマップに追加されます。 （GUIDES-57869）

### アセット管理

- **既存のファイルを上書き** オプションを使用して、画像などの既存のDITA以外のアセットを上書きする場合、アップロードされた画像の新しいバージョンは作成されません。 その結果、ベースラインを使用して生成された出力には、古いアセットが含まれます。 （GUIDES-59287）

- 非UUID設定からUUID設定に移行された画像などの非DITA アセットが元に戻されたり、別のバージョンに分岐されたりすると、そのUUIDは変更されます。 アセットへの既存の参照が解決されなくなり、画像を参照するトピックで画像が壊れて表示されます。 （GUIDES-58414）

### 公開

- 他のマップの書き出し中にマップを公開する場合、出力では元のベクター画像ではなく低画質の画像形式が断続的に使用されます。 （GUIDES-55221）

## 既知の問題

Adobeは、5.2.0 Service Pack 4 リリースで次の既知の問題を特定しました。

- 無効な場所にエレメントをドラッグ&amp;ドロップすると、エディターはエレメントを最も近い有効な位置に移動し、その間に参照がリポジトリパスを保持する場合があります。 同様に、ドラッグ&amp;ドロップを使用してDITA マップ内の既存の参照を置き換えると、新しい参照はそのリポジトリパスを保持する場合があります。 （GUIDES-60688）