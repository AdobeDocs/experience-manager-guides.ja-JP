---
title: EXPERIENCE MANAGER GUIDES リリースのAPI アップデート
description: Experience Manager Guides リリースの様々なAPI アップデートについて説明します
source-git-commit: 24637376024107ae575620e5491c0150da6cc956
workflow-type: tm+mt
source-wordcount: '500'
ht-degree: 7%

---


# EXPERIENCE MANAGER GUIDES リリースのAPI アップデート

この記事では、Adobe Experience Manager Guides リリースのSwagger ドキュメントで、新しく追加されたAPIについて詳しく説明します。 AEM インターフェイスからSwagger ドキュメントにアクセスするには、**ツール** > **ガイド** > **API Swagger**&#x200B;に移動します。

<table style="border: 1; border-collapse: collapse; table-layout:fixed">
    <tr>
        <td colspan="5"><strong>リリース 2026.08.0</strong></td>
    </tr>
    <tr>
        <td>機能</td>
        <td>サブフィーチャー</td>
        <td>メソッド</td>
        <td>API</td>
        <td>説明</td>
    </tr>
    <tr>
        <td rowspan="7"><b>Assets</b></td>
        <td rowspan="7"></td>
        <td>POST</td>
        <td>'/bin/guides/v1/asset/import'</td>
        <td>1つ以上のアセットをターゲットフォルダーに読み込み、マルチパートアップロードと競合解決をサポート</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/asset/list'</td>
        <td>フォルダーのパスの下にあるアセットのページ分割リストを返します</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/asset/validatexml'</td>
        <td>DITA XMLの整形性、スキーマの有効性、conrefの整合性を検証します</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/asset/version/revert'</td>
        <td>アセットを指定したバージョンに戻します</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/asset/currentversion/detail'</td>
        <td>現在のバージョンの詳細（バージョン名、ダーティステータス、ラベルなど）を返します。</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/assets/status'</td>
        <td>特定のパスの下にあるアセットのGuides ステータスを確認するために、非同期ジョブを開始します</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/assets/status'</td>
        <td>アセットステータスジョブのステータス/結果をジョブ IDで取得します</td>
    </tr>
    <tr>
        <td rowspan="3"><b>公開</b></td>
        <td rowspan="3"></td>
        <td>POST</td>
        <td>'/bin/guides/v1/output/generate'</td>
        <td>プリセット実行を開始して、マップの出力を生成します</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/output/status'</td>
        <td>マップパスと生成IDで、単一の出力生成のステータスを返します</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/output/status/list'</td>
        <td>マップパス用に生成されたすべてのプリセットのステータスを返します</td>
    </tr>
    <tr>
        <td rowspan="18"><b>翻訳</b></td>
        <td rowspan="6">言語</td>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/language/copies'</td>
        <td>パスまたはUUIDによるアセットの言語コピー</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/language/groups'</td>
        <td>フォルダープロファイルの言語グループ</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/language/list'</td>
        <td>翻訳言語（フィルタリング済み）をサポート</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/language/root'</td>
        <td>アセットパスで使用できるルート言語</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/language/variable'</td>
        <td>タイプおよび言語コード別の言語変数</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/language/variable'</td>
        <td>言語変数を作成、更新、または削除します</td>
    </tr>
    <tr>
        <td rowspan="7">プロジェクト</td>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/project/create'</td>
        <td>DITA マップの翻訳プロジェクトの作成/更新</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/project/sync'</td>
        <td>翻訳プロジェクト（同期フロー）の作成/更新</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/project/creationstatus'</td>
        <td>パス別のプロジェクトの翻訳同期ステータス</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/project/existing'</td>
        <td>現在のユーザーの既存の翻訳プロジェクト</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>'/bin/guides/v1/translation/project/inprogress'</td>
        <td>特定のアセットの進行中のプロジェクト</td>
    </tr>
    <tr>
        <td>削除</td>
        <td>'/bin/guides/v1/translation/project/delete'</td>
        <td>アセット翻訳のステータス/プロパティの削除前更新</td>
    </tr>
    <tr>
        <td>削除</td>
        <td>'/bin/guides/v1/translation/project/job/delete'</td>
        <td>ジョブを削除する前にアセットステータスの事前削除更新</td>
    </tr>
    <tr>
        <td rowspan="5">参照</td>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/reference/accept'</td>
        <td>ジョブの子ページから翻訳済みコンテンツを受け入れる</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/reference/reject'</td>
        <td>ジョブの子ページから翻訳されたコンテンツを拒否</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/reference/sync'</td>
        <td>宛先フォルダーでの言語コピーの作成</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/reference/baseline/export'</td>
        <td>翻訳ベースラインを宛先言語にエクスポート</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>'/bin/guides/v1/translation/reference/status/forcesync'</td>
        <td>非同期アセットを非同期アセットに強制更新する</td>
    </tr>
</table>
