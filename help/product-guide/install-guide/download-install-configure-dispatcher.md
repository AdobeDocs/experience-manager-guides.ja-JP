---
title: Dispatcher の設定
description: Dispatcherの設定方法について説明します
exl-id: 525de1c3-5a79-4d65-89b4-ca05ae660c2c
feature: Installation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '302'
ht-degree: 6%

---

# Dispatcher の設定 {#id213BCM0M05U}

AEM上のDispatcher オーサーインスタンスをAEM Guidesと共に使用する場合は、設定を完了するために次の追加設定を実行する必要があります。

>[!NOTE]
>
> Dispatcher は、Adobe Experience Manager のキャッシュやロードバランシングを管理するツールです。Dispatcherの使用について詳しくは、[Dispatcherの概要](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/dispatcher.html?lang=ja)を参照してください。

## URLでAllowEncodedSlashを有効にする

AEM Dispatcherの設定では、エンコードされたスラッシュを含むURLはデフォルトで有効になっていませんが、AEM Guidesで作業する場合は、これを有効にする必要があります。 これを行うには、次のスニペットに示すように、Apache設定でAllowEncodedSlashes パラメーターをOnに設定する必要があります。

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

## DITA用のmime.types ファイルの設定

AEM GuidesでDispatcherを使用する場合は、作成者が生のテキストフォーマットではなく\（想定どおりに）コンテンツを表示できるように、DITA マップファイルとトピックファイルがHTMLとしてレンダリングされていることを確認する必要があります。

mime.types ファイルを更新するには、次の手順を実行します。

1. SSHを使用してDispatcher サーバーに接続し、httpd.conf ファイルを参照します。

1. 「mime.types」ファイルのパスを確認します。

1. mime.types ファイルを開き、「text/html」を検索します。 「text/html」のデフォルトのマッピングは次のとおりです。

   `text/html html htm`

1. ditamapおよびdita拡張機能を次のように追加して、マッピングを更新します。

   `text/html html htm ditamap dita`

1. ファイルを保存して閉じます。


この設定の更新により、DispatcherでレンダリングされたDITA マップとトピックファイルが、Assets UIでHTMLとして表示されるようになります。

## ユーザー環境設定リクエスト URLを許可

AEM GuidesでDispatcherを使用する場合、オーサーインスタンスの前にDispatcherがある場合は、次の2つの変更を行います。

- POST リクエスト URLをホワイトリストに登録します。 「`/filters`」ルールの例を次に示します。このルールをDispatcher設定ファイルに追加します。

```json
/xxxx {/type "allow" /method "POST" /url "/home/users/*/preferences"}
```

- URL パターン「/libs/cq/security/userinfo.json」がAuthor Dispatcherにキャッシュされていないことを確認し、author\_dispatcher.anyにルール \（下のような\）を追加します。

```json
/xxxx {
                /glob "/libs/cq/security/userinfo.json"
                /type "deny"
                }
```

**親トピック：**[ ダウンロードしてインストール ](download-install.md)
