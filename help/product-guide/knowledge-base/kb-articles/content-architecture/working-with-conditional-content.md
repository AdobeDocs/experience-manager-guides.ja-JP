---
title: 条件付きコンテンツの操作
description: 条件を作成し、 [!DNL AEM Guides]で条件付きコンテンツ生成を設定する方法を説明します
role: User
exl-id: a86007e3-48d1-458b-84a7-b683e113e5b2
feature: Publishing
TQID: https://experienceleague.adobe.com/3Gz6-sJn7dvzJSlnKgRoRqpFTqtj5fiVlAjOv0lbD1o
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 262
ht-degree: 3%

---

# 条件付きコンテンツの操作

**使用事例**

* 作成者は、コンテンツの一部に条件を設定して、出力に表示するかどうかを制御できます。

* 作成者は、公開時に異なる条件を表示/非表示にできます。

* 例えば、コンテンツにバージョン 1.0とバージョン 2.0として属性を追加し、条件を使用してリリース 1.0のバージョン 1.0を含め、バージョン 2.0を除外できます。

**手順 1**

[!UICONTROL &#x200B; フォルダープロファイル &#x200B;]のドキュメントに関連する条件を定義します。
インストールおよび設定ガイド [&#128279;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf)の ページ 69のグローバルまたはフォルダーレベルのプロファイル **の条件付き属性の設定** セクションを参照してください

![&#x200B; フォルダープロファイルの条件の設定](assets/conditions-in-profiles.png)

**手順 2**

XML エディターの&#x200B;**ユーザー環境設定**&#x200B;の手順1で定義された&#x200B;**[!UICONTROL フォルダープロファイル]**&#x200B;を選択します。
ユーザーガイド [&#128279;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf)の41 ページの&#x200B;**ユーザー環境設定**&#x200B;の節を参照してください


**手順 3**

条件を使用して、コンテンツのセクションを条件付けします。
ユーザーガイド [&#128279;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf)の ページ 90の&#x200B;**条件**&#x200B;の節を参照してください

![&#x200B; エディターで条件を使用](assets/conditions-in-web-editor.png)

**手順 4**

マップレベルで条件プリセットを定義して、出力で有効にする条件を選択します。
ユーザーガイド [&#128279;](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf)の ページ 249の&#x200B;**条件プリセットの使用**&#x200B;の節を参照してください
