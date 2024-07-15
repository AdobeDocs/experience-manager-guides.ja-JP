---
title: バージョンのない非 UUID コンテンツを UUID コンテンツに変換する
description: バージョンを使用せずに非 UUID コンテンツを移行する方法を説明します。
exl-id: 44b5660d-9961-4463-9686-53085249fb05
feature: Migration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '85'
ht-degree: 0%

---

# バージョン管理されていないコンテンツの移行

>[!IMPORTANT]
>
> この移行方法は、アセットのバージョンを無視する場合や移行しない場合に選択できます。


1. AEM デスクトップアプリなどのAdobeツールを使用して、AEM Assets UI から直接、非 UUID インスタンスから UUID インスタンスにアセットをダウンロードしてアップロードします。

1. GUID 作成用にコンテンツを読み込んだ後は、DAM アセットの更新ワークフローを有効にし、すべてのアセットで実行してください。
