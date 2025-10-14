---
title: 非 UUID から UUID へのコンテンツの移行
description: 非 UUID を UUID コンテンツに移行する方法を説明します
exl-id: f8b723bf-84c0-4fe6-936e-63970fb3e417
feature: Migration
role: Admin
level: Experienced
source-git-commit: e38cd858201ea657ce276eb4b358b0d4eff502b2
workflow-type: tm+mt
source-wordcount: '205'
ht-degree: 0%

---

# 非 UUID から UUID へのコンテンツの移行 {#id226TI0U20XA}


使用しているExperience Manager Guidesの現在のバージョンに基づいて、非 UUID のコンテンツを UUID に移行できます。

>[!IMPORTANT]
>
> コンテンツを UUID サーバーに移行する前に、UUID 以外のサーバーに互換性のあるAEM Guides バージョンがインストールされていることを確認します。

## 互換性マトリックス

次のマトリックスを使用して、現在の非 UUID のバージョンに基づいて正しい移行パスを判断します。 これにより、移行後の移行がスムーズに行われます。

| 移行には UUID 以外のバージョンが必要です | 移行後の UUID バージョン | 移行後にサポートされるアップグレードパス |
|---|---|---|
| 4.3.1 非 UUID | 4.3.2 UUID | バージョン 4.3.2 UUID に移行した後、4.6.0 （UUID）を直接インストールできます。 4.6.0 を使用したら、バージョン 5.1.0 にアップグレードしてから、5.1.0 サービスパック 1 をインストールします。 |
| 4.6.0 サービスパック 4 非 UUID | 4.6.1 UUID | バージョン 4.6.1 UUID に移行した後、5.1.0 （UUID）に直接アップグレードできます。 アップグレードが完了したら、バージョン 5.1.0 サービスパック 1 をインストールします。 |

コンテンツの移行に関する詳細な手順については、次の記事を参照してください。

- [**4.3.1 非 UUID から 4.3.2 UUID コンテンツへの移行**](./migrate-non-uuid-4-3.md)
- [**4.6.0 サービスパック 4 の非 UUID から 4.6.1 への UUID コンテンツの移行**](./migrate-non-uuid-uuid-4-6.md)



