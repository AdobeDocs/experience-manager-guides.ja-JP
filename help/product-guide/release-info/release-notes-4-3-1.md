---
title: リリースノート | Adobe Experience Managerガイド 4.3.1 リリースのアップグレード手順と修正された問題
description: バグ修正とAdobe Experience Managerガイドの 4.3.1 リリースにアップグレードする方法について説明します
exl-id: 3fb6dc31-ec6e-40f5-ab3f-a6e591da315e
feature: Release Notes
role: Leader
source-git-commit: 5a444e88b0adba7fa3d498437df39b729b10b5eb
workflow-type: tm+mt
source-wordcount: '1306'
ht-degree: 1%

---

# 4.3.1 Adobe Experience Managerガイドのリリース（2023 年 10 月）

このリリースノートでは、アップグレード手順、互換性マトリックス、およびAdobe Experience Managerガイドのバージョン 4.3.1 で修正された問題 ( 後で *Experience Managerガイド*) をクリックします。

新機能および機能強化について詳しくは、 [Adobe Experience Managerガイドの 4.3.1 リリースの新機能](./whats-new-4-3-1-release.md).

## 4.3.1 リリースのExperience Managerガイドにアップグレード


現在のバージョンのガイドをバージョン 4.3.1 に簡単にアップグレードできます。Experience ManagerガイドのExperience Manager4.3.1 へのアップグレードを進める前に、次の点を考慮する必要があります。現在のバージョンのバージョンのバージョンをバージョン 4.3.1 にアップグレードできます。


- バージョン 4.3.0、4.2 または 4.2.1 を使用している場合は、バージョン 4.3.1 に直接アップグレードできます。
- バージョン 4.1 または 4.1.x を使用している場合は、バージョン 4.3.1 にアップグレードする前に、バージョン 4.3.0、4.2 または 4.2.x にアップグレードする必要があります。
- バージョン 4.0 を使用している場合は、バージョン 4.3.1 にアップグレードする前に、バージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合は、バージョン 4.2 にアップグレードする前に、バージョン 4.0 にアップグレードする必要があります。
- 3.8.5 より前のバージョンを使用している場合は、製品固有のインストールガイドの「Experience Managerガイドのアップグレード」の節を参照してください。


>[!NOTE]
>
>AEMガイドのバージョンをアップグレードする前に、 Service Pack をExperience Managerする必要があります。

詳しくは、 [アップグレードの手順](../install-guide/upgrade-xml-documentation.md).

## 互換性マトリックス

このセクションでは、Experience Managerガイド 4.3.1 リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### Adobe Experience Manager

**4.3.1 非 UUID**
バージョン 6.5 Service Pack 18、17、16、15、または 14

**4.3.1 UUID**
バージョン 6.5 Service Pack 18、17、16、15、または 14

詳しくは、 *技術要件* 『 Adobe Experience Managerガイドのインストールと設定』の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.3.1（非 UUID） | 2022 以降 | 2020.2 以降* | 2022 以降 | 2020.3 以降 |
| 4.3.1(UUID) | 2022 以降 | 2020.2 以降* | 2022 以降 | 2020.4 以降 |
| | | | |

* AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされています。

### 酸素コネクタ

| リリース | Oxygen Connector ウィンドウ | Oxygen Connector Mac | Oxygen Windows で編集 | Oxen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.3.1（非 UUID） | 2.3-regular-5 | 2.3-regular-5 | 1.6 | 1.6 |
| 4.3.1(UUID) | 3.2-uuid-5 | 3.2-uuid-5 | 2.3 | 2.3 |
|  |  |   |



### ナレッジベーステンプレートバージョン

| コンポーネントのパッケージ名 | コンポーネントのバージョン | テンプレートバージョン |
|---|---|---|
| Experience ManagerガイドコンポーネントCloud Service用コンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- 午後の時間は **日付** ベースラインの作成。 (12712)
- JSON コードを `<codeblock>` Web エディターの要素。 (12326)
- 未保存のバージョンの変更と、それらのインジケーターは、大きなファイルには表示されません。 (11784)
- 韓国語で編集する場合、最初の文字がデフォルトに変更されます。 (10049)

- プレフィックスは、Web エディターのプレビューモードで複製されます。 (13133)
- `Choicetable` 行が表示されないか、選択できません。 (12616)
- Web エディターは、カスタムスキーマを使用してトピックを作成する場合、特定のシナリオで検証エラーをスローします。 (12576)
- マップテンプレートからマップを作成する場合、同様のトピックテンプレート参照でコンテンツフォルダにコピーが作成されない。 (12150)

- DITA マップの検索ボックスに閉じるボタンがありません。 (11867)
- Web エディタで長いファイルを保存する場合、 `DirtyChecker` 長いスタックトレースを伴う例外をスローし、ログファイルを埋めます。 (11860)
- DITA トピックを作成するには、対応するフォルダーノードに対する削除権限が必要ですが、マップは書き込み権限で作成できます。 (11706)
- スラッシュが存在する場合、Web エディターに正しくないタイトルが表示されます。 (10949)

- トピックのタイトルにスラッシュ「/」が含まれている場合、エディターの「 」タブにはその後の文字のみが表示されます。 (13455)
- エディターにプレビューを表示した後、画像のプレビューが表示されなくなることはありません。 (13454)
- 一部の既存のバージョンまたはそのラベルは、4.x へのアップグレード後、バージョン履歴に表示されません。(13247)
- Assets UI のバージョン履歴パネルに、 **現在** フィールドに入力します。 (12624)
- conref タイトルを持つトピックが、リポジトリビューまたはマップビューで解決されません。(13304)


### 公開

- ネイティブPDF | トピック出力の生成時に、PDFの順序は修正されません。 (13157)
- ネイティブPDF| 使用できるデフォルトのスタイルタグはありません `<p>`要素を選択します。 (12559)
- ネイティブPDF | コンテンツ領域に適用されたインラインスタイルは、前面と背面のトピックには適用されません。 (13510)
- The `DeliveryTarget` AEM Site 出力の生成時に属性が伝播しない。  (13132)
- The **公開** 特定のエラーが発生したコンテンツのAEM Site 出力を生成する際に、ワークフローが停止することがありました。 (12000)

- ネイティブPDF | 複数の外部参照を含めると、文字は列の幅を超えて拡張されます。 (13004)
- ネイティブPDF | トピックとタイトルの ID が同じ場合、正しくない生成のPDF出力が発生します。 (12644)
- ネイティブPDF | 親に output クラスを追加するとき `<topicref>` 要素を DITA マップに追加し、カスタムスタイルを output クラスに適用すると、スタイルはトピック本文内の要素（セクションタイトルを含む）に適用されます。 (12166)
- DITA マップに複数の ditavalrefs がある場合、増分公開は機能しません。 (12117)
- AEM Site | keydef でトピックを変数として指すマップを作成し、 processing-role=resource-only を追加すると、一部の予期しないページが作成されます。 (12099)
- AEM DAM のアセットがAEMサイト以外の出力で使用されている場合、メタデータ「jcr:createdBy」は、DITA マップまたはトピックを最後に変更した発行者の名前やユーザー名を反映しません。 (12090)
- AEM Sites | ナビゲーションタイトルのトピックヘッドを含む DITA マップ（サポートされていない文字）が原因で、無効なページ URL になります。 (11978)
- ネイティブPDF | 問題は、Frontmatter と Backmatter で topichead / topicmeta / navtitle のサポートで発生します。 (11969)
- ネイティブPDF | 大きなドキュメントのPDFの生成には時間がかかります。 (11955)
- ネイティブPDF | プリセットの名前を変更すると、NullPointerException がスローされ、PDF出力が生成されます。 (11889)
- The `<conref>` コンテンツがPDF出力に表示されない。 (11131)
- 余分なスペースが `<div>` ページレイアウトエディターでのオーサービューとソースビューの切り替えに関する要素 (10750)
- AEM Cloud Manager でレプリケートされたコンテンツは、パブリッシュインスタンスでは表示されません。 (9564)


### 管理

- バージョン履歴は、 `dc:format` プロパティがアセットに存在しません。 (10463)
- トピック ID が GUID と異なる場合、コンテンツ参照がコピー&amp;ペースト DITA ファイルに壊れています。 (12614)
- 動的ベースラインでは、DITA マップの作業用コピーの直接参照からラベルのリストが取り出されません。 (11917)
- [ すべてのトピックを参照 ] 機能を使用する場合、[ 基準 ] には、[ マップダッシュボード ] に誤った数のファイルが表示されます。 (13265)
- Web エディタで、ベースラインには、選択した DITA ファイルのバージョンの代わりに、以前のバージョンのタイトルが表示されます。 (13444)

### レビュー

- トピックのレビューで、誤ったコメントが表示されます。 (13453)
- Experience Managerガイドの「レビュー」ページの「閉じる」ボタンをクリックすると、ユーザーはAEMホームページに移動します。 (13535)
- レビュー中のトピックの場合、添付ファイルはエディターの右側のパネルに表示されません。 (13011)



### 翻訳

- から書き出されたベースライン **翻訳** ダッシュボードが失敗し、ターゲット言語で開かれない。 (13466)

- 選択した既存の翻訳プロジェクトに新しいジョブを追加する代わりに、新しい翻訳プロジェクトが作成されます。  (10214)
- ソースファイルのタイトルの代わりに、翻訳済みファイルのタイトルが表示されます。 (11630)
- 自動承認が機能しないことがあり、翻訳ステータスに誤った値が設定されている場合は例外が発生します。 (13607)
- 翻訳ダッシュボードから書き出されたベースラインは失敗し、ターゲット言語で開きません。 (12993)
- 翻訳でベースラインを使用している際に、一部のファイルが欠落しています。 (13021)