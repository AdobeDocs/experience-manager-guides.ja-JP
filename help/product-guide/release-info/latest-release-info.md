---
title: AEM Guides リリース
description: 最新の AEM Guides リリースと前提条件の AEM バージョン
exl-id: 780697a9-bdc6-40c2-b258-64639fe30f88
feature: Release Notes
role: Leader
source-git-commit: 3c81a9ed367c51fb1653055e1e0b5492948a9dd8
workflow-type: tm+mt
source-wordcount: '842'
ht-degree: 1%

---

# [!DNL AEM Guides] リリース

[!DNL Adobe Experience Manager Guides] は、AEMにデプロイされたアプリケーションです。 これは、Adobe Experience Managerでのネイティブ DITA サポートを可能にし、AEMが DITA ベースのコンテンツの作成と配信を処理できる、強力なエンタープライズグレードのコンポーネントコンテンツ管理ソリューション（CCMS）です。

AEM Guides パッケージは、UUID ビルドと非 UUID ビルドの 2 つのバリアントで使用できます。

## UUID ビルドと非 UUID ビルド

UUID ビルドと非 UUID ビルドの主な違いは次のとおりです。

|  | 非 UUID ビルド | UUID ビルド |
|---|---|---|
| **資産の特定** | リポジトリ内のアセットのパスを使用して、すべてのアセットが識別されます。 | すべてのアセットは、UUID （アセットが最初にアップロードされたときにシステムが生成した一意の ID）を使用して識別されます。 |
| **参照の作成** | すべてのコンテンツ参照は、パスに基づいて作成されます。 | すべてのコンテンツ参照は、UUID に基づいて作成されます。 |

### UUID ビルドの利点

* UUID のインストールのパフォーマンスが向上しました。
   * 参照はパスに依存しません。参照はパスではなく UUID に基づいて作成されるので、参照管理システムはリンクを認識します。
   * 移動/更新操作が効率的です。アセットがリポジトリ内の別のパスに移動しても、UUID は同じままです。 そのため、移動/更新操作時にアセット間の参照にパッチを適用するための処理は必要ありません。
* UUID のビルドは、このフレームワークをAEM Guidesのクラウド設定にも使用するので、将来を見据えています。


### 2 つのビルドから選択します

* 新規のお客様は、UUID ビルドを使用することをお勧めします。
* 既存のお客様は、非 UUID から UUID ビルドへの移行が可能になったので、UUID ビルドに移行することを選択できます。 詳しくは、*Adobe Experience Manager Guidesのインストールと設定* の **UUID 以外から UUID へのコンテンツ移行** の節を参照してください。

>[!NOTE]
>
>* お客様は、最初の設定時に UUID と非 UUID モードを決定する必要があります（ヘルプが必要な場合は、Customer Success Manager に接続し、使用状況に基づいて決定できるよう支援してください）。
>* AEM Guidesをあるバージョンから新しいバージョンにアップグレードする場合は、既存のモードに一致するように同じモード（UUID/非 UUID）を選択する必要があります。 非 UUID ビルドは、UUID ビルドに直接アップグレードしないでください。 非 UUID ビルドから UUID ビルドに移行するには、コンテンツを移行する必要があります。

**ビルドのアップグレード**

古いバージョンから新しいバージョンの [!DNL AEM Guides] にアップグレードする場合は、移行スクリプトの実行が必要になることがあります。 アップグレード手順については、リリースノートおよびバージョン固有のドキュメントを参照してください。

すべてのアップグレードパスが直接サポートされているわけではありません。 例えば、バージョン 4.0 への直接アップグレードは、バージョン 3.8 からのみ可能です。
3.8 より前のバージョンを使用している場合は、バージョン固有のドキュメントを参照してアップグレード手順を確認してください [ ヘルプアーカイブ ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)。
カスタマーサクセスマネージャーに連絡して、アップグレードパスを検証してください。

**[!DNL AEM Guides]ビルド**

>[!NOTE]
>
>AEM as a Cloud Serviceの [!DNL AEM Guides] ビルドへのアクセスについては、カスタマーサクセスマネージャーにお問い合わせください。

次のリストには、AMS またはオンプレミスへのインストールに使用できる最新の [!DNL AEM Guides] パッケージ、パッケージのダウンロードリンク、その他の役立つ情報が含まれています。 [!DNL AEM Guides] の最新のビルドのみを使用することをお勧めします。 何らかの理由で古いビルドへのアクセスが必要な場合は、アカウントのカスタマーサクセスマネージャーにお問い合わせください。



>[!NOTE]
>
>Experience Manager Guidesをインストールする前に、お使いのシステムが [ 技術要件 ](../install-guide/download-install-technical-requirements.md) を満たしていることを確認してください。

| [!DNL AEM Guides] リリース | リリースノート | ダウンロードリンクを作成 |
|---|---|---|
| **AEM Guides 4.6.0** | [4.6.0 サービスパック 3 の問題の修正 ](./fixed-issues-4-6-0-sp2.md)<br><br>[4.6.0 サービスパック 3 のアップグレード手順 ](upgrade-instructions-4-6-0-sp2.md)<br><br>[4.6.0 サービスパック 1 のアップグレード手順 ](upgrade-instructions-4-6-0-sp1.md)<br><br>[4.6.0 のアップグレード手順 ](./upgrade-instructions-4-6-0.md)<br><br>[4.6.0 の新機能 ](./whats-new-4-6.md)<br><br> [4.6.0 で修正された問題 ](./fixed-issues-4-6-0.md) | **非 UUID AEM 6.5** <br> [4.6.0 サービスパック 3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-6-3%2Fcom.adobe.fmdita-6.5-hotfix-4.6.0.3.9.zip)<br>[4.6.0 サービスパック 1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-6-1%2Fcom.adobe.fmdita-6.5-hotfix-4.6.0.1.10.zip) <br> [460](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-6%2Fcom.adobe.fmdita-6.5-4.6.0.164.zip)<br> **UUID AEM 6.5** <br> [4.6.0 サービスパック 3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-6-3%2Fcom.adobe.fmdita.uuid-6.5-hotfix-4.6.0.3.9.zip)<br>[4.6.0 サービスパック 1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-6-1%2Fcom.adobe.fmdita.uuid-6.5-hotfix-4.6.0.1.10.zip) <br> [4.6.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-6%2Fcom.adobe.fmdita-6.5-uuid-4.6.0.164.zip) |
| **AEM Guides 4.4.0** | [4.4.0 アップグレードの手順 ](./upgrade-instructions-4-4.md)<br><br>[4.4.0 新機能 ](./whats-new-4-4.md)<br><br> [4.4.0 で修正された問題 ](./fixed-issues-4-4.md) | **非 UUID AEM 6.5** <br> [440](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-4%2Fcom.adobe.fmdita-6.5-4.4.0.40.zip)<br> **UUID AEM 6.5** <br>[4.4.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-4%2Fcom.adobe.fmdita-6.5-uuid-4.4.0.40.zip) |
| **AEM Guides 4.3.0** | [4.3.1.5 アップグレード手順 ](./upgrade-instructions-4-3-1-5.md)<br><br> [4.3.1 リリースノート ](./release-notes-4-3-1.md)<br><br>[4.3.0 リリースノート ](./release-notes-4-3.md) | **非 UUID AEM 6.5**<br>[4.3.1.5](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1-5%2Fcom.adobe.fmdita-6.5-hotfix-4.3.1.5.1.zip)<br> [431](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1%2Fcom.adobe.fmdita-6.5-4.3.1.390.zip)<br> [4.3.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3%2Fcom.adobe.fmdita-6.5-4.3.0.347.zip)<br> **UUID AEM 6.5** <br>[4.3.1.5](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1-5%2Fcom.adobe.fmdita.uuid-6.5-hotfix-4.3.1.5.1.zip)<br> [4.3.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1%2Fcom.adobe.fmdita-6.5-uuid-4.3.1.390.zip)<br>[4.3.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3%2Fcom.adobe.fmdita-6.5-uuid-4.3.0.347.zip) |
| **AEM Guides 4.2** | [4.2.1 リリースノート ](release-notes-4-2-1.md)<br> <br> [4.2 リリースノート ](./release-notes-4-2.md) | **非 UUID**: <br> **AEM 6.5** <br>[4.2.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2-1%2F4-2-1-non-uuid%2Fcom.adobe.fmdita-6.5-4.2.1.270.zip)<br>[4.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2%2F4-2-non-uuid%2Fcom.adobe.fmdita-6.5-4.2.229.zip)<br><br> **UUID** <br>**AEM 6.5** <br>[4.2.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2-1%2F4-2-1-uuid%2Fcom.adobe.fmdita-6.5-uuid-4.2.1.270.zip)<br>[4.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2%2F4-2-uuid%2Fcom.adobe.fmdita-6.5-uuid-4.2.229.zip)<br> |
| **AEM Guides 4.1** | [4.1.x リリースノート ](release-notes-4-1.md) | **非 UUID**: <br> **AEM 6.5** <br>[4.1.3.4](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-3%2F4-1-3-non-uuid%2Fcom.adobe.fmdita-6.5-sp-4.1.3.2.zip)<br>[1.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-2%2F4-1-2-non-uuid%2Fcom.adobe.fmdita-6.5-sp-4.1.2.11.zip)<br>[4.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1%2F4-1-non-uuid%2Fcom.adobe.fmdita-6.5-4.1.159.zip)<br><br> **UUID** <br>**AEM 6.5** <br>[4.1.3.4](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-3%2F4-1-3-uuid%2Fcom.adobe.fmdita.uuid-6.5-sp-4.1.3.2.zip)<br>[1.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-2%2F4-1-2-uuid%2Fcom.adobe.fmdita.uuid-6.5-sp-4.1.2.11.zip)<br>[4.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1%2F4-1-uuid%2Fcom.adobe.fmdita-6.5-uuid-4.1.159.zip) |
| **AEM Guides 4.0** | [4.0.x リリースノート ](https://helpx.adobe.com/xml-documentation-for-experience-manager/release-note/release-notes-xml-documentation-solution-4-0.html) | **非 UUID**: <br> **AEM 6.5** <br>[4.0.3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-3%2F4-0-2-non-uuid%2Fcom.adobe.fmdita-6.5-hotfix-4.0.3.1.zip)<br>[4.0.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-2%2F4-0-2-non-uuid%2Fcom.adobe.fmdita-6.5-sp-4.0.2.10.zip) <br> [40](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/4-0/4-0-non-uuid/com.adobe.fmdita-6.5-4.0.70.zip)<br><br> **UUID** <br>**AEM 6.5** <br>[4.0.3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-3%2F4-0-3-uuid%2Fcom.adobe.fmdita.uuid-6.5-hotfix-4.0.3.1.zip) <br>[4.0.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-2%2F4-0-2-uuid%2Fcom.adobe.fmdita.uuid-6.5-sp-4.0.2.10.zip)<br> [400](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/4-0/4-0-uuid/com.adobe.fmdita-6.5-uuid-4.0.70.zip) |
| **AEM Guides 3.8.5** <br> 3.8.5 は、3.8 に加えて SP リリースになりました。3.8.5 SP に重大な修正が含まれているため、<br>3.8 リリースはスタンドアロンでインストールしないでください。 <br> お客様は、まず 3.8 をインストールし、次に SP 3.8.5 をインストールする必要があります。 | [3.8.x リリースノート ](https://helpx.adobe.com/xml-documentation-for-experience-manager/release-note/release-notes-xml-documentation-solution-3-8.html) | **非 UUID**: <br> **AEM 6.5** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5/com.adobe.fmdita-6.5-hotfix-3.8.5.2.zip) <br>[3.8](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8/com.adobe.fmdita-6.5-3.8.166.zip)<br> **AEM 6.4** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5/com.adobe.fmdita-6.4-hotfix-3.8.5.1.zip) <br>[3.8](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8/com.adobe.fmdita-6.4-3.8.166.zip) <br> **AEM 6.3** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5/com.adobe.fmdita-6.3-hotfix-3.8.5.1.zip) <br>[3.8](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8/com.adobe.fmdita-6.3-3.8.166.zip) <br><br> **UUID** <br>**AEM 6.5** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5uuid/com.adobe.fmdita.uuid-6.5-hotfix-3.8.5.2.zip) <br> [38](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8uuid/com.adobe.fmdita.uuid-6.5-3.8.168.zip) |
