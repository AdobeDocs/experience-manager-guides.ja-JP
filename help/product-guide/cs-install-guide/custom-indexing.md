---
title: カスタムインデックス作成デプロイメント
description: コンテンツのカスタムインデックスを作成する方法を学ぶ
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 7d2d0c21001cd53244588f6b700db184a73ffa77
workflow-type: tm+mt
source-wordcount: '425'
ht-degree: 3%

---

# 検索と置換（Sourceビュー）機能のためのカスタムインデックスのデプロイ

## 概要

このガイドでは、Adobe Experience Manager（AEM）as a Cloud Serviceに `guidesAssetLucene‑1‑custom‑1` カスタムインデックスをデプロイする手順を説明します。 オーサービューの標準の検索と置換の機能はこのインデックスなしでも機能しますが、Source ビューで検索と置換を有効にするには特にカスタムインデックスが必要です。 検索と置換（Source ビュー）を使用すると、表示されるオーサリング済みコンテンツだけでなく、基になる XML 構造（要素、タグ、属性値など）を検索できます。

## 前提条件

インデックスのデプロイメントを進める前に、次が揃っていることを確認します。

- AEM Guidesがインストールされた **AEM as a Cloud Service環境**
- **プロジェクトのコードベースへのアクセス** （Git リポジトリ）
- **Cloud Manager アクセス** （展開権限あり）

## インデックスの定義

検索と置換（Source ビュー）機能を有効にするには、**`guidesAssetLucene-1-custom-1`** という名前のカスタムインデックスを AEM Cloud Service 環境にデプロイする必要があります。

### インデックス名

```
guidesAssetLucene-1-custom-1
```

### インデックス定義（.content.xml）

プロジェクト内の次のインデックス定義をに作成します。

`ui.apps/src/main/content/jcr_root/_oak_index/guidesAssetLucene-1-custom-1/.content.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:dam="http://www.day.com/dam/1.0"
          xmlns:nt="http://www.jcp.org/jcr/nt/1.0" xmlns:oak="http://jackrabbit.apache.org/oak/ns/1.0"
          xmlns:rep="internal"
          jcr:mixinTypes="[rep:AccessControllable]"
          jcr:primaryType="oak:QueryIndexDefinition"
          async="[async,nrt]"
          compatVersion="{Long}2"
          evaluatePathRestrictions="{Boolean}true"
          includedPaths="[/content/dam]"
          reindex="{Boolean}false"
          reindexCount="{Long}1"
          seed="{Long}958982603885135223"
          selectionPolicy="tag"
          tags="[ditaSearch]"
          type="lucene">

    <aggregates jcr:primaryType="nt:unstructured">
        <dam:Asset jcr:primaryType="nt:unstructured">
            <include0
                    jcr:primaryType="nt:unstructured"
                    path="jcr:content/renditions/original/jcr:content"
                    relativeNode="{Boolean}true"/>
        </dam:Asset>
    </aggregates>

    <analyzers jcr:primaryType="nt:unstructured">
        <default jcr:primaryType="nt:unstructured">
            <tokenizer
                    jcr:primaryType="nt:unstructured"
                    name="Whitespace"/>
        </default>
    </analyzers>

    <indexRules jcr:primaryType="nt:unstructured">
        <dam:Asset
                jcr:primaryType="nt:unstructured"
                indexNodeName="{Boolean}true">
            <properties jcr:primaryType="nt:unstructured">
                <cqTags
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/cq:tags"
                        nodeScopeIndex="{Boolean}true"
                        propertyIndex="{Boolean}true"
                        useInSpellcheck="{Boolean}true"
                        useInSuggest="{Boolean}true"/>
                <jcrLastModified
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/jcr:lastModified"
                        ordered="{Boolean}true"
                        propertyIndex="{Boolean}true"
                        type="Date"/>
                <jcrCreated
                        jcr:primaryType="nt:unstructured"
                        name="jcr:created"
                        ordered="{Boolean}true"
                        propertyIndex="{Boolean}true"
                        type="Date"/>
                <guidesParentMaps
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/guidesParentMaps"
                        propertyIndex="{Boolean}true"/>
                <guidesDirectParentMaps
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/guidesDirectParentMaps"
                        propertyIndex="{Boolean}true"/>
                <ditaClass
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/dita_class"
                        propertyIndex="{Boolean}true"/>
                <nodeNameLowerCase
                        jcr:primaryType="nt:unstructured"
                        function="fn:lower-case(fn:name())"
                        ordered="{Boolean}true"
                        propertyIndex="{Boolean}true"/>
                <cqDriveLock
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/cq:driveLock"
                        propertyIndex="{Boolean}true"
                        ordered="{Boolean}true"/>
                <docState
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/docstate"
                        propertyIndex="{Boolean}true"
                        ordered="{Boolean}true"/>
                <jcrPath
                        jcr:primaryType="nt:unstructured"
                        function="fn:path()"
                        ordered="{Boolean}true"/>
                <dcTitleLowerCase
                        jcr:primaryType="nt:unstructured"
                        function="fn:lower-case(jcr:first(jcr:content/metadata/@dc:title))"
                        propertyIndex="{Boolean}true"
                        ordered="{Boolean}true"/>
                <dcTitle
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/dc:title"
                        propertyIndex="{Boolean}true"/>
            </properties>
        </dam:Asset>
    </indexRules>

    <tika jcr:primaryType="nt:unstructured">
        <mimeTypes jcr:primaryType="nt:unstructured">
            <application jcr:primaryType="nt:unstructured">
                <xml
                        jcr:primaryType="nt:unstructured"
                        mappedType="application/dita+xml"/>
            </application>
            <text jcr:primaryType="nt:unstructured">
                <markdown
                        jcr:primaryType="nt:unstructured"
                        mappedType="text/markdown+source"/>
            </text>
        </mimeTypes>
    </tika>
</jcr:root>
```

## デプロイメント手順

カスタムインデックスをAEM as a Cloud Serviceにデプロイする手順について詳しくは、[&#x200B; コンテンツ検索とインデックス作成 – AEM as a Cloud Service](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/operations/indexing) を参照してください。

### このインデックスの重要事項

デプロイメントガイドに従う場合は、検索と置換のインデックスに以下の詳細を使用します。

- **インデックス名**: `guidesAssetLucene-1-custom-1`
- **インデックスタイプ**：完全なカスタムインデックス（OOTB インデックスのカスタマイズではありません）
- **場所**: `ui.apps/src/main/content/jcr_root/_oak_index/guidesAssetLucene-1-custom-1/.content.xml`
- **パッケージプロパティは必須です**。
   - `noIntermediateSaves=true`
   - `allowIndexDefinitions=true`

## インデックス再作成

インデックス再作成は、Cloud Managerの CI/CD パイプラインを通じてインデックスをデプロイする際に、AEM as a Cloud Serviceによって **自動的に** 処理されます。

インデックス作成は通常、自動的に処理されます。 ただし、正しいデプロイメントとインデックス作成プロセスの完了が完了しても、古いデータが検索不可能な場合は、インデックスの手動によるインデックス再作成を 1 回実行する必要があります。

### 期待される内容

- インデックス作成ジョブは、デプロイメント後に自動的に開始されます。
- 進行状況は、Cloud Manager ビルド ページで監視できます。
- 環境は、インデックス作成時も完全に機能し続けます。

## 検証

デプロイメントおよびインデックス作成が完了したら、インデックスが正しく動作していることを確認します。

### インデックスのデプロイメントの検証

開発環境で（CRXDE Liteが使用可能な場合）:

1. `/oak:index/guidesAssetLucene-1-custom-1` に移動します。
2. ノードが期待された設定で存在することを確認します。

### 検索と置換機能のテスト

主な検証は、機能をテストすることです。

1. AEM Guidesを開きます。
2. **ツール**/**ガイド**/**リポジトリ内の検索と置換** に移動します。
3. DITA ファイルまたは Markdown ファイル内のテキストの検索を設定します。
4. 検索結果が正しく返されることを確認します。
5. テストファイルで置換機能をテストします。

## その他のリソース

- [AEM as a Cloud Service インデックス作成ドキュメント &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/operations/indexing)
- [Apache Jackrabbit Oak インデックスガイド &#x200B;](https://jackrabbit.apache.org/oak/docs/query/indexing.html)
- [AEM Guides ドキュメント &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-guides)
- [Cloud Manager のドキュメント](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-manager)
