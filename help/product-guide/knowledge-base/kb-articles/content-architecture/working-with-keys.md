---
title: キーの操作
description: 組織のコンテンツ全体で使用するキーの作成方法
role: Admin
exl-id: b8e3a6d2-ea82-4fdb-bd16-3f4b6594af52
feature: Use Keys in AEM Guides
TQID: https://experienceleague.adobe.com/uWvlGyjI4b0Y6rFwhKNK4egq7p6-N4dql-AHnuwiDDo
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 179
ht-degree: 0%

---

# キーの作成

企業名や商品説明など、再利用可能な一般的なテキストが多くの場所で使用されているが、変更が生じやすい場合は、キーを使用する必要があります。 このような再利用可能なテキストにキーを使用すると、キー値など、1つの場所で変更を行うことで、複数の場所で更新をプッシュできます。

## 手順1：キーを保存するためのグローバルマップの作成

マップを作成し、[!UICONTROL keyref]要素を追加します。

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE map PUBLIC "-//OASIS//DTD DITA Map//EN" "technicalContent/dtd/map.dtd">
<mapid="map.ditamap_ffbdbf06-8658-4311-ad84-1c631bba904f">
  <title>global-keys-map</title>
  <keydefkeys="adobe">
    <topicmeta>
      <linktext>Adobe Systems</linktext>
    </topicmeta>
  </keydef>
  <keydefkeys="AEM">
    <topicmeta>
      <linktext>Adobe Experience Manager</linktext>
    </topicmeta>
  </keydef>
</map>
```

ここでは、上に示すように、2つの定義を定義しました。_Adobe Experience Manager_ テキストに[!UICONTROL keyref]を&#x200B;_AEM_&#x200B;として提供しました。

## 手順2：このマップを公開マップに追加する

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE map PUBLIC "-//OASIS//DTD DITA Map//EN" "technicalContent/dtd/map.dtd">
<mapid="map.ditamap_cbf4a96d-e382-4e8c-8830-bcc093fe6638">
  <title>sample-map</title>
  <topicrefhref="sample-topic-using-the-keys.dita"type="topic">
  </topicref>
  <maprefformat="ditamap"href="global-keys-map.ditamap"type="map">
  </mapref>
</map>
```

## 手順3：キーを使用して、グローバルキーマップで定義された変数を参照する

+ トピックを編集し、[!UICONTROL keyref]を使用してキー値を追加します。
+ スクリーンショットに示すように、キーワードを選択できる場所から小さなウィンドウが表示されます。 これは、「keyword」要素を追加すると表示されます。
  ![要素を挿入](assets/insert_element.png)
  ![ キー参照](assets/key_ref.png)

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic PUBLIC "-//OASIS//DTD DITA Topic//EN" "technicalContent/dtd/topic.dtd">
<topicid="topic.dita_31b00e61-04b5-4193-af7a-68503e88b087">
  <title>sample-topic-using-the-keys</title>
  <shortdesc></shortdesc>
  <body>
    <p>This is a sample topic using the keys defined in the global map</p>
    <p>here i am using the key definition for AEM :<keyword keyref="AEM"></keyword></p>
  </body>
</topic>
```
