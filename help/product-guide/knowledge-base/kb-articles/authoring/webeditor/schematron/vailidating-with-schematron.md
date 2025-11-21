---
title: webeditor でのスキーマトロンのサポート
description: Webeditor での Schematron の操作
exl-id: 3e61432f-d81e-446e-b0ad-560f5b9fa91a
feature: Web Editor
role: User, Admin
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '379'
ht-degree: 0%

---

# Web エディター内のコンテンツ品質の制御

ここでは、AEM Guides web エディターでの検証の可能性について概要を説明します。
Web エディタは、システムの DITA スキーマ設定を利用して、ユーザーに DITA 準拠のコンテンツを作成するよう強制します。 これにより、システムに保存されているすべてのコンテンツが構造化され、再利用可能で有効な DITA コンテンツになります。

DITA ルールのサポートに加えて、web エディタは「*Schematron*」ルールに基づくコンテンツの検証もサポートします。

「*スキーマトロン*」は、XML ファイルのテストを定義するために使用される、ルールベースの検証言語を参照します。 Schematron ファイルを読み込んで、Web エディターで編集することもできます。 「Schematron」ファイルを使用して、特定の規則を定義し、DITA トピックまたはマップに対して検証できます。 スキーマのルールは、ルールとして定義された制限を適用することで、XML 構造の一貫性を確保できます。 これらの制限は、コンテンツの品質と一貫性を所有する中小企業が推進しています。

メモ：Web エディターは ISO スキーマをサポートしています。


## Web エディターでの「Schematron」の仕組みを知る

### スキーマトロンルールの設定

[&#x200B; ユーザガイド &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_User-Guide_EN.pdf#page=148) の「スキーマトロンファイルのサポート」の節を参照してください


### ファイル保存時に検証ルールを適用

Webeditor 設定を使用すると、パワーユーザーは、ユーザーがコンテンツを更新するたびに実行される Schematron ルール/ファイルを設定できます。 詳しくは、『ユーザーガイド [&#x200B; の「検証」の節を参照してください &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_User-Guide_EN.pdf#page=58)

![Web エディター設定からルールを設定 &#x200B;](../../../assets/authoring/schematron-editorsettings-validation-tab.png)


### 検証を手動で実行できますか？

はい。コンテンツの作成時に作成者またはユーザーとして使用できます。webeditor のスキーマトロンパネルを使用して、スキーマトロンファイルをアップロードし、エディターで開いているファイルに対して検証を実行できます。

これを機能させるには、フォルダープロファイル管理者が、すべてのユーザーが検証パネルで Schemtron ファイルを追加できるようにする必要があります。 エディター設定を参照してください（上のスクリーンショット）

![Schematron ファイルを選択 &#x200B;](../../../assets/authoring/schematron-rightpanel-validation-addsch.png)
![&#x200B; 検証の実行 &#x200B;](../../../assets/authoring/schematron-rightpanel-validation-runsch.png)


### サポートされるルール

現在のAEM Guidesのバージョンでは、「アサーション」ベースのルールのみを使用した検証をサポートしています。 （[&#x200B; アセットとレポート &#x200B;](https://schematron.com/document/205.html) を参照）。
「レポート」に基づくルールは、まだサポートされていません。


### スキーマトロンルールのサンプルおよびその他のヘルプ

#### サンプルユースケース

- リンクが外部であり、「外部」スコープを持っているかどうかを確認する

  ```
  <sch:pattern>
      <sch:rule context="xref[contains(@href, 'http') or contains(@href, 'https')]">
          <sch:assert test="@scope = 'external' and @format = 'html'">
              All external xref links must be with scope='external' and format='html'
          </sch:assert>
      </sch:rule>
  </sch:pattern>
  ```

- マップに少なくとも 1 つの「topicref」があるか、または「ul」の下に少なくとも 1 つの「li」があるかどうかを確認します

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

- 「indexterm」要素は、常に「prolog」に存在する必要があります

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

- 理解 [&#x200B; スキーマトロンの基本 &#x200B;](https://da2022.xatapult.com/#what-is-schematron)
- [Schematron のアサーションルール &#x200B;](https://www.xml.com/pub/a/2003/11/12/schematron.html#Assertions) の詳細
- [サンプルスキーマトロンファイル](../../../assets/authoring/sample_schematron.sch)
