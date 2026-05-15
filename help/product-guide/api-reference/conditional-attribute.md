---
title: 条件付き属性を操作するREST API
description: 条件付き属性を操作するREST APIについて説明します
exl-id: 1f0e023a-422c-47b9-917f-b0d80090471c
feature: Rest API Conditional Attributes
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/qtmJN6jjCm3xeNYAaHTWr7G3SZFSOodcVqBOKctR3B8
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
subfeature_v2:
  - id: d27d524e-c4e5-4b77-b86b-3db049db0b25
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 154
ht-degree: 5%

---

# 条件付き属性を操作するREST API {#id175UB30E05Z}

次のREST APIを使用すると、フォルダープロファイルに条件付き属性を追加できます。

## フォルダーレベルのプロファイルに条件付き属性を追加する

指定されたフォルダーレベルのプロファイルに条件付き属性を追加するPOST メソッド。

**要求URL**:\
http://*<aem-guides-server\>*: *<port-number\>*/bin/fmdita/folderprofiles

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は``ADDATTRIBUTEPROFILES``です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `profilename` | 文字列 | はい | 条件付き属性を追加する必要があるフォルダーレベルのプロファイルの表示名。 |
| `conditionalprofiles` | JSON配列 | はい | 条件付き属性名と値で構成されるJSON配列。 次のコードスニペットの例では、複数の値が割り当てられている`platform`と`product`の2つの属性を持つJSON配列を示しています。 |

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
HTTP 200 \（Successful\）応答を返します。
