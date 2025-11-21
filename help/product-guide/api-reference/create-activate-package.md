---
title: パッケージを作成してアクティブ化するための REST API
description: パッケージを作成してアクティブ化するための REST API について説明します
exl-id: 90686f77-a769-44bc-90eb-116cf9d0341e
feature: Rest API Packages
role: Developer
level: Experienced
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '175'
ht-degree: 0%

---

# パッケージを作成してアクティブ化するための REST API {#id198CF0260Y4}

次の REST API を使用すると、CRX パッケージを作成してアクティブ化できます。

## パッケージを作成してアクティブ化

CRX パッケージを作成してアクティブ化する POST メソッド。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/activate

**パラメーター**:
リクエストクエリは、JSON ルール文字列で構成されます。 POST リクエストのコンテンツタイプを `application/json; charset=UTF-8` に設定する必要があります。

**例**:
curl コマンドを使用した API 呼び出しの例を次に示します。

```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate
```


**オプションのパラメーター**

`activationTarget`

**有効な値**

Cloud Serviceの場合は `preview` または `publish`、オンプレミスの場合は `publish`

- Cloud Serviceの場合、パラメーターに無効な値が含まれていると、パッケージの有効化は失敗します。

- オンプレミスソフトウェアでは、パラメーターに無効な値が含まれている場合、エラーがログに記録され、デフォルト値 `publish` を使用して公開が行われます。

オプションのパラメーター `activationTarget` を定義しない場合、Cloud Serviceとオンプレミスソフトウェアの両方でデフォルトのパブリッシュエージェントを使用してアクティベートされます。



次の例は、curl コマンドをオプションパラメーターと共に使用した API 呼び出しを示しています。


```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate?activationTarget=`<validActivationTargetValue>`
```
