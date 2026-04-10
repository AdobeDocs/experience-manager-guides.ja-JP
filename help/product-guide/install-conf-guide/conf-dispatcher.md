---
title: Dispatcher の設定
description: Dispatcherの設定方法について説明します
feature: Installation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '284'
ht-degree: 7%

---

# Dispatcher の設定 {#id213BCM0M05U}

AEM上のDispatcher オーサーインスタンスをAEM Guidesと共に使用する場合は、設定を完了するために次の追加設定を実行する必要があります。

>[!NOTE]
>
> Dispatcher は、Adobe Experience Manager のキャッシュやロードバランシングを管理するツールです。Dispatcherの使用について詳しくは、[Dispatcherの概要](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/dispatcher.html?lang=ja)を参照してください。

## URLでAllowEncodedSlashを有効にする

AEM Dispatcherの設定では、エンコードされたスラッシュを含むURLはデフォルトで有効になっていませんが、AEM Guidesで作業する場合は、これを有効にする必要があります。 これを行うには、次のスニペットに示すように、Apache設定で`AllowEncodedSlashes` パラメーターを&#x200B;**On**&#x200B;に設定する必要があります。

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

次の手順を実行して、`mime.types` ファイルを更新します。

1. SSHを使用してDispatcher サーバーに接続し、`httpd.conf` ファイルを参照します。

1. `mime.types` ファイルのパスを確認してください。

1. `mime.types` ファイルを開き、「text/html」を検索します。 「text/html」のデフォルトのマッピングは次のとおりです。

   `text/html html htm`

1. ditamapおよびdita拡張機能を次のように追加して、マッピングを更新します。

   `text/html html htm ditamap dita`

1. ファイルを保存して閉じます。


この設定の更新により、DispatcherでレンダリングされたDITA マップとトピックファイルが、Assets UIでHTMLとして表示されるようになります。

## ユーザー環境設定リクエスト URLを許可

AEM GuidesでDispatcherを使用する場合、オーサーインスタンスの前にDispatcherがある場合は、次の2つの変更を行います。

- POST リクエスト URLをホワイトリストに登録します。 `/filters` ルールの例を次に示します。このルールをDispatcher設定ファイルに追加します。

```json
/xxxx {/type "allow" /method "POST" /url "/home/users/*/preferences"}
```

- URL パターン `/libs/cq/security/userinfo.json`がオーサーディスパッチャーにキャッシュされていないことを確認します。ルール `\(like below\)`を`author\_dispatcher.any`に追加します

```json
/xxxx {
                /glob "/libs/cq/security/userinfo.json"
                /type "deny"
                }
```

