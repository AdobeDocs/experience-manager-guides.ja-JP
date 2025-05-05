---
title: AEM guides での DITA ファイルの翻訳パフォーマンスの向上
description: AEM Guidesで DITA 翻訳プロジェクトのパフォーマンスを向上させるためのベストプラクティス、ヒント、テクニック
feature: Translation
role: User, Admin
author: Pulkit Nagpal (punagpal)
exl-id: d7e4f3ae-2143-4767-b7ab-c89f5e5eef59
source-git-commit: 18fe3cbb1439d489d243d98a546ef1095104a863
workflow-type: tm+mt
source-wordcount: '288'
ht-degree: 0%

---

# AEM Guidesでの翻訳のベストプラクティス

時間と共にシステム上の翻訳アクティビティが増加すると、翻訳プロジェクトのパフォーマンスが低下する可能性があります。

各翻訳プロジェクトでアクセス用に複数のユーザーグループが生成されるので、システム内のユーザーグループの数が増加します。 ユーザーグループの数が増えると、ユーザー権限に関連する CRUD 操作が徐々に遅くなり、AEMの全体的なパフォーマンスに影響を与える可能性があります。 さらに、翻訳プロジェクトが完了後もアクティブなままになると、AEMと翻訳ベンダーの間の翻訳同期のパフォーマンスに悪影響を与える可能性があります。

**以下に説明するベストプラクティスに従うと、効率的な環境を維持するのに役立ちます。**

## バージョン 4.6 （オンプレミス）または 2404 （クラウド）より古いビルドの場合：

- 翻訳が完了して承認されると、すべてのプロジェクトを「非アクティブ」とマークします。プロジェクトはレビュー可能なままであり、単に非アクティブとマークされます。
   - これらの手順に従うと、翻訳の全体的なパフォーマンスを良好に維持できます。

     ![ 非アクティブな翻訳プロジェクト ](../assets/translation/translation-project-image1.png)

- 非アクティブとマークされている古いプロジェクトフォルダーの場合、承認済みおよびレビューは削除する必要があります
   - これらの手順に従うと、このプロジェクトフォルダーに関連付けられた一時的な翻訳ファイルとユーザーグループがクリーンアップされるので、翻訳の全体的なパフォーマンスを良好に維持できます。

     ![ 翻訳プロジェクトとフォルダーの ](../assets/translation/translation-project-image2.png) を削除


## 使用している場合は、ビルド 4.6 または 2404 以降：

引き続き上記と同じ手順に従うことができます。 バージョン 4.6/2404 以降、AEM Guidesでは、管理者が翻訳プロジェクトの自動削除を無効にするためのエディター設定を導入しました。

参照：[ 完了した翻訳プロジェクトの自動的な削除または無効化 ](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/user-guide/author-content/create-preview-topics/author-content-aem-guides/work-with-web-editor/translate-documents-web-editor#automatically-delete-or-disable-a-completed-translation-project)

![AEM Guides ](../assets/translation/translation-project-image3.png) で翻訳プロジェクトを削除/無効化する自動設定
