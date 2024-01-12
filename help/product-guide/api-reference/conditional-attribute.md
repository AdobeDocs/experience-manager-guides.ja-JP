---
title: 条件付き属性を操作する REST API
description: 条件付き属性を操作する REST API について説明します。
exl-id: 1f0e023a-422c-47b9-917f-b0d80090471c
feature: Rest API Conditional Attributes
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '147'
ht-degree: 0%

---

# 条件付き属性を操作する REST API {#id175UB30E05Z}

次の REST API を使用して、フォルダープロファイルに条件属性を追加できます。

## フォルダーレベルのプロファイルへの条件付き属性の追加

特定のPOSTーレベルのプロファイルに条件付き属性を追加するフォルダーメソッド。

**リクエスト URL**:\
http://*&lt;aem-guides-server>*: *&lt;port-number>*/bin/fmdita/folderprofiles

**パラメーター**:\
|名前|型|必須|説明| |—|—|—|—| |`:operation`|String|はい|呼び出される操作の名前。 このパラメーターの値は、 ``ADDATTRIBUTEPROFILES``. <br> **注意：** 値では大文字と小文字が区別されません。| |`profilename`|String|はい|条件付き属性を追加する必要があるフォルダーレベルのプロファイルの名前を表示します。| |`conditionalprofiles`|JSON 配列|はい|条件付き属性の名前と値で構成される JSON 配列。 次のコードスニペットの例は、2 つの属性を持つ JSON 配列を示しています。 `platform` および `product` 複数の値が割り当てられている。|

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
HTTP 200 \(Successful\) 応答を返します。
