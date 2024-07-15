---
title: Post生成のワークフロー
description: 生成後ワークフローの概要と例
exl-id: e19fdc0b-0ec6-46ce-81ed-e9490d12c029
feature: Workflow Configuration
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '306'
ht-degree: 2%

---

# AEM Guidesの公開 – Post生成ワークフロー

AEM Guidesでは、出力後の生成ワークフローを柔軟に指定できます。 AEM Guidesを使用して生成された出力に対して、いくつかの後処理タスクを実行できます。
例えば、PDFの出力に特定のプロパティを設定したり、出力が生成された後に複数のユーザーにメールを送信したりできます。


## Post生成ワークフローを利用するために必要な手順

### ワークフロープロセスの作成

生成された出力に対して操作を実行する Java または ECMA ベースのワークフロープロセスを作成します。 例えば、ソースから生成されたコンテンツに一部のメタデータをコピーしたり、生成された出力のメタデータを操作したりする場合です。
- ECMA スクリプトを使用してプロセスを作成する例を示します（添付パッケージを参照できます）
- Java ベースのワークフロープロセスについては、『インストールおよび設定ガイド [ の「*出力後の生成ワークフローのカスタマイズ*」の節を参照してください ](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_Installation-Configuration-Guide_EN.pdf#page=119)


### ワークフローモデルの作成

前の手順で作成したカスタムワークフロープロセスを使用して、ワークフローモデルを作成し、そのプロセスステップをモデルに追加します。
- また、ワークフローの最後のステップとして、必須のプロセスステップ「*Postの生成を完了*」を追加する必要があります。

以下に示すサンプルワークフローモデルを参照してください。

![Post生成ワークフローモデル ](../assets/workflows/pgwf-workflow-model.png)


### この生成後のワークフローをマップ上で使用

Post生成ワークフローは、AEM Guides公開メカニズム内の任意の出力プリセットに対して設定できるプロパティです。 例：

![ 出力プリセットのPost生成ワークフロー ](../assets/workflows/pgwf-preset-settings.png)


選択したモデルが既に作成されている場合。


### テスト

これで、このプリセットを使用して公開を実行し、プロセスステップの出力を検証できます。


## サンプル

参照用に、以下のパッケージを使用し、パッケージマネージャーを介してインストールして、サンプルの生成後ワークフローをテストできます（*上記のスクリーンショットで参照*）

[ECMA ベースの生成後ワークフローモデルのサンプル](../assets/workflows/sample-pgwf-ecma-test-wfmetadata.zip)
