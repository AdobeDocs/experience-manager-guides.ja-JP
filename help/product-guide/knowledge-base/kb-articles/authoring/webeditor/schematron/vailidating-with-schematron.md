---
title: WebeditorでのSchematronのサポート
description: WebeditorでのSchematronの操作
exl-id: 3e61432f-d81e-446e-b0ad-560f5b9fa91a
feature: Web Editor
role: User, Admin
TQID: https://experienceleague.adobe.com/gF-ylj-r-PDXduhUU-60-hiJ4UaYEdsCYTaCIyUiT0s
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 399
ht-degree: 0%

---

# web エディター内のコンテンツの品質の制御

この記事では、AEM Guides web エディター内での検証の可能性の概要について説明します。
Web エディターでは、システムで設定されたDITA スキーマを利用して、ユーザーにDITA準拠コンテンツの作成を強制します。これにより、システムに保存されているすべてのコンテンツは、構造化され、再利用可能で有効なDITA コンテンツになります。

Web エディターでは、DITA ルールのサポートだけでなく、「*Schematron*」ルールに基づくコンテンツの検証もサポートしています。

「*Schematron*」は、XML ファイルのテストを定義するために使用されるルールベースの検証言語を指します。 スキーマトロンファイルを読み込み、エディターで編集することもできます。 「Schematron」ファイルを使用すると、特定のルールを定義し、DITA トピックまたはマップに対して検証できます。 Schematron ルールは、ルールとして定義された制限を課すことにより、XML構造の一貫性を確保できます。 こうした制限は、コンテンツの品質と一貫性を所有する中小企業によって後押しされています。

メモ：エディターはISO Schematronをサポートしています。


## Web エディターでの「Schematron」の仕組みを理解する

### Schematron ルールの設定

[&#x200B; ユーザーガイド &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_User-Guide_EN.pdf#page=148)の「Schematron ファイルのサポート」セクションを参照してください


### ファイル保存時に検証ルールを適用

Webeditor設定では、ユーザーがコンテンツを更新するたびに実行されるSchematron ルール/ファイルを設定できます。 詳しくは、[&#x200B; ユーザーガイド &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_User-Guide_EN.pdf#page=58)の「検証」の節を参照してください

![Web エディター設定からルールを設定](../../../assets/authoring/schematron-editorsettings-validation-tab.png)


### 手動で検証を実行できますか？

はい、コンテンツを作成する際に作成者/ユーザーとして、webeditorのSchematron パネルを使用してschematron ファイルをアップロードし、エディターで開いているファイルで検証を実行できます。

これを機能させるには、フォルダープロファイル管理者は、すべてのユーザーが検証パネルにSchemtron ファイルを追加できるようにする必要があります。 エディター設定を参照してください（上記のスクリーンショット）

![Schematron ファイルを選択](../../../assets/authoring/schematron-rightpanel-validation-addsch.png)
![検証を実行](../../../assets/authoring/schematron-rightpanel-validation-runsch.png)


### サポートされるルール

現在のバージョンのAEM Guidesでは、「アサーション」ベースのルールのみを使用した検証がサポートされています。 （[&#x200B; アセット対レポート &#x200B;](https://schematron.com/document/205.html)を参照）
「Reports」に基づくルールはまだサポートされていません。


### Schematron ルールのサンプルとその他のヘルプ

#### 使用例

- リンクが外部で、スコープが「外部」かどうかを確認します

  ```
  <sch:pattern>
      <sch:rule context="xref[contains(@href, 'http') or contains(@href, 'https')]">
          <sch:assert test="@scope = 'external' and @format = 'html'">
              All external xref links must be with scope='external' and format='html'
          </sch:assert>
      </sch:rule>
  </sch:pattern>
  ```

- マップに少なくとも1つの「topicref」があるか、「ul」の下に少なくとも1つの「li」があるかどうかを確認します

  ```
  <sch:pattern>
      <sch:rule context="map">
          <sch:assert test="count(topicref) > 0">
              There should be atleast one topicref in map
          </sch:assert>
      </sch:rule>
  
      <sch:rule context="ul">
          <sch:assert test="count(li) > 1" >
              A list must have more than one item.
          </sch:assert>
      </sch:rule>
  </sch:pattern>
  ```

- 「indexterm」要素は常に「prolog」に存在する必要があります

  ```
  <sch:pattern>
      <sch:rule context="*[contains(@class, ' topic/indexterm ')]">
          <sch:assert test="ancestor::node()/local-name() = 'prolog'">
              The indexterm element should be in a prolog.
          </sch:assert>
      </sch:rule>
  </sch:pattern>
  ```

#### リソース

- [Schematronの基本](https://da2022.xatapult.com/#what-is-schematron)について
- Schematron[&#128279;](https://www.xml.com/pub/a/2003/11/12/schematron.html#Assertions)の アサーションルールの詳細
- [Schematron ファイルのサンプル](../../../assets/authoring/sample_schematron.sch)
