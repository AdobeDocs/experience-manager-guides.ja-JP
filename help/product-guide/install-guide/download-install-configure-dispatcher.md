---
title: Dispatcher の設定
description: Dispatcherの設定方法を学ぶ
exl-id: 525de1c3-5a79-4d65-89b4-ca05ae660c2c
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '302'
ht-degree: 6%

---

# Dispatcher の設定 {#id213BCM0M05U}

AEM オーサーインスタンス上のDispatcherをAEM Guidesと共に使用する場合は、さらに次の設定を行って設定を完了する必要があります。

>[!NOTE]
>
> Dispatcher は、Adobe Experience Manager のキャッシュやロードバランシングを管理するツールです。Dispatcherの使用について詳しくは、[Dispatcherの概要 ](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/dispatcher.html?lang=ja) を参照してください。

## URL で AllowEncodedSlashes を有効にする

AEM Dispatcher の設定では、エンコードされたスラッシュを含む URL はデフォルトでは有効になっていませんが、AEM Guidesで作業する際にこれを有効にする必要があります。 これを行うには、次のスニペットに示すように、Apache 設定で AllowEncodedSlashes パラメーターを「オン」に設定する必要があります。

```XML
<VirtualHost *:80>
                ServerName www.geometrixx-outdoors.com
                **AllowEncodedSlashes On**
                <Directory />
                <IfModule disp_apache2.c>
                SetHandler dispatcher-handler
                </IfModule>
                Options FollowSymLinks
                AllowOverride None
                </Directory>
                </VirtualHost>
            
```

## DITA の mime.types ファイルの設定

AEM GuidesでDispatcherを使用する場合、作成者がコンテンツを予想どおりに表示できるように、DITA マップとトピックファイルがHTMLとしてレンダリングされるようにする必要があります（生のテキスト形式ではなく\）。

mime.types ファイルを更新するには、次の手順を実行します。

1. SSH を使用してDispatcher サーバーに接続し、httpd.conf ファイルを参照します。

1. 「mime.types」ファイルのパスを確認します。

1. mime.types ファイルを開き、「text/html」を検索します。 「text/html」のデフォルトのマッピングは次のとおりです。

   `text/html html htm`

1. ditamap および dita 拡張機能を次のように追加して、マッピングを更新します。

   `text/html html htm ditamap dita`

1. ファイルを保存して閉じます。


この設定の更新により、Dispatcherでレンダリングされた DITA マップおよびトピックファイルがAssets UI にHTMLとして表示されるようになります。

## ユーザーの環境設定リクエストの URL を許可

AEM GuidesでDispatcherを使用する際に、オーサーインスタンスに Dispatcher が前面にある場合は、次の 2 つの変更を行います。

- POSTリクエストの URL を許可リストに登録します。 サンプルの「`/filters`」ルールを以下に示します。このルールを Dispatcher 設定ファイルに追加します。

```json
/xxxx {/type "allow" /method "POST" /url "/home/users/*/preferences"}
```

- URL パターン「/libs/cq/security/userinfo.json」がオーサー Dispatcher にキャッシュされないので、author\_dispatcher.any にルール\（以下のように）を追加します。

```json
/xxxx {
                /glob "/libs/cq/security/userinfo.json"
                /type "deny"
                }
```

**親トピック：**&#x200B;[ ダウンロードとインストール ](download-install.md)
