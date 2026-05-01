---
title: Schematron ファイルのサポート
description: DITA トピックの読み込みと検証方法、アサートレポートステートメントを使用したルールのチェック、正規表現の使用、AEM GuidesのSchematron ファイルでの抽象パターンの定義方法について説明します。
feature: Authoring, Features of Web Editor
role: User
hide: true
exl-id: c743baac-b6c1-4684-bbd1-8f9834ab272a
source-git-commit: 12ba7129255257970ddd7a0989149be664ce9803
workflow-type: tm+mt
source-wordcount: '766'
ht-degree: 0%

---

# Schematron ファイルのサポート

「Schematron」とは、XML ファイルのテストを定義するために使用されるルールベースの検証言語を指します。 Web エディターはSchematron ファイルをサポートしています。 スキーマトロンファイルを読み込み、Web エディターで編集することもできます。 Schematron ファイルを使用すると、特定のルールを定義し、DITA トピックまたはマップに対して検証できます。

>[!NOTE]
>
> Web エディターはISO Schematronをサポートしています。


## Schematron ファイルのインポート

Schematron ファイルを読み込むには、次の手順を実行します。

![](images/scematron-panel-add.png){width="300"}

1. *リポジトリビュー*&#x200B;で必要なフォルダー（ファイルをアップロードする場所）に移動します。
1. **オプション** アイコンをクリックしてコンテキストメニューを開き、**Assetsをアップロード**&#x200B;を選択します。
1. **Assetsをアップロード** ダイアログで、**アセットフォルダーを選択** フィールドで保存先フォルダーを変更できます。
1. 「**ファイルを選択**」をクリックし、参照してSchematron ファイルを選択します。 1つ以上のSchematron ファイルを選択し、**アップロード**&#x200B;をクリックできます。

## SchematronでDITA トピックまたはマップを検証する

スキーマトロンファイルを読み込んだ後、Web エディターで編集できます。 スキーマトロンファイルを使用して、トピックまたはDITA マップを検証できます。 例えば、DITA マップまたはトピックに対して次のルールを作成できます。

* タイトルはDITA マップ用に定義されます。
* 特定の長さの短い説明が追加されました。
* マップには少なくとも1つのtopicrefが必要です。

Web エディターでトピックを開くと、右側にSchematron検証パネルが表示されます。 Schematron ファイルを使用してトピックまたはマップを追加および検証するには、次の手順を実行します。
![](images/schematron-validate.png){width="300"}

1. Schematron アイコン（）をクリックして、Schematron パネルを開きます。
1. 「Schematron ファイルを追加」を使用して、Schematron ファイルを追加します。
1. Schematron ファイルにエラーがない場合は、追加され、検証パネルに一覧表示されます。 エラーを含むSchematron ファイルのエラーメッセージが表示されます。
   >[!NOTE]
   >
   >Schematron ファイル名の近くにあるクロスアイコンを使用して、削除できます。
1. 「スキーマトロンで検証」をクリックして、トピックを検証します。

   * トピックでルールが壊れていない場合は、ファイルの検証成功メッセージが表示されます。
   * 例えば、トピックがルールを壊し、タイトルが含まれておらず、上記のSchematronに対して検証されている場合、検証エラーが表示されます。

1. エラーメッセージをクリックして、開いたトピック/マップ内のエラーを含む要素を強調表示します。

Web エディターのSchematron サポートは、一連のルールに照らし合わせてファイルを検証し、トピック全体で一貫性と正確性を維持するのに役立ちます。

## ルールを確認するには、assert ステートメントとreport ステートメントを使用します{#schematron-assert-report}

AEM Guidesは、Schematronのassert ステートメントとreport ステートメントもサポートしています。 これらのステートメントは、DITA トピックの検証に役立ちます。

### アサートステートメント

アサートステートメントは、テストステートメントがfalseと評価されたときにメッセージを生成します。 例えば、タイトルを太字にする場合は、アサートステートメントを定義します。

```XML
<sch:rule context="title"> 
    <sch:assert test = "b"> Title should be bold </sch:assert>
  </sch:rule>
```

Schematronを使用してDITA トピックを検証すると、タイトルが太字ではないトピックのメッセージが表示されます。

### Report statement

レポート文は、テスト文がtrueと評価されたときにメッセージを生成します。 例えば、短い説明を150文字以下にする場合は、レポート文を定義して、短い説明が150文字以上のトピックを確認できます。
Schematronを使用してDITA トピックを検証すると、レポートステートメントがtrueと評価されるルールの完全なレポートが取得されます。 そのため、短い説明が150文字を超えるトピックのメッセージが表示されます。


```XML
<sch:rule context="shortdesc"> 
        <sch:let name="characters" value="string-length(.)"/> 
        <sch:report test="$characters &gt; 150">  
        The short description has <sch:value-of select="$characters"/> characters. It should contain more than 150 characters.      
        </sch:report>   
    </sch:rule> 
```

>[!NOTE]
>
> Schematron ルールの書き込み中は、Xpath 2.0式のみを使用します。

## 正規表現の使用{#schematron-regex-espressions}

正規表現を使用してmatches （）関数でルールを定義し、Schematron ファイルを使用して検証を実行することもできます。

例えば、タイトルに1つの単語しか含まれていない場合は、メッセージを表示するのに使用できます。

```XML
<assert test="not(matches(.,'^\w+$'))"> 
No one word titles.
</assert>  
```


## 抽象パターンを定義する{#schematron-abstract-patterns}

AEM Guidesは、Schematronの抽象パターンもサポートしています。 一般的な抽象パターンを定義して、これらの抽象パターンを再利用できます。  実際のパターンを指定するプレースホルダーパラメーターを作成できます。


抽象パターンを使用すると、ルールの重複を減らし、検証ロジックの管理と更新を簡単にすることで、Schematron スキーマを簡素化できます。 また、スキーマ全体で再利用できる単一の抽象パターンで複雑な検証ロジックを定義できるため、スキーマを理解しやすくなります。


例えば、次のXML コードは抽象パターンを作成し、実際のパターンはIDを使用して抽象パターンを参照します。

```XML
<sch:pattern abstract="true" id="LimitNoOfWords"> 

<sch:rule context="$parentElement"> 

<sch:let name="words" value="string-length(.)"/> 

<sch:assert test="$words &lt; $maxWords"> 

You have <sch:value-of select="$words"/> letters. This should be lesser than <sch:value-of select="$maxWords"/>. 

</sch:assert>  

<sch:assert test="$words &gt; $minWords"> 

You have <sch:value-of select="$words"/> letters. This should be greater than <sch:value-of select="$minWords"/>. 

</sch:assert>  

</sch:rule> 

</sch:pattern> 

<sch:pattern is-a="LimitNoOfWords" id="extend-LimitNoOfWords"> 

<sch:param name="parentElement" value="title"/> 

<param name="minWords" value="1"/> 

<param name="maxWords" value="8"/> 

</sch:pattern> 
```
