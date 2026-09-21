---
title: リリースノート | Adobe Experience Manager Guides 5.2.0 Service Pack 1 リリースの新機能
description: Adobe Experience Manager Guidesの5.2.0 Service Pack 1 リリースの新機能と強化機能について説明します
role: Leader
TQID: https://experienceleague.adobe.com/dXXQ1YvVduT11vvF5qyXHLqnuo1xMKkAb5I-EoD2JAA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
source-git-commit: 788d0b9a2e2f07d2990bcc4f984f3ba4a4aabf17
workflow-type: tm+mt
source-wordcount: '390'
ht-degree: 0%
---
# 5.2.0 Service Pack 1 リリース（2026年9月）の新機能

この記事では、Adobe Experience Manager Guidesのバージョン 5.2.0 サービスパック 1で導入された新機能と強化機能について説明します。

このリリースで修正された問題のリストについては、「[5.2.0 サービスパック 1 リリースの修正済みの問題](fixed-issues-5-2-0-sp1.md)」を参照してください。

5.2.0 サービスパック 1 リリース [&#128279;](../release-info/upgrade-instructions-5-2-0-sp1.md)の アップグレード手順について説明します。


## Experience Manager Guides、MCP サポートを追加

Experience Manager Guidesは、Model Context Protocol （MCP）をサポートするようになりました。 クラウドやカーソルなどのAI ツールを、カスタム作業なしでGuidesに接続できます。 このバージョンでは、認証済みユーザーは、単一のMCP エンドポイントを通じて、Guidesをヘッドレスシステムとして使用し、トピックとマップの管理、ベースラインの作成と書き出し、レポートの生成を既存のAEM権限の下で実行できます。 これにより、ドキュメントチームは、AI アプリケーションとエージェントを使用してより効率的に作業できるようになります。

詳しくは、[Adobe Experience Manager Guides MCP Serverの使用](../install-conf-guide/conf-aem-guides-mcp.md)を参照してください。


## 新しいエディターで外部データソースと引用のサポートが利用可能になりました

新しいエディターでは、既存の2つのExperience Manager Guides機能がサポートされるようになりました。外部データソースと接続し、ドキュメント内の引用を使用する機能です。

作成者は、新規エディターでコンテンツを作成または更新しながら、設定済みの外部データソースを引き続き使用できます。 引用もサポートされているため、作成者は編集者を切り替えることなく、コンテンツ内の参照を追加および管理できます。

## AMA引用スタイルのサポート

Experience Manager Guidesは現在、米国医師会（AMA）の引用スタイルをサポートしており、既存の引用フレームワークを、ヘルスケア、規制、ライフサイエンスの分野のお客様が必要とするドキュメント基準に適合するように拡張しています。

**Workspace settings**&#x200B;で引用文スタイルとしてAMAを選択すると、数値上付けレンダリング、連続番号、正確な参照リストの順序など、AMA ガイドラインに従って引用文が自動的に書式設定されます。 エディターの「**引用を解析**」オプションは、AMAが選択されている場合にのみ使用でき、作成者はコンテキストを切り替えずに引用を追加および解析できます。

AMAの引用スタイルは、ネイティブPDFおよびAEM Sitesの出力形式でサポートされています。 引用スタイルを設定するには、**Workspace settings**&#x200B;に移動し、引用スタイルオプションからAMAを選択します。 詳しくは、[引用文の操作](../user-guide/web-editor-apply-citations.md)を参照してください。


