---
title: 非従来のAEM Sites出力でのHTMLタグのオーバーレイ
description: コアコンポーネントマッピングに基づいた、aem sites 出力用のビデオおよび画像設定の指定
feature: Installation
role: Admin
level: Experienced
source-git-commit: 8310ae8d2e2eeda0fcfba9ec50650c806263cd49
workflow-type: tm+mt
source-wordcount: '156'
ht-degree: 0%

---


# AEM Sites出力でのHTMLタグのオーバーレイ

Web エディターのコアコンポーネントマッピングに基づくAEM Sites プリセットを使用して生成されたAEM Sites出力に、HTMLタグを追加しカスタマイズできます。 HTMLタグをカスタマイズするには、`config.xml` ファイルをオーバーレイします。 例えば、AEM Sites出力にビデオマップと画像マップを設定できます。

`config.xml` ファイルをオーバーレイして更新するには、次の手順を実行します。

1. AEMにログインし、CRXDE Liteモードを開きます。

1. 次の場所にある設定ファイルに移動します。

   `/libs/fmdita/cq/xssprotection/config.xml`

1. apps ノード内に `xssprotection` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/config.xml`

1. ビデオと画像に対して次のタグを更新します。 次に、ファイルを保存します。

ビデオ：

```XML
    <tag name="video" action="validate">
   	<attribute name="src">
      <regexp-list>
        <regexp name="anything"/>
      </regexp-list>
    </attribute>
    <attribute name="width">
       <regexp-list>
           <regexp name="anything"/>
       </regexp-list>
    </attribute>
    <attribute name="height">
       <regexp-list>
          <regexp name="anything"/>
       </regexp-list>
     </attribute>
     <attribute name="data">
       <regexp-list>
         <regexp name="anything"/>
       </regexp-list>
    </attribute>
    <attribute name="class">
       <regexp-list>
           <regexp name="anything"/>
       </regexp-list>
    </attribute>
    <attribute name="poster">
      <regexp-list>
        <regexp name="anything"/>
        </regexp-list>
    </attribute>
    <attribute name="controls">
        <regexp-list>
            <regexp name="anything"/>
        </regexp-list>
    </attribute>
    </tag>
    <tag name="source" action="validate">
      <attribute name="src">
        <regexp-list>
           <regexp name="anything"/>
        </regexp-list>
      </attribute>
    </tag>
```

画像マップ：

```XML
    	<tag name="map" action="validate">
	<attribute    name="name">
		<regexp-list>
			<regexp name="anything"/>
		</regexp-list>
	</attribute>
    </tag>
    <!-- Image & image related tags -->
    <tag name="img" action="validate">
	<attribute name="src" onInvalid="removeTag">
		<regexp-list>
			<regexp name="onsiteURL"/>
			<regexp name="offsiteURL"/>
		</regexp-list>
	</attribute>
	<attribute name="name"/>
	<attribute name="alt"/>
	<attribute name="height"/>
	<attribute name="width"/>
	<attribute name="border"/>
	<attribute name="align"/>
	<attribute name="usemap">
		<regexp-list>
			<regexp name="anything"/>
		</regexp-list>
	</attribute>
	<attribute name="hspace">
		<regexp-list>
			<regexp name="number"/>
		</regexp-list>
	</attribute>
	<attribute name="vspace">
		<regexp-list>
			<regexp name="number"/>
		</regexp-list>
	</attribute>
    </tag>
    <tag name="area" action="validate">
	<attribute name="shape">
		<regexp-list>
			<regexp name="anything"/>
		</regexp-list>
	</attribute>
	<attribute name="coords">
		<regexp-list>
			<regexp name="anything"/>
		</regexp-list>
	</attribute>
	<attribute name="href">
		<regexp-list>
			<regexp name="anything"/>
		</regexp-list>
	</attribute>
   </tag>
```




[ セキュリティ ](https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/introduction/security) のベストプラクティスについて詳しく説明します。