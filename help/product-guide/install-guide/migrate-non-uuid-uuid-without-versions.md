---
title: バージョンのない非UUID コンテンツをUUID コンテンツに変換する
description: バージョンなしで非UUID コンテンツを移行する方法について説明します。
exl-id: 44b5660d-9961-4463-9686-53085249fb05
feature: Migration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '85'
ht-degree: 0%

---

# バージョンなしコンテンツの移行

>[!IMPORTANT]
>
> アセットのバージョンを無視するか、または移行しない場合は、この移行アプローチを選択できます。


1. AEM デスクトップアプリなどのAdobe ツールを使用して、UUID以外のインスタンスからAEM Assets UIにアセットを直接ダウンロードしてUUID インスタンスにアップロードします。

1. GUID作成用にコンテンツを読み込んだ後、DAM アセットの更新ワークフローを有効にし、すべてのアセットで実行してください。
