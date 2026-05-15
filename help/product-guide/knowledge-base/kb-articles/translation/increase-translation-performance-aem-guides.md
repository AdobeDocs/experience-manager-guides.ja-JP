---
title: AEM guidesでDITA ファイルの翻訳パフォーマンスを向上
description: AEM GuidesでDITA翻訳プロジェクトのパフォーマンスを向上させるためのベストプラクティス、ヒント、テクニック
feature: Translation
role: User, Admin
author: Pulkit Nagpal (punagpal)
exl-id: d7e4f3ae-2143-4767-b7ab-c89f5e5eef59
TQID: https://experienceleague.adobe.com/n6-b3-ZsOIueVYWgcm1NkDLKRAOwQhWxctbgj7Q6P1U
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 324
ht-degree: 0%

---

# AEM Guidesでの翻訳に従うべきベストプラクティス

システム上の翻訳アクティビティが時間の経過とともに増加すると、翻訳プロジェクトのパフォーマンスが低下する可能性があります。

各翻訳プロジェクトでは、アクセス用に複数のユーザーグループが生成されるため、システム内のユーザーグループの数が増加します。 ユーザーグループの数が増えるにつれて、ユーザー権限に関連するCRUD操作を徐々に遅くし、AEM全体のパフォーマンスに影響を与える可能性があります。 さらに、完了後も翻訳プロジェクトがアクティブのままである場合、AEMと翻訳ベンダー間の翻訳の同期のパフォーマンスに悪影響を及ぼす可能性があります。

**以下に概説するベストプラクティスに従うと、効率的な環境を維持できます。**

## 4.6 （オンプレミス）または2404 （クラウド）より古いビルドを使用している場合：

- 翻訳が完了して承認されたら、すべてのプロジェクトを「非アクティブ」としてマークします。プロジェクトは引き続きレビュー可能であり、非アクティブとしてマークされます。
   - 次の手順を実行すると、全体的な翻訳パフォーマンスを正常に維持できます。
     ![非アクティブな翻訳プロジェクト ](../assets/translation/translation-project-image1.png)

- 古いプロジェクトの場合は、非アクティブ、承認済みおよびレビュー済みとしてマークされたフォルダーを削除する必要があります
   - これらの手順を実行すると、このプロジェクトフォルダーに関連する一時的な翻訳ファイルとユーザーグループをクリーンアップすることで、翻訳パフォーマンス全体を正常に維持できます。
     ![翻訳プロジェクトとフォルダー](../assets/translation/translation-project-image2.png)を削除


## を使用している場合は、ビルド 4.6または2404以降：

上記と同じ手順を引き続き実行できます。 バージョン 4.6/2404以降、AEM Guidesでは、管理者が翻訳プロジェクトの自動削除を無効にするためのエディター設定が導入されています。

参照：[完了した翻訳プロジェクトを自動的に削除または無効にする](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/user-guide/author-content/create-preview-topics/author-content-aem-guides/work-with-web-editor/translate-documents-web-editor#automatically-delete-or-disable-a-completed-translation-project)

![AEM Guides ](../assets/translation/translation-project-image3.png)で翻訳プロジェクトを削除および無効にする自動設定
