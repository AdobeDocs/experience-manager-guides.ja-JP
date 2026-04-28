---
title: カスタム
description: Web エディターとマップダッシュボードからカスタムプリセットを作成する方法について説明します。 AEM Guidesでカスタム出力プリセットを設定します。
feature: Publishing
role: User
hide: true
exl-id: b96e6599-f8f3-491a-8b8f-fcb1e0f58aae
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '995'
ht-degree: 1%

---

# カスタム {#id205BEF00PX0}

カスタム出力プリセットは、カスタム DITA-OT プラグインで使用できます。 カスタム DITA-OT出力プリセットを作成して、カスタム DITA-OT プラグインを使用して出力を公開できます。

カスタムプリセットは、次の2つの方法で作成できます。

**Web エディターから：** リポジトリーパネルで、マップビューでDITA マップファイルを開き、「出力」タブで「+」アイコンを選択して出力プリセットを作成し、プリセットを追加ダイアログのタイプドロップダウンから「カスタム」を選択します。

Web エディターでは、「一般」タブと「詳細」タブの下に設定が整理されています。

**一般**

「**一般**」タブには、次の設定が含まれています。

- DITA-OT コマンドライン引数
- 変換名
- ファイル名
- 出力パス
- 条件を適用する\（条件がマップに定義されている場合\）
- ベースラインを使用\（マップにベースラインが作成されている場合\）
- 生成後のワークフロー

**詳細**

「詳細」タブには、次の設定が含まれます。

- 一時ファイルの保持
- ファイルプロパティ

詳しくは、[&#x200B; カスタム設定](#id231KJA00REJ)を参照してください。

**マップダッシュボードから**

PDFの出力プリセットを開くには、Assets UIからDITA マップファイルをクリックし、「出力プリセット」をクリックしてから、「HTML5」オプションをクリックします。 マップダッシュボードで、上部の&#x200B;**編集**&#x200B;をクリックして様々な設定を更新し、**保存**&#x200B;をクリックします。

**カスタム設定**

カスタム出力プリセットでは、次のオプションを使用できます。

| カスタム出力オプション | 説明 |
| --- | --- |
| 出力タイプ | 生成する出力のタイプ。 To generate output using custom DITA-OT plug-in, choose the Custom option. |
| 設定名 | Give a descriptive name for the output settings you are creating. 例えば、_社内ユーザー出力_&#x200B;または&#x200B;_エンドユーザー出力_&#x200B;を指定できます。 |
| DITA-OT コマンドライン引数 | 出力の生成時にDITA-OTで処理する追加の引数を指定します。 DITA-OTでサポートされているコマンドライン引数について詳しくは、[DITA-OT ドキュメント &#x200B;](https://www.dita-ot.org/)を参照してください。 |
| 変換名 | 生成する出力のタイプを指定します。 これは、DITA-OT プラグインに統合された独自のカスタムプラグインを使用して出力を生成する場合に必要です。 例えば、XHTML出力を生成する場合は、`xhtml`を指定します。 DITA-OTで使用可能な変換のリストについては、『 OASIS DITA-OT ユーザーガイド』の「[DITA-OT変換（出力形式） &#x200B;](http://www.dita-ot.org/2.3/user-guide/AvailableTransforms.html)」を参照してください。 |
| ファイル名 | Specify the file name with which you want to save the output.<br><br>**Note**: If you do not provide a file name, then the DITA map&#39;s title is used to generate the final output file name. If the map does not have a title, then the DITA map&#39;s file name is used to name is the final output. ファイル名は、無効な文字を処理するためにシステムで設定されたルールを使用してサニタイズされます。 |
| を使用した条件の適用 | 次のいずれかのオプションを選択します。<br><br>* **適用なし**：公開された出力に条件を適用しない場合は、このオプションを選択します。<br>* **DITAVal ファイル**：パーソナライズされたコンテンツを生成するには、DITAVal ファイルを選択します。 参照ダイアログまたはファイルパスを入力して、複数のDITAVal ファイルを選択できます。 ファイル名の近くにある十字アイコンを使用して削除します。 DITAVal ファイルは指定された順序で評価されるので、最初のファイルで指定された条件は、後のファイルで指定された一致する条件よりも優先されます。 ファイルを追加または削除することで、ファイルの順序を維持できます。 DITAVal ファイルが別の場所に移動されたり、削除されたりした場合、マップダッシュボードから自動的に削除されることはありません。 ファイルが移動または削除された場合は、場所を更新する必要があります。 ファイル名にカーソルを合わせると、ファイルが保存されているAEM リポジトリ内のパスを確認できます。 You can only select DITAVal files and an error is displayed if you have selected any other file type.<br>* **Condition preset**: Select a condition preset from the drop-down to apply a condition while publishing the output. このオプションは、DITA マップコンソールの「条件プリセット」タブに条件を追加した場合に表示されます。 条件プリセットについて詳しくは、[条件プリセットの使用](generate-output-use-condition-presets.md#id1825FL004PN)を参照してください。 |
| 宛先のパス | EPub出力が保存されるAEM リポジトリ内のパス。 |
| 一時ファイルの保持 | DITA-OTで生成された一時ファイルを保持するには、このオプションを選択します。 DITA-OTを使用して出力を生成する際にエラーが発生した場合は、一時ファイルを保持するためにこのオプションを選択します。 その後、これらのファイルを使用して、出力生成エラーのトラブルシューティングを行うことができます。<br> <br>出力を生成したら、**一時ファイルをダウンロード** ![一時ファイルをダウンロード アイコン &#x200B;](images/download-temp-files-icon.png) アイコンを選択して、一時ファイルを含むZIP フォルダーをダウンロードします。<br><br> **メモ**: ファイルのプロパティが生成中に追加された場合、出力された一時ファイルには、それらのプロパティを含む&#x200B;*metadata.xml* ファイルも含まれます。 |
| 生成後のワークフローの実行 | このオプションを選択すると、AEMで設定されたすべてのワークフローを含む新しいポストジェネレーションワークフローのドロップダウンリストが表示されます。 出力生成ワークフローの完了後に実行するワークフローを選択する必要があります。<br><br>**注**: カスタム出力後の生成ワークフローの作成について詳しくは、「_出力後の生成ワークフローをカスタマイズする_」を参照してください。Adobe Experience Manager Guides as a Cloud Serviceのインストールと設定。 |
| ベースラインを使用 | 選択したDITA マップのベースラインを作成した場合は、このオプションを選択して、公開するバージョンを指定します。詳細については、<br><br> ベースラインの操作[を参照してください](generate-output-use-baseline-for-publishing.md#id1825FI0J0PF)。 |
| ファイルプロパティ | メタデータとして処理するプロパティを選択します。 これらのプロパティは、DITA マップまたはブックマップファイルのプロパティページから設定します。 ドロップダウンリストから選択したプロパティは、**ファイルプロパティ** フィールドの下に表示されます。 プロパティの横にある十字アイコンを選択して削除します。 <br><br>**メモ**: DITA-OT パブリッシングを使用して、メタデータを出力に渡すこともできます。 詳しくは、「[DITA-OT](pass-metadata-dita-ot.md#id21BJ00QD0XA)を使用してメタデータを出力に渡す」を参照してください。 |

**親トピック：**&#x200B;[&#x200B;出力プリセットについて](generate-output-understand-presets.md)
