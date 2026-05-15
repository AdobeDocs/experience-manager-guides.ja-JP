---
title: 生成後のワークフロー
description: ポストジェネレーションワークフローの概要（例）
exl-id: e19fdc0b-0ec6-46ce-81ed-e9490d12c029
feature: Workflow Configuration
role: User, Admin
TQID: https://experienceleague.adobe.com/GmpUvIwR5aDOIQ4RNUXoeOeQB3MrueRuxpvYBwYev4I
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b455a250-64c4-4598-b015-7b6b6dc528b1
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 327
ht-degree: 2%

---

# AEM Guides パブリッシング – ポストジェネレーションワークフロー

AEM Guidesでは、出力後の生成ワークフローを柔軟に指定できます。 AEM Guidesを使用して生成された出力に対して、いくつかの後処理タスクを実行できます。
例えば、PDF出力に特定のプロパティを設定する場合や、出力が生成されたら、一連のユーザーにメールを送信する場合があります。


## ポストジェネレーションワークフローを利用するためのステップは何ですか

### ワークフロープロセスの作成

生成された出力に対して操作を実行するJavaまたはECMA ベースのワークフロープロセスを作成します。 例えば、一部のメタデータをソースから生成されたコンテンツにコピーしたり、生成された出力のメタデータを操作したりします。
- ECMA スクリプトを使用してそのようなプロセスを作成する例を紹介します（添付パッケージを参照できます）
- Java ベースのワークフロープロセスについては、[&#x200B; インストールおよび設定ガイド &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_Installation-Configuration-Guide_EN.pdf#page=119)の「*出力後の生成ワークフローのカスタマイズ*」の節を参照してください


### ワークフローモデルの作成

前の手順で作成したカスタムワークフロープロセスを使用して、ワークフローモデルを作成し、そのプロセスステップを追加します。
- また、ワークフローの最後のステップとして、必須のプロセスステップ「*後世代を最終決定*」を追加する必要があります。

次に示すサンプルワークフローモデルを参照してください。

![生成後のワークフローモデル &#x200B;](../assets/workflows/pgwf-workflow-model.png)


### マップ上のこのポストジェネレーションワークフローを使用

ポストジェネレーションワークフローは、AEM Guides パブリッシュメカニズム内の任意の出力プリセットで設定できるプロパティです。 例：

![出力プリセットのポストジェネレーションワークフロー](../assets/workflows/pgwf-preset-settings.png)


選択したモデルが既に作成されていると仮定します。


### テスト

これで、このプリセットを使用して公開を実行し、プロセスステップ出力を検証できます


## サンプル

参考までに、以下のパッケージを使用してパッケージマネージャーを介してインストールし、サンプルのポストジェネレーションワークフロー（*上記のスクリーンショットで参照）をテストできます*

[ECMA ベースの生成後ワークフローモデルのサンプル](../assets/workflows/sample-pgwf-ecma-test-wfmetadata.zip)
