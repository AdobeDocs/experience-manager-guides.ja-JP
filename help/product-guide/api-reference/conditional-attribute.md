---
title: 条件付き属性を操作するための REST API
description: 条件付き属性を操作するための REST API について説明します
exl-id: 1f0e023a-422c-47b9-917f-b0d80090471c
feature: Rest API Conditional Attributes
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '147'
ht-degree: 0%

---

# 条件付き属性を操作するための REST API {#id175UB30E05Z}

次の REST API を使用すると、フォルダープロファイルに条件付き属性を追加できます。

## フォルダーレベルのプロファイルへの条件付き属性の追加

特定のフォルダーレベルのプロファイルに条件付き属性をPOSTする追加メソッド。

**リクエスト URL**:\
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/folderprofiles

**パラメーター**:\
|名前|種類|必須|説明|
|----|----|--------|-----------|
|`:operation`|String|Yes|呼び出す操作の名前。 このパラメーターの値は ``ADDATTRIBUTEPROFILES`` です。<br> **メモ：** この値では、大文字と小文字が区別されません。|
|`profilename`|文字列|Yes|条件属性を追加する必要があるフォルダーレベルのプロファイルの表示名。|
|`conditionalprofiles`|JSON 配列|Yes|条件付き属性名と値で構成される JSON 配列。 次のコードスニペットの例は、2 つの属性（`platform` と `product`）が割り当てられた JSON 配列を示しています。|

```JSON
[  {    name: "platform",    
        values: [       
                {value: "win", label: "Windows"},       
                {value: "mac", label: "Mac OS"}    
                ]},
                {    
                    name: "product",    
                    values: [      
                        {value: "aem_1", label: "AEM 6.1"},     
                        {value: "aem_4,  label: "AEM 6.4"}  
                        ]  
                }]
```

**応答値**:\
HTTP 200 \（成功\）応答を返します。
