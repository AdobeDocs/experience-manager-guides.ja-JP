---
title: カスタムインデックスのデプロイメント
description: カスタムインデックスコンテンツの方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '428'
ht-degree: 3%

---

# Cloud Serviceの検索と置換（Source ビュー）機能のカスタムインデックスのデプロイ

## 概要

このガイドでは、Adobe Experience Manager（AEM）as a Cloud Serviceに`guidesAssetLucene‑1‑custom‑1` カスタムインデックスをデプロイする手順を説明します。 オーサービューの標準の「検索と置換」機能はこのインデックスなしで機能しますが、Source ビューで「検索と置換」を有効にするには、カスタムインデックスが特に必要です。 検索と置換（Source ビュー）を使用すると、表示されるオーサリング済みコンテンツだけでなく、要素、タグ、属性値などの基になるXML構造も検索できます。

## 前提条件

インデックスのデプロイメントを進める前に、次のことを確認してください。

- AEM Guidesがインストールされた&#x200B;**AEM as a Cloud Service環境**
- **プロジェクトのコードベースへのアクセス** （Git リポジトリ）
- デプロイメント権限を持つ&#x200B;**Cloud Manager アクセス**

## インデックス定義

検索と置換（Source ビュー）機能を有効にするには、**`guidesAssetLucene-1-custom-1`**&#x200B;という名前のカスタムインデックスをAEM Cloud Service環境にデプロイする必要があります。

### 索引名

```
guidesAssetLucene-1-custom-1
```

### インデックス定義（.content.xml）

次のインデックス定義を次の場所にプロジェクトに作成します。

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

AEM as a Cloud Serviceへのカスタムインデックスのデプロイについて詳しくは、[Content Search and Indexing - AEM as a Cloud Service](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/operations/indexing)を参照してください。

### この指数の重要ポイント

デプロイメントガイドに従う場合は、「検索と置換」インデックスに次の詳細を使用します。

- **インデックス名**: `guidesAssetLucene-1-custom-1`
- **索引の種類**：完全なカスタム インデックス （OOTB インデックスのカスタマイズではありません）
- **場所**: `ui.apps/src/main/content/jcr_root/_oak_index/guidesAssetLucene-1-custom-1/.content.xml`
- **パッケージのプロパティが必要**:
   - `noIntermediateSaves=true`
   - `allowIndexDefinitions=true`

## インデックス再作成

インデックスの再作成は、Cloud ManagerのCI/CD パイプラインを使用してインデックスをデプロイすると、AEM as a Cloud Serviceによって&#x200B;**自動的に**&#x200B;処理されます。

インデックス作成は通常、自動的に処理されます。 ただし、正しいデプロイメントとインデックス作成プロセスの完了後でも古いデータが検索できない場合は、インデックスの手動での再インデックス作成を1回実行する必要があります。

### 何を期待するか

- デプロイメント後、インデックス作成ジョブが自動的に開始されます。
- 進行状況は、Cloud Manager ビルドページで確認できます。
- インデックス作成中も、環境は完全に動作し続けます。

## 検証

デプロイメントとインデックス作成の完了後、インデックスが正しく機能していることを確認します。

### インデックスのデプロイメントを確認

開発環境で（CRXDE Liteが使用可能な場合）:

1. `/oak:index/guidesAssetLucene-1-custom-1` に移動します。
2. ノードが想定される設定で存在することを確認します。

### 検索と置換機能のテスト

主な検証は機能のテストです。

1. AEM Guidesを開きます。
2. **ツール** > **ガイド** > **リポジトリ内の検索と置換**&#x200B;に移動します。
3. DITAまたはMarkdown ファイル内のテキストの検索を設定します。
4. 検索結果が正しく返されることを確認します。
5. テストファイルで置換機能をテストします。

## その他のリソース

- [AEM as a Cloud Service インデックス作成ドキュメント &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/operations/indexing)
- [Apache Jackrabbit Oak インデックス ガイド &#x200B;](https://jackrabbit.apache.org/oak/docs/query/indexing.html)
- [AEM Guides ドキュメント &#x200B;](https://experienceleague.adobe.com/en/docs/experience-manager-guides)
- [Cloud Manager のドキュメント](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-manager)
