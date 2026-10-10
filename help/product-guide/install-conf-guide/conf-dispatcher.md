---
title: Dispatcher の設定
description: Dispatcherの設定方法について説明します
feature: Installation
role: Admin
level: Experienced
exl-id: 4b7b4e9b-0a5c-4b61-87d9-a6bd6494c030
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '293'
ht-degree: 10%
---
# Dispatcher の設定 {#id213BCM0M05U}

AEM上のDispatcher オーサーインスタンスをAEM Guidesと共に使用する場合は、設定を完了するために次の追加設定を実行する必要があります。

>[!NOTE]
>
> Dispatcher は、Adobe Experience Manager のキャッシュやロードバランシングを管理するツールです。 Dispatcherの使用について詳しくは、[Dispatcherの概要](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/dispatcher.html?lang=ja)を参照してください。

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
