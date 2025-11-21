---
title: ネイティブのPDF公開機能 | バーコードを追加
description: バーコードの追加方法を説明します。
exl-id: 206bdcf9-2bcd-4bf1-815a-c97cdf0dc415
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '778'
ht-degree: 1%

---

# PDF出力へのバーコードの追加

バーコードは、機械が読み取ることができるデータパターンです。 お客様はバーコードスキャナーまたはスマートフォンのカメラを使用してバーコードをスキャンできます。 製品詳細、在庫番号、web サイト URL などのエンコード情報が役立つ場合があります。 バーコードを追加すると、データを簡単に取り込み、カスタマーエクスペリエンスを向上させ、データ管理とセキュリティを強化できます。

バーコードのスタイルを作成できます。 これを使用して、ページレイアウトにバーコードを挿入します。 目的のページレイアウトでサンプルバーコードにスタイルを適用できます。


このチュートリアルでは、PDF出力にバーコードを追加する方法について説明します。

## バーコードの生成手順

バーコードを生成するには、次の手順を実行します。

### テンプレートの CSS を更新してバーコード値をレンダリングする

PDFの生成時にバーコードをレンダリングするように、`layout.css` ファイルを変更します。 「qrcode」や「pdf417」など、様々なバーコードタイプがサポートされています。  詳しくは、[&#x200B; バーコードの種類 &#x200B;](#barcode-types) を参照してください。



```css
...
.barcode { 
-ro-replacedelement: barcode;   
-ro-barcode-type: code128;   
-ro-barcode-size: 100%;   
-ro-barcode-content: content();   
object-fit: contain;   
margin-top: 2mm;
 
}
...
```

### CSS スタイルを使用してバーコードを生成

バーコードは、様々な方法で生成できます。 例を次に示します。

**例 1**

テンプレートヘッダーにバーコードプレースホルダーを追加して、スタイルを適用します。

1. **テンプレート**/**ページレイアウト** を編集します
1. ページレイアウトを選択します。 例えば、ヘッダーやフッターを含む BackCover ページレイアウトを選択できます。
1. バーコードを挿入する場所に次の範囲を追加します。

   `<span class="barcode">Sample barcode</span></p>`。

   >[!NOTE]
   >
   > `layout.css` で定義したのと同じクラス名を使用します。

1. `<Sample barcode>` を、バーコードスキャナーで読み取る値に置き換えます。

ページレイアウトを含むテンプレートを使用して出力PDFを生成すると、バーコードを表示できます。 前の手順を実行したら、バーコードを含むPDF出力を生成できます。

次のスクリーンショットは、PDF出力にサンプルバーコードを示しています。

<img src="./assets/barcode-output-sample.png" alt="バーコードを含むサンプル出力" width="700" border="2px">

**例 2**

`Common.plt` 基本 **テンプレートの** ファイルを変更して、プロジェクトタイトルの後にバーコードを追加します。

ISBN番号のバーコードを作成するには、ISBN番号を追加します。 次に、ISBN番号を使用してバーコードを生成します。

```html
...

  <div data-region="header">
    <p class="chapter-header"><span data-field="project-title" data-format="default">Project Title</span> </p>
    <p><span class="barcode">978-1-56619-909-4</span></p>
  </div>
} 
...
```

**例 3**

マップのメタデータを使用してバーコードを作成するには：

DITA マップの `<topicmeta>` 要素に存在する任意のメタデータをバーコードとして表示します。 正しい XPath を使用していることを確認します。 たとえば、DITA マップの `<resourceid>` に `<topicmeta>` を追加できます。

次の例では、リソース ID がバーコードを生成するためのメイン入力として機能します。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE map PUBLIC "-//OASIS//DTD DITA Map//EN" "technicalContent/dtd/map.dtd">
<map id="GUID-3c330691-4dac-4020-904a-d2d6246aeeb1-en">
  <title>Barcode Sample</title>
  <topicmeta>
    <resourceid id="7a5bda1c-b1db-4fd8-8763-a731e2e8abba">
    </resourceid>
  </topicmeta>
  <topicref href="GUID-139f6c64-bea3-4f17-8b22-ee131557e249-en.dita" type="topic">
  </topicref>
</map>  
```



リソース ID は、次のようにページレイアウトで使用できます。


```html
  <div data-region="header">
    <p class="chapter-header"><span data-field="project-title" data-format="default">Project Title</span> </p>
    <p><span class="barcode" data-field="metadata" data-format="default" data-subtype="//resourceid/@id">Resource ID (barcode)</span></p>
  </div>
} 
```

## バーコードの種類 {#barcode-types}

よく使用されるバーコードの一部を次に示します。

| タイプ | -ro-barcode-type | 追加の詳細 |
| ---| --- | --- |
| QR コード | qrcode | ISO/IEC 18004:2015 に準拠した QR コードバーコードのコードのコード。 |
| Code 128 | code128 | ISO/IEC 15417:2007 で定義されている Code 128 バーコードコードのコード。 |
| コード 32 | code32 | コード 32、イタリア語 harmacode としても知られています。 |
| コード 49 | code49 | ANSI/AIM-BC6-2000 に準拠したコード 49。 |
| コード 11 | code11 |                            |
| Code 93 | code93 |                            |
| Code16k | code16k |                            |
| PDF417 | pdf417 | PDF417/MicroPDF417 バーコードは、ISO/IEC 15438:2006 および ISO/IEC 24728:2006 に準拠したコードです。 |
| コード 3 / 9 | code39 | ISO/IEC 16388:2007 に準拠した 9 のバーコードのコード 3。 |
| MSI プレッシー | msiplessey |                            |
| チャネルコード | channelcode | ANSI/AIM BC12-1998 に準拠したチャネル コード。 |
| Codabar | codabar | BS EN 798:1996 に準拠した Codabar バーコード記号。 |
| EAN-8 | ean-8 | BS EN 797:1996 による EAN バーコードのコード。 |
| EAN-13 | ean-13 | BS EN 797:1996 による EAN バーコードのコード。 |
| UPC-A | upc-a | BS EN 797:1996 による UPC バーコードのコードのコード。 |
| UPC-E | upc-e | BS EN 797:1996 による UPC バーコードのコードのコード。 |
| Ean/UPC アドオン | アドオン | BS EN 797:1996 に準拠した EAN/UPC アドオンのバーコードのコード。 |
| テレペン | テレペン | テレペンAlphaとしても知られています。 |
| GS1 データバー/データバー 14 | データバー | ISO/IEC 24724:2011 準拠の GS1 DataBar。 |
| GS1 データバー拡張/データバー 14 拡張 | databar-expanded | GS1 DataBar ISO/IEC 24724:2011 に準拠した拡張。 |
| GS1 Databar Limited | databar-limited | ISO/IEC 24724:2011 に準拠した GS1 DataBar Limited。 |
| POSTNET （郵便数値エンコーディングの手法） | postnet | United States Postal Service で使用される POSTNET （郵便数値エンコーディング技術）バーコードコード。 |
| Pharmazentralnummer （PZN-8） | pzn8 | ドイツの製薬業界で使用されている Code 39 ベースのコード。 |
| Pharmacode | ファーマコード |                            |
| Codablock F | codablockf | AIM Europe 「Uniform Symbology Specification Codablock F」（1995 年）によるシンボロジ。 |
| ログ | ログ | 米国国防総省が使用している LOGMARS （Logistics Applications of Automated Marking and Reading Symbols：自動標識および読み取りシンボルのロジスティクス用途）規格。 |
| アステカ ルーン | アステカ・ルーン | ISO/IEC 24778:2008 附属書 A に準拠した Aztec Runes バーコードのコードのコード。 |
| Aztec コード | aztec-code | Aztec Code ISO/IEC 24778:2008 に準拠したバーコードのコードのコード。 |
| DataMatrix | data-matrix | ISO/IEC 16022:2006 に準拠したデータ・マトリックス ECC 200 バーコード・コードのコード・コード |
| コード 1 | code-one |                            |
