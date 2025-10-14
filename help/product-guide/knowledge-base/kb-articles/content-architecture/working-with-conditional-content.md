---
title: 条件付きコンテンツの操作
description: ' [!DNL AEM Guides] で条件を作成し、条件付きコンテンツ生成を設定する方法を説明します。'
role: User
exl-id: a86007e3-48d1-458b-84a7-b683e113e5b2
feature: Publishing
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '199'
ht-degree: 5%

---

# 条件付きコンテンツの操作

**使用事例**


* 作成者は、コンテンツの一部に条件を設定できるので、出力に表示するかどうかを制御できます。

* 作成者は公開時に選択して、様々な条件を表示/非表示にできます。

* 例えば、作成者はコンテンツにバージョン 1.0 およびバージョン 2.0 として属性を追加し、条件を使用してリリース 1.0 のバージョン 1.0 を含め、バージョン 2.0 を除外できます。

**手順 1**

[!UICONTROL &#x200B; フォルダープロファイル &#x200B;] のドキュメントに関連する条件を定義します。
『インストールと設定ガイド』の **69 ページ** にある「グローバルプロファイルまたはフォルダーレベルのプロファイルの条件属性の設定 [&#x200B; の節を参照してください &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf)

![&#x200B; フォルダープロファイルでの条件の設定 &#x200B;](assets/conditions-in-profiles.png)

**手順 2**

**ユーザー環境設定** の手順 1 で定義した **フォルダープロファイル** を XML エディターで選択します。
『ユーザガイド』の **41 ページ** の節 [&#x200B; ユーザー環境設定 &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf) を参照してください


**手順 3**

条件を使用して、コンテンツのセクションに条件を付けます。
『ユーザガイド』の [90 ページ **の節** 条件 &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf) を参照してください

![Web エディターでの条件の使用 &#x200B;](assets/conditions-in-web-editor.png)

**手順 4**

マップレベルで条件プリセットを定義して、出力で有効にする条件を選択します。
ユーザーガイドの [249 ページ **の節** 条件プリセットの使用 &#x200B;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf) を参照してください
