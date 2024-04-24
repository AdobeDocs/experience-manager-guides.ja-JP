---
title: パッケージを作成およびアクティブ化するための REST API
description: パッケージを作成およびアクティブ化するための REST API について説明します
exl-id: 90686f77-a769-44bc-90eb-116cf9d0341e
feature: Rest API Packages
role: Developer
level: Experienced
source-git-commit: 32da48d82b1267bb220424edf385035426293b66
workflow-type: tm+mt
source-wordcount: '160'
ht-degree: 0%

---

# パッケージを作成およびアクティブ化するための REST API {#id198CF0260Y4}

次の REST API を使用すると、CRX パッケージを作成し、アクティブ化できます。

## パッケージ作成および有効化

CRX パッケージを作成してアクティベートするPOST メソッド。

**リクエストURL** :
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/activate&lt;/port-number\>&lt;/aem-guides-server\>

**パラメーター**:
リクエスト クエリは、JSON ルール文字列で構成されます。 POST リクエストのコンテンツタイプは に設定する必要があります `application/json; charset=UTF-8`。

**例**:
以下に、curl コマンドを使用した API 呼び出しの例を示します。

```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate
```


**オプションパラメーター**

`activationTarget`

**有効な値**

`preview` または `publish` Cloud Serviceおよび `publish` オンプレミスソフトウェアの場合

パラメーターに 無効 値が含まれている場合、パッケージのアクティベーションは失敗します。 次の例は、オプションのパラメーターを指定した curl コマンドを使用した API 呼び出しを示しています。


    &#39;&#39;&#39;XML
    
    curl -u &lt;*username*>:&lt;*password*> -H &quot;Content-書式 ＜例外＞Photoshop のみ「テキスト」: アプリケーション/json;charset=UTF-8&quot; -k -X POST -d &quot;{[JSON ルール文字列](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}&quot; http://&lt;*aem-guides-server*>:&lt;*port-number*>/bin/fmdita/activate?activationTarget=&#39;&lt;validActivationTargetValue>&#39;
    &#39;&#39;&#39;
&lt;/validActivationTargetValue>&lt;/*port-number*>&lt;/*aem-guides-server*>&lt;/*password*>&lt;/*username*>