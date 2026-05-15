---
title: Web エディターの起動
description: AEM GuidesのAEM ナビゲーションページ、AEM Assets UI、DITA マップコンソールからweb エディターを起動する方法について説明します。
feature: Authoring, Web Editor
role: User
hide: true
exl-id: 374042e4-0f1c-44cf-926c-c9fefa4b1de0
TQID: https://experienceleague.adobe.com/O-rew8ysArVVeDpj3T7oEi-hEg-phDWzb85gD2l-9gQ
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 592
ht-degree: 0%

---

# Web エディターの起動 {#id2056B0140HS}

Web エディターは、次の場所から起動できます。

- [AEM ナビゲーションページ](#id2056BG00RZJ)
- [AEM ASSETS UI](#id2056BG0307U)
- [DITA マップコンソール](#id2056BG090BF)

次の節では、Web エディターにアクセスして様々な場所から起動する方法の詳細について説明します。

## AEM ナビゲーションページ {#id2056BG00RZJ}

AEMにログインすると、ナビゲーションページが表示されます。

![](images/web-editor-from-navigation-page.png){width="800"}

**ガイド** リンクをクリックすると、Web エディターに直接アクセスできます。

![](images/web-editor-launch-page.png){width="800"}

ファイルを選択せずにWeb エディターを起動すると、空白のWeb エディター画面が表示されます。 AEM リポジトリやお気に入りのコレクションからファイルを開いて編集できます。

- 「**ガイド**」アイコン（![](images/aem-guides-icon.png)）をクリックして、AEMのナビゲーションページに戻ります。

- **閉じる** ボタンを使用すると、設定に基づいて宛先に移動できます。



  <details>

  <summary> クラウドサービス </summary>

  Cloud Servicesを使用している場合は、「**閉じる**」ボタンをクリックして、AEM ナビゲーションページに戻ります。
  </details>

  <details>

  <summary> オンプレミスソフトウェア</summary>

  AEM Guides オンプレミスソフトウェア（4.2.1以降）を使用している場合は、右側の&#x200B;**閉じる** ボタンをクリックして、Assets UIの現在のファイルパスに戻ります。

  </details>

## AEM ASSETS UI {#id2056BG0307U}

Web エディターを起動できる別の場所は、AEM Assets UIです。 1つ以上のトピックを選択し、Web エディターで直接開くことができます。 Web エディターでトピックを開くには、次の手順に従います。

1. Assets UIで、編集するトピックに移動します。

   >[!NOTE]
   >
   > トピックのUUIDも確認できます。

   。

   ![](images/assets_ui_with_uuid_cs.png){width="800"}

   >[!IMPORTANT]
   >
   > 編集するトピックを含むフォルダーに対する読み取り権限と書き込み権限があることを確認します。

1. トピックの排他的ロックを取得するには、トピックを選択し、**チェックアウト**&#x200B;をクリックします。

   >[!IMPORTANT]
   >
   > 管理者が「**チェックアウトなしで編集を無効にする**」オプションを設定している場合は、編集前にファイルをチェックアウトする必要があります。 ファイルをチェックアウトしない場合は、編集オプションを表示できません。

1. アセット選択モードを閉じて、編集するトピックをクリックします。

   トピックのプレビューが表示されます。

   リスト表示、カード表示、プレビューモードからWeb エディターを開くことができます。

   >[!IMPORTANT]
   >
   > 複数のトピックを開いて編集する場合は、アセット UIから目的のトピックを選択し、「編集」をクリックします。 ブラウザーでポップアップブロッカーが有効になっていないことを確認します。有効になっていない場合は、選択したリストの最初のトピックのみが編集用に開かれます。

   ![](images/edit-from-preview_cs.png){width="800"}

   トピックをプレビューせず、Web エディターで直接開く場合は、カード表示のクイックアクションメニューの「編集」アイコンをクリックします。

   ![](images/edit-topic-from-quick-action_cs.png){width="800"}

1. 「**編集**」をクリックして、Web エディターでトピックを開きます。

   ![](images/edit-mode.png){width="800"}


## DITA マップコンソール {#id2056BG090BF}

DITA マップコンソールからWeb エディターを開くには、次の手順に従います。

1. Assets UIで、編集するトピックを含むDITA マップファイルに移動してクリックします。

   DITA マップコンソールが表示されます。

1. **トピック**&#x200B;をクリックします。

   マップファイル内のトピックのリストが表示されます。 トピックのUUIDは、トピックタイトルの下に表示されます。

1. 編集するトピックファイルを選択します。

1. 「**トピックを編集**」をクリックします。

   ![](images/edit-topics-map-console_cs.png){width="800"}

1. トピックがWeb エディターで開きます。

   >[!IMPORTANT]
   >
   > 管理者が「**チェックアウトなしで編集を無効にする**」オプションを設定している場合は、編集前にファイルをチェックアウトする必要があります。 ファイルをチェックアウトしない場合、ドキュメントはエディターで読み取り専用モードで開きます。


**親トピック：**&#x200B;[&#x200B; Web エディターの操作](web-editor.md)
