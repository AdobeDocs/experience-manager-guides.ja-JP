---
title: AEM コンポーネントを使用したdita エレメントのマッピングのカスタマイズ
description: AEM コンポーネントを使用してdita エレメントマッピングをカスタマイズする方法について説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '1268'
ht-degree: 1%

---


# AEM コンポーネントを使用したDITA エレメントマッピングのカスタマイズ {#id1679J600HEL}

AEM GuidesのDITA エレメントは、対応するAEM コンポーネントにマッピングされます。 AEM Guidesでは、公開やレビューなどのワークフローでこのマッピングを使用して、DITA要素を対応するAEM コンポーネントに変換します。 マッピングは`elementmapping.xml` ファイルで定義されています。このファイルには、Cloud Serviceのセットアップ用にパッケージマネージャーを使用してアクセスでき、オンプレミスのセットアップ用にCRXDE Lite モードでURL `/libs/fmdita/config/elementmapping.xml`からアクセスできます。

>[!NOTE]
>
> ``libs`` ノードで使用できる既定の構成ファイルのカスタマイズを行わないでください。 ``libs`` ノードで``apps`` ノードのオーバーレイを作成し、``apps`` ノードでのみ必要なファイルを更新する必要があります。

定義済みのDITA エレメントマッピングを使用するか、DITA エレメントをカスタム AEM コンポーネントにマッピングできます。 カスタム AEM コンポーネントを使用するには、`elementmapping.xml` ファイルの構造を理解する必要があります。

## elementmapping.xml構造

`elementmapping.xml`構造の概要を以下に示します。

1. 各DITA エレメントは、最初に、エレメント名に基づいて対応するコンポーネントマッピングを検索します。 例：

   ```XML
   <ditaelement>     
      <name>**substeps**</name>  
      <class>- topic/ol task/substeps</class>  
      <componentpath>dita/components/ditaolist</componentpath>  
      <type>COMPOSITE</type>  
      <target>para</target>
   </ditaelement>
   ```

   上記の例では、すべての`substeps` DITA要素が`dita/components/ditaolist` コンポーネントを使用してレンダリングされます。

1. DITA要素が名前に基づいた一致を見つけられない場合、`class`に基づいた一致が行われます。 例：

   ```XML
   <ditaelement>  
      <name>topic</name>  
      <class>**- topic/topic**</class>  
      <componentpath>fmdita/components/dita/topic</componentpath>  
      <type>COMPOSITE</type>  
      <target>para</target>  
      <attributemap> 
         <attribute from="id" to="id" />  
      </attributemap>
   </ditaelement>
   ```

   上記の例では、`task`要素にマッピングが定義されていない場合、`task`は`task` コンポーネントから継承されているため、`topic`要素は上記のコンポーネントにマッピングされます。

1. エレメントに対応するコンポーネントマッピングがある場合、その子要素の処理は`type`によって決定されます。 例：

   ```XML
   <ditaelement>  
      <name>title</name>  
      <class>- topic/title</class>  
      <componentpath>foundation/components/title</componentpath>  
      <type>**STANDALONE**</type>  
      <target>para</target>  
      <textprop>jcr:title</textprop>
   </ditaelement>
   ```

   `type`は次の値を取ります：

   - 複合：子エレメント *についても、コンポーネント*&#x200B;のマッピングが続行されます。

   - スタンドアロン：現在の要素の子要素は&#x200B;*それ以降マッピングされていません*。

   上記の例では、`<title>`要素に子要素がある場合、他のコンポーネントにはマッピングされません。 `<title>`要素のコンポーネントは、`<title>`要素内のすべての子要素をレンダリングする責任があります。

1. 1つのDITA エレメントにマッピングされた複数のコンポーネントがある場合は、エレメントに最適な一致が選択されます。 最適なマッチコンポーネントを選択するには、DITA要素のドメインと構造的な特殊化を考慮します。

   ドメインの特殊化を持つDITA要素があり、コンポーネントがドメインの特殊化のためにマッピングされている場合、そのコンポーネントは高い優先度が与えられます。

   同様に、構造的特殊化を持つDITA要素があり、コンポーネントが構造的特殊化のためにマッピングされている場合、そのコンポーネントは優先度が高くなります。

1. エレメント マッピングで`<attributemap>`を使用して、属性値を対応するノード プロパティにマッピングできます。
1. `textprop`は、DITA要素のテキストコンテンツをノードプロパティにシリアル化するために使用できます。 さらに、エレメント タグで複数回使用して、公開階層内の複数の場所でテキストコンテンツをシリアライズできます。 また、ターゲットプロパティの場所と名前をカスタマイズすることもできます。 例：

   ```XML
   <ditaelement>
      <name>title</name>
      <componentpath>foundation/components/title</componentpath>
      <type>STANDALONE</type>
      <target>para</target>
       <textprop>**jcr:title**</textprop>
   </ditaelement>
   ```

   上記の要素マッピングでは、`<title>`要素のテキストコンテンツが、出力ノードの`jcr:title`という名前のプロパティの値として保存されることを指定しています。

1. `xmlprop`は、特定の要素のXML全体をノードプロパティにシリアル化するために使用できます。 その後、コンポーネントはこのノードプロパティを読み取り、カスタムレンダリングを実行できます。 例：

   ```XML
   <ditaelement>
       <name>svg-container</name>
      <class>+ topic/foreign svg-d/svg-container</class>
       <componentpath>fmdita/components/dita/svg</componentpath>
       <type>STANDALONE</type>
       <target>para</target>
      <xmlprop>**data**</xmlprop>
   </ditaelement>
   ```

   上記の要素マッピングでは、要素`<svg-container>`のXML マークアップ全体が、出力ノードの`data`という名前のプロパティの値として保存されることを指定しています。

1. 出力生成プロセスでパス解決を処理するための特殊な属性マッピングがあります。 例：

   ```XML
   <attributemap>
      <attribute from="href" to="fileReference" ispath="true" rel="source" />
      <attribute from="height" to="height" />
       <attribute from="width" to="width" />
   </attributemap>
   ```

   上記の`attributemap`では、DITA要素内の`href`属性が`fileReference`という名前のノードプロパティにマッピングされます。 `ispath`が`true`に設定されているので、出力生成プロセスはこのパスを解決し、次に`fileReference` ノードプロパティに設定します。

   この解決方法は、属性マッピングの`rel`属性の値に基づいて決定されます。

   - `rel=source`の場合、`href`の値は、現在処理中のDITA ソースファイルに関して解決されます。 `href`の値が解決され、`fileReference` プロパティの値に配置されます。

   - `rel=target`の場合、`href`の値はルート公開場所に関して解決されます。 `href`の値が解決され、`fileReference` プロパティの値に配置されます。

   パス属性で前処理や解決を行いたくない場合は、`ispath`属性を指定する必要はありません。 値はそのままコピーされ、コンポーネントは必要な解決を行うことができます。


## DITA要素スキーマ

次に、`elementmapping.xml` ファイルのDITA要素スキーマの例を示します。

```XML
<ditaelement>        
    <name>element_name</name>    
    <class>element_class</class>    
    <componentpath>fmdita/components/dita/component_name</componentpath>    
    <type>COMPOSITE|STANDALONE</type>     
    <attributeprop>propname_a</attributeprop>      
    <textprop>propname_t</textprop>    
    <xmlprop>propname_x</xmlprop>     
    <xpath>xpath expression string</xpath>     
    <target>head|para</target>     
    <wrapelement>div</wrapelement>     
    <wrapclass>class_name</wrapclass>     
    <attributemap>         
        <attribute from="attrname"         to="propname"         ispath="true|false"         rel="source|target" />    
    </attributemap>    
    <skip>true|false</skip> 
</ditaelement>
```

次の表に、DITA エレメントスキーマのエレメントを示します。

| 要素 | 説明 |
|-------|-----------|
| `<ditaelement>` | 各マッピング要素の最上位ノード。 |
| `<class>` | コンポーネントを記述するターゲット DITA要素のクラス属性。<br>例えば、DITA トピックのクラス属性は<br>です `- topic/topic` |
| `<componentpath>` | マッピングされたAEM コンポーネントのCRXDE パス。 |
| `<type>` | 使用可能な値：<br> -   **COMPOSITE**：子エレメントも処理します。<br> -   **STANDALONE**：子要素の処理をスキップします |
| `<attributeprop>` | シリアル化されたDITA属性と値をプロパティとしてAEM ノードにマッピングするために使用します。 例えば、`<note type="Caution">`要素があり、この要素にマッピングされるコンポーネントが`<attributeprop>attr_t</ attributeprop>`である場合、ノードの属性と値は、対応するAEM ノード \（`attr_t`\）の`attr_t->type="caution"` プロパティにシリアル化されます。 |
| `<textprop>propname_t</textprop>` | `getTextContent()`出力を`propname_t.` <br>によって定義されたプロパティに保存します **注：**&#x200B;これは最適化されたプロパティです。 |
| `<xmlprop>propname_x </xmlprop>` | このノードのシリアル化されたXMLを&#x200B;`propname_x.<br> `**によって定義されたプロパティに保存します。注：**&#x200B;これは最適化されたプロパティです。 |
| `<xpath>` | 要素マッピングにXPath要素が指定されている場合は、要素名とクラスとともに、コンポーネントマッピングを使用するためにXPath条件も満たす必要があります。 |
| `<target>` | CRX リポジトリ内のDITA エレメントを指定した場所に配置します。<br>可能な値：<br> - **head**: head ノード <br> - **text**: paragraph ノードの下 |
| `<wrapelement>` | 内で内容をラップするHTML要素。 |
| `<wrapclass>` | プロパティ `wrapclass.`への要素の値 |
| `<attributemap>` | 1つ以上の`<attribute>` ノードを含むコンテナノード。 |
| `<attribute from="attrname" to="propname" ispath="true\|false" rel="source\|target" />` | DITA属性をAEM プロパティにマッピングします：<br> -   **`from`**: DITA属性名<br> -   **`to`**: AEM コンポーネントプロパティ名<br> -   **`ispath`**：属性がパス値\（例：*image*\） <br> -   **`rel`**: パスがソースまたはターゲット <br>の場合 **メモ：** `attrname`が`%`で始まる場合、`attrname minus '%'`をprop &#39;`propname`&#39;にマッピングします。 |

**その他のメモ**

- デフォルトの要素マッピングを上書きする場合は、デフォルトの`elementmapping.xml` ファイルを変更しないことをお勧めします。 新しいマッピング XML ファイルを作成し、作成したカスタムアプリフォルダー内の別の場所にファイルを配置する必要があります。

- `elementmapping.xml` ファイルには、fmdita/components/dita/wrapper コンポーネントを参照する多くのマッピングエントリがあります。 Wrapperは、サイトノードのプロパティを使用して比較的単純なDITA構造をレンダリングし、関連するHTMLを生成する汎用コンポーネントです。 囲むタグを生成するために`wrapelement` プロパティを使用し、子レンダリングを対応するコンポーネントにデリゲートします。 これは、コンテナコンポーネントのみが必要な場合に便利です。 `div`または`p`のような特定のコンテナタグをレンダリングする新しいコンポーネントを作成する代わりに、`wrapelement`および`wrapclass` プロパティを含むWrapper コンポーネントを使用して、同じ効果を得ることができます。

- 文字列JCR プロパティに大量のテキストを保存することはお勧めしません。 出力生成で最適化されたプロパティタイプの計算を使用すると、大きなテキストコンテンツが文字列型として保存されなくなります。 代わりに、特定のしきい値を超えるコンテンツを保存する必要がある場合、プロパティのタイプはバイナリに変更されます。 デフォルトでは、このしきい値は512 バイトに設定されていますが、*バイナリしきい値として保存*&#x200B;設定を変更することで、Configuration Manager \（**com.adobe.fmdita.config.ConfigManager**\）で変更できます。

- 要素マッピングの\（すべてではない\）を上書きする場合は、`elementmapping.xml` ファイル全体をレプリケートする必要はありません。 新しいXML マッピングファイルを作成し、オーバーライドする要素のみを定義する必要があります。

- カスタムの場所にXML ファイルを作成したら、`Override Element Mapping` バンドルの`com.adobe.fmdita.config.ConfigManager`設定を更新します。


