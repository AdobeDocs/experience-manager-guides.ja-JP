---
title: AEMガイドでの DITA コンテンツの再利用
description: この簡単な記事では、AEMガイドと DITA が、コンテンツの再利用性を使用する際に、時間と労力を節約する方法を説明します。
role: User, Admin
source-git-commit: 41edf82dfb6cbfb7a5bf28eadb70d6382ddf2a1f
workflow-type: tm+mt
source-wordcount: '528'
ht-degree: 0%

---

# AEMガイドのコンテンツの再利用性

AdobeAEMガイドは、DITA の強みを活用して、コンテンツの再利用に使いやすいインターフェイスを提供します。

## トピック参照を使用した再利用性 (topicref)



製造会社で、安全上の注意やトラブルシューティングの手法に関する一般的なトピックを持っているとします。

これらは、各機種の特定のユーザーマニュアルで参照および調整でき、冗長性を低減し、コアの安全情報の一貫性を維持します。

```
<map id="user_manual_model 100" title="ABC Model 100 User Manual ">


<topicref href="Safety_Information.dita" format="dita">
</topicref>
.
.
.
.
.
</map>
```


モデル 200 と同様

```
<map id="user_manual_model 200" title="ABC Model 200 User Manual ">

<topicref href="Safety_Information.dita" format="dita">
</topicref>
.
.
.
.
.
  
</map>
```

## コンテンツ参照を使用した再利用性（conref および conkeyref）

コンテンツ参照 (conref) 属性を使用すると、コンテンツの他の部分にリンクできます。 これにより、再利用性が向上し、冗長性が低下します。

次に例を示します。

例えば、金融企業で、個人や企業などの KYC 手続きを含む KYC の一般的なトピックがあるとします。

個々の KYC フラグメントを「Saving account」および「Demat account」トピックに再利用する場合。

```
<section id="kyc_requirements_saving_account">
  <title>Know Your Customer (KYC) Requirements</title>
  <p>To comply with regulations and ensure customer identification, all individual applicants for savings  accounts must fulfill the KYC requirements as outlined below</p>
  <p conref=kyc_procedures.dita#individual_kyc></p>
</section>
```

ここ `conref=kyc_procedures.dita#indvidual_kyc` kyc_procedures.dita はファイルの識別子で、 #individual_kycはフラグメントの識別子です。

kyc_procedure.dita は引き続き唯一の情報源です。 規制の要求に応じて KYC プロセスに変更が生じた場合は、1 つのトピックを更新するだけで済み、その変更は、それを参照するすべてのトピックに自動的に反映されます。

AEMガイドを使用し、2 回クリックします。

手順 1:「再利用可能なコンテンツを挿入」をクリックする
![ツールバー](../../assets/publishing/content-reusability_image1.png)

<br>

手順 2：再利用する必要のあるファイルとフラグメントを選択します。
![conref](../../assets/publishing/content-reusability_image2.png)

「conref」と同様に、「conkeyref」を使用すると、コンテンツのパスを指定する代わりに、キーを使用してコンテンツを参照できます。

コード例：

```
<section conkeyref="kyc_procedure/individual_kyc_procedure" id="individual_kyc_procedure"></section>
```

キーの定義は次のようになります。

```
<map id="ABC_manual">
  <title>ABC_Manual</title>
  <topicref href="kyc_procedure_2020.dita" keys="kyc_procedure" processing-role="resource-only" type="concept">
  </topicref>
  <topicref href="savings_account.dita" type="concept">
  </topicref>
</map>
```

キー — 「Kyc_procedure」は、引き続き情報の唯一のソースです。 規制で必要とされる KYC プロセスに変更がある場合は、1 つのトピックパスを新しいトピックパスで更新するだけで済み、その変更は、それを参照するすべてのトピックに自動的に反映されます。

```
<map id="ABC_manual">
  <title>ABC_Manual</title>
  <topicref href="kyc_procedure_2024.dita" keys="kyc_procedure" processing-role="resource-only" type="concept">
  </topicref>
  <topicref href="savings_account.dita" type="concept">
  </topicref>
</map>
```

ここでは、最近の規制の変更により、トピックパスが「kyc_procedure_2020.dita」から「kyc_procedure_2024.dita」に変更されます。

AEMガイドを使用し、2 回クリックします。

手順 1:「再利用可能なコンテンツを挿入」をクリックする
![ツールバー](../../assets/publishing/content-reusability_image1.png)

手順 2：再利用する必要があるルートマップ（オプション）、キー、フラグメントを選択します。
![conkeyref](../../assets/publishing/content-reusability_image3.png)

ここでは、ルートマップは既にマップビューで開いているので、自動選択されました。


### AEM Guides での 1 回のクリックでコンテンツを再利用

AEMガイドは、1 回のクリックでコンテンツ参照を追加できる「再利用可能なコンテンツ」機能を提供します。

手順 1：再利用可能なコンテンツに汎用トピックを追加する

![再利用可能なコンテンツを追加](../../assets/publishing/content-reusability_image4.png)

手順 2：任意の宛先トピックで再利用するフラグメントを追加し、ドラッグ&amp;ドロップします。

![再利用可能なコンテンツを追加 gif](../../assets/publishing/content-reusability_image5.gif)



## FAQ

- ### コンテンツを再利用ダイアログでファイル/キーを選択した後、すべてのコンテンツが表示されない

他のトピックで再利用するフラグメント（Dita 要素）に ID を割り当てる必要があります

- ## コンテンツを再利用ダイアログにキーが表示されない

キー定義を持つ map-view でルートマップ/親マップを開いていることを確認するか、同じダイアログで手動でルートマップパスを追加します。


<br>


AEM Guides コミュニティで投稿 [フォーラム](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation) を参照してください。

