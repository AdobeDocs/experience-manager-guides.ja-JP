---
title: JSON
description: Web エディターとマップダッシュボードから JSON プリセットを作成する方法を説明します。 AEM Guidesで JSON 出力プリセットを設定します。
feature: Publishing
role: User
hide: true
exl-id: dbc082e9-e75e-414d-a1d1-41f919b345af
source-git-commit: 1426cdaecdd358f06e76908b09330e65997e8452
workflow-type: tm+mt
source-wordcount: '715'
ht-degree: 0%

---

# JSON {#id231KK0180T4}

Web エディターから JSON プリセットを作成できます。

リポジトリパネルのマップビューで DITA マップファイルを開き、「出力」タブで「+」アイコンを選択して出力プリセットを作成します。次に、「プリセットを追加」ダイアログの「タイプ」ドロップダウンから「JSON」を選択します。

Web エディターでは、次の設定が「一般 **タブの下に整理されて** ます。

- 出力パス
- インデックスファイル
- \（条件がマップに対して定義されている場合\）を使用して条件を適用します
- ベースラインの使用\（マップのベースラインが作成された場合\）
- 一時ファイルを保持
- 出力に反映するプロパティ
- 生成後のワークフロー

詳しくは、[JSON 設定 ](#id231KJA00REJ) を参照してください。


**JSON 設定**

JSON プリセットには次のオプションを使用できます。

>[!NOTE]
>
> また、Web エディターで JSON ファイルを編集することもできます。

| JSON オプション | 説明 |
| --- | --- |
| 出力パス | JSON 出力が保存されるAEM リポジトリ内のパス。 |
| インデックスファイル | JSON 出力用に作成するインデックスファイルの名前を指定できます。 デフォルトでは、DITA マップのファイル名が選択され、サフィックス （`map_filename_index.json` など）が追加されます。<br><br> インデックスファイルの設定時に変数を使用することもできます。 変数の使用について詳しくは、[ 宛先パス、サイト名、ファイル名のオプションを設定するための変数の使用 ](generate-output-use-variables.md#id18BUG70K05Z) を参照してください。 |
| 次を使用して条件を適用 | 次のいずれかのオプションを選択します。<br><br>* **適用なし**：公開済みの出力に条件を適用しない場合は、このオプションを選択します。<br>* **DITAVAL ファイル**: パーソナライズされたコンテンツを生成するには、DITAVAL ファイルを選択します。 参照ダイアログを使用するか、ファイルパスを入力して、複数の DITAVAL ファイルを選択できます。 削除するには、ファイル名の近くにある十字のアイコンを使用します。 DITAVAL ファイルは指定された順序で評価されるため、最初のファイルで指定された条件は、後のファイルで指定された一致条件よりも優先されます。 ファイルを追加または削除することで、ファイルの順序を維持できます。 DITAVAL ファイルが他の場所に移動されたり、削除されても、マップ ダッシュボードから自動的には削除されません。 ファイルが移動または削除された場合は、場所を更新する必要があります。 ファイル名の上にマウスポインターを置くと、AEM リポジトリ内でファイルが格納されているパスが表示されます。 DITAVAL ファイルのみを選択できます。他のファイル タイプを選択した場合は、エラーが表示されます。<br>* **条件プリセット**：出力の公開中に条件を適用する条件プリセットをドロップダウンから選択します。 このオプションは、DITA マップコンソールの「条件プリセット」タブに存在する条件を追加した場合に表示されます。 条件プリセットについて詳しくは、「[ 条件プリセットの使用 ](generate-output-use-condition-presets.md#id1825FL004PN)」を参照してください。 |
| ベースラインの使用 | 選択した DITA マップにベースラインを作成した場合、このオプションを選択して、公開するバージョンを指定します。<br><br> 詳しくは、「[ ベースラインの操作 ](generate-output-use-baseline-for-publishing.md#id1825FI0J0PF) を参照してください。 |
| 一時ファイルを保持 | このオプションを選択すると、DITA-OT によって生成された一時ファイルが保持されます。 DITA-OT 経由で出力を生成するときにエラーが発生した場合は、このオプションを選択して一時ファイルを保持します。 その後、これらのファイルを使用して、出力生成エラーのトラブルシューティングを行うことができます。<br> <br> 出力を生成したら、「**一時ファイルをダウンロード**![ 一時ファイルをダウンロード」アイコン ](images/download-temp-files-icon.png) アイコンを選択して、一時ファイルを含む ZIP フォルダーをダウンロードします。<br><br> **メモ**：生成中にファイルプロパティが追加された場合、出力一時ファイルには、それらのプロパティを含む *metadata.xml* ファイルも含まれます。 |
| 出力に反映するプロパティ | メタデータとして処理するプロパティを選択します。 これらのプロパティは、DITA マップまたはブックマップファイルの「プロパティ」 ページから設定されます。 ドロップダウンリストから選択したプロパティが、「プロパティ」フィールドの下に表示されます。<br><br>**注意**: DITA-OT パブリッシングを使用して、カスタムプロパティを定義し、メタデータを出力に渡すこともできます。 詳しくは、[ メタデータの操作 ](metadata-dita.md#id21BJ00QD0XA) を参照してください。 |
| 生成後のワークフロー | このオプションを選択すると、新しいポスト生成ワークフローのドロップダウンリストが表示され、AEMで設定されたすべてのワークフローが表示されます。 出力生成ワークフローの完了後に実行するワークフローを選択する必要があります。<br><br>**注意**：カスタムの出力後生成ワークフローの作成について詳しくは、『Adobe Experience Manager Guides as a Cloud Serviceのインストールと設定 _ガイドの_ 出力後生成ワークフローのカスタマイズ」を参照してください。 |

**親トピック：**&#x200B;[ 出力プリセットについて ](generate-output-understand-presets.md)
