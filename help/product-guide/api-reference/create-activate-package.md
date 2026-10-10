---
title: パッケージを作成およびアクティブ化するためのREST API
description: パッケージを作成およびアクティブ化するためのREST APIについて説明します
exl-id: 90686f77-a769-44bc-90eb-116cf9d0341e
feature: Rest API Packages
role: Developer
level: Experienced
TQID: 'https://experienceleague.adobe.com/cJUVS3QdzVhnZjFF7uoHfpOSBefgm5W2jh-kWM1PvmE'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
    internal-label: APIs
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
    internal-label: APIs
subfeature_v2:
  - id: fc9467a9-8572-4512-95c7-e18f4488202b
    internal-label: REST API Packages
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '181'
ht-degree: 0%
---
# パッケージを作成およびアクティブ化するためのREST API {#id198CF0260Y4}

次のREST APIを使用すると、CRX パッケージを作成してアクティブ化できます。

## パッケージの作成とアクティブ化

CRX パッケージを作成してアクティブ化するPOST メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/activate

**パラメーター**:
リクエストクエリは、JSON ルール文字列で構成されます。 POST リクエストのコンテンツタイプは`application/json; charset=UTF-8`に設定する必要があります。

**例**:
次の例は、curl コマンドを使用したAPI呼び出しを示しています。

```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate
```


**オプションのパラメーター**

`activationTarget`

**有効な値**

Cloud Serviceの`preview`または`publish`、オンプレミスソフトウェアの`publish`

- Cloud Serviceの場合、パラメーターに無効な値が含まれている場合、パッケージアクティベーションは失敗します。

- オンプレミスソフトウェアの場合、パラメーターに無効な値が含まれている場合、エラーはログに記録され、デフォルト値`publish`を使用して公開が行われます。

オプションのパラメーター`activationTarget`を定義しない場合、Cloud Serviceとオンプレミスソフトウェアの両方のデフォルトのパブリッシュエージェントを使用してアクティブ化されます。



次の例は、オプションのパラメーターを持つcurl コマンドを使用したAPI呼び出しを示しています。


```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate?activationTarget=`<validActivationTargetValue>`
```
