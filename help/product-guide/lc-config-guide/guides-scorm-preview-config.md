---
title: SCORM プレビュー用のコンテンツ セキュリティ ポリシーの設定
description: Cloud Managerの環境変数を使用して、SCORM プレビュー用のコンテンツセキュリティポリシーを設定する方法について説明します
feature: Authoring
role: User
source-git-commit: 730fe6021aa20aa2b57801807da0f471f84a7718
workflow-type: tm+mt
source-wordcount: '538'
ht-degree: 3%

---


# SCORM プレビュー用のコンテンツ セキュリティ ポリシー（CSP）の設定

Experience Manager Guides SCORMのプレビューは、プレビューエクスペリエンスに適用されるコンテンツセキュリティポリシー（CSP）を管理する専用の環境変数を通じて管理されます。 設定を有効にすると、管理者は信頼できるソースを追加して拡張できます。 これらのソースには、SCORM パッケージがExperience Manager Guidesでプレビューを正しく読み込んでレンダリングするために必要なスクリプト、スタイル、フォント、画像、メディア、フレームなどが含まれます。

この記事では、Cloud Managerで環境変数を追加および設定する方法、JSON値の各フィールドの機能の概要、必要に応じて後で値を更新する方法について説明します。

## 設定フィールド

変数`GUIDES_SCORM_PREVIEW_CONFIG`は、JSON オブジェクトをその値として受け入れます。 各値は、SCORMのプレビュー中に適用されるCSPの特定の側面を制御します。

| フィールド | 種類 | 説明 |
|---|---|---|
| `CSP_ENABLED` | ブーリアン | SCORM プレビューのCSP実行をオン （`true`）またはオフ （`false`）にします。 |
| `ALLOW_UNSAFE_EVAL` | ブーリアン | `true`に設定した場合、`eval()`および同様の安全でないJavaScriptの評価方法の使用を許可します。 |
| `ADDITIONAL_SCRIPT_SRC` | 配列 | JavaScriptへのサービスを可能にする追加の信頼できるソース。 |
| `ADDITIONAL_STYLE_SRC` | 配列 | スタイルシートの提供に使用できる信頼できるソースが追加されました。 |
| `ADDITIONAL_FONT_SRC` | 配列 | フォントの提供を可能にする、追加の信頼できるソース。 |
| `ADDITIONAL_FRAME_SRC` | 配列 | `<iframe>`要素の中で追加の信頼できるソースを読み込むことができます。 |
| `ADDITIONAL_IMG_SRC` | 配列 | 画像の提供を可能にする追加の信頼できるソース。 |
| `ADDITIONAL_MEDIA_SRC` | 配列 | オーディオ/ビデオコンテンツの提供を可能にする追加の信頼できるソース。 |
| `ADDITIONAL_WORKER_SRC` | 配列 | Web ワーカーにサービスを提供できる追加の信頼できるソース。 |
| `ADDITIONAL_CONNECT_SRC` | 配列 | プレビューが接続できる追加の信頼できるソース（例：XHR/フェッチ呼び出し）。 |
| `ADDITIONAL_MANIFEST_SRC` | 配列 | Web アプリマニフェストの提供に使用できる追加の信頼できるソース。 |
| `ADDITIONAL_OBJECT_SRC` | 配列 | `<object>`、`<embed>`または`<applet>`を介して追加の信頼できるソースを読み込むことができます。 |


## 設定フィールドのデフォルト値

```json
{
  "CSP_ENABLED": true,
  "ALLOW_UNSAFE_EVAL": false,
  "ADDITIONAL_STYLE_SRC": ["https://fonts.googleapis.com"],
  "ADDITIONAL_FONT_SRC": ["https://fonts.gstatic.com"],
  "ADDITIONAL_FRAME_SRC": ["https://www.youtube-nocookie.com", "https://www.youtube.com"],
  "ADDITIONAL_SCRIPT_SRC": [],
  "ADDITIONAL_WORKER_SRC": [],
  "ADDITIONAL_IMG_SRC": [],
  "ADDITIONAL_MEDIA_SRC": [],
  "ADDITIONAL_CONNECT_SRC": [],
  "ADDITIONAL_MANIFEST_SRC": [],
  "ADDITIONAL_OBJECT_SRC": []
}
```

必要に応じて、すべての値を入力する必要はありません。追加のオリジンを許可する必要がない場合は、ソースタイプを空の配列として残します。

>[!NOTE]
>
> SCORM プレビューのCSP適用を無効にする場合は、JSON値に`"CSP_ENABLED": false`を設定します。

## Cloud Managerでの変数の追加

1. Cloud Managerにログインし、設定を適用する環境を選択します。
2. 環境の「**設定**」タブに移動します。
3. 環境変数を追加するには、**追加/更新**&#x200B;を選択します。

   ![&#x200B; クラウドマネージャーに新しい変数を追加する](assets/add-new-variable.png){width="650"}

4. **名前** フィールドに変数（`GUIDES_SCORM_PREVIEW_CONFIG`）の名前を入力します。

   ![名前フィールドに変数の名前を追加する](assets/variable-name.png){width="650"}

5. コースに必要なソース許可リストを含む、完全なJSON設定を&#x200B;**値** フィールドに入力します。
6. **Service Applied**&#x200B;を選択して、変数を&#x200B;**作成者**、**公開**、またはその両方に適用するかどうかを選択します。 Experience Manager Guides オーサリングの場合は、**Author**&#x200B;を選択します。
7. 「**タイプ**」フィールドで「**変数**」を選択します。
8. 「**追加**」を選択します。
9. 「**保存**」を選択します。

   ![環境に適用するための変数の保存](assets/save.png){width="650"}

保存すると、Cloud Managerは選択した環境に設定を適用します。 通常、10～12分で反映されるため、更新が完了するまでの時間が長くなります。 完了すると、その環境でSCORM プレビュー用に新しい設定がアクティブになります。

## 変数値の更新

要件が変更された場合は、Cloud Managerの同じ「設定」タブからいつでも`GUIDES_SCORM_PREVIEW_CONFIG`変数を再確認できます。 既存の変数を探し、**追加/更新** オプションを選択して編集用に開き、必要に応じて値を変更します。