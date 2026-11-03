---
title: ネイティブ PDF出力でのマップ参照の付録レンダリングの設定
description: Experience Manager Guidesのネイティブ出力の付録コンテンツとして、付録内のサブマップの下に追加されたトピックをレンダリングするようにPDFを設定する方法を説明します。
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 63ae0f947d50646bed34cd815db6b9fb585fc015
workflow-type: tm+mt
source-wordcount: '284'
ht-degree: 0%
---

# ネイティブ PDF出力でのマップ参照の付録レンダリングの設定

ネイティブ PDF出力では、`<appendix>`要素内のサブマップで参照されているトピックは、付録ではなくチャプターとしてレンダリングできます。 デフォルトでは、Experience Manager Guidesはマップ参照をエレメント名で分類し、処理中にマップが統合されると、その情報は失われます。

代わりにDITA-OTで生成された`class`属性を使用してマップ参照を分類するには、この設定を使用します。 付録サブマップのトピックは、付録としてレンダリングされます。

>[!NOTE]
>
>この設定は、マップ参照の分類方法を変更します。 デフォルトでは無効になっています。 コンテンツが`<appendix>`内のサブマップにトピックを配置し、それらをネイティブ PDF出力でチャプターとしてレンダリングする場合にのみ有効にします。

## この設定の使用状況

ブックマップの次の例を考えてみましょう。

- `<appendix>`要素がトピックを直接参照しています。 これらのトピックは、生成されたPDFで付録としてレンダリングされます。

  ```XML
  <booktitle>
      <mainbooktitle>Product Guide</mainbooktitle>
    </booktitle>
    <frontmatter>
      <booklists>
        <toc/>
        <tablelist/>
      </booklists>
      <preface href="topics/preface.dita">
      </preface>
    </frontmatter>
    <chapter class="foo" href="topics/getting-started.dita">
    </chapter>  
    <appendix href="topics/appendix-reference-tables.dita">
    </appendix>
    <appendix href="topics/appendix-troubleshooting.dita">
    </appendix>
    <backmatter>
      <booklists>
        <indexlist/>
      </booklists>
    </backmatter>
  </bookmap>`
  ```

- 別の`<appendix>`要素はサブマップを参照し、サブマップは`<topicref>`を使用してトピックを参照します。

  ```xml
  <booktitle>
      <mainbooktitle>Product Guide</mainbooktitle>
    </booktitle>
    <frontmatter>
      <booklists>
        <toc/>
        <tablelist/>
      </booklists>
      <preface href="topics/preface.dita">
      </preface>
    </frontmatter>
    <chapter class="foo" href="topics/getting-started.dita">
    </chapter>  
    <appendix format="ditamap" href="submap-for-appendix.ditamap" type="map">
    </appendix>
    <backmatter>
      <booklists>
        <indexlist/>
      </booklists>
    </backmatter>
  </bookmap>
  ```

  Submap-for-appendix:

  ```xml
  <map id="GUID-cc306264-825c-455e-89db-d27af9197a2f">
    <title>submap-for-appendix</title>
    <topicref href="topics/appendix-reference-tables.dita" type="reference">
    </topicref>
    <topicref href="topics/appendix-troubleshooting.dita" type="topic">
    </topicref>
  </map>
  ```

この設定を使用しない場合、最初の付録のトピックは付録としてレンダリングされますが、サブマップのトピックはチャプターとしてレンダリングされます。 トピックのみが公開されます。サブマップ自体は階層に使用され、出力には表示されません。

## 設定の設定

この設定を設定する手順は次のとおりです。

1. 設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)の手順を使用します。

2. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   | --------------------------------------- | -------------------------------- | ----------------------------- |
   | `com.adobe.fmdita.config.ConfigManager` | `guides.publish.config` | {USE_DITA_OT_GENERATED_CLASS&quot;: false} |

3. 設定を有効にするには、値を`true`に設定し、Cloud Managerを使用して設定をデプロイします。