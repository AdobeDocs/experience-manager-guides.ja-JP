---
title: エクスペリエンスフラグメントへのトピックの公開
description: AEM Guidesで、トピックまたはトピック内の要素をエクスペリエンスフラグメントに公開します。  トピックに存在するエクスペリエンスフラグメントを表示し、再公開する方法を説明します。
feature: Publishing
role: User
hide: true
exl-id: c3c6c063-441c-413b-a63e-0acbd126ca6d
source-git-commit: ea597cd14469f21e197c700542b9be7c373aef14
workflow-type: tm+mt
source-wordcount: '995'
ht-degree: 1%

---

# エクスペリエンスフラグメントの公開

エクスペリエンスフラグメントは、Adobe Experience Managerのモジュール型コンテンツの一部です。 これらのコンテンツブロックは、テンプレートに基づいており、コンテンツとレイアウトの両方をカプセル化します。 これらの再利用可能なコンテンツのピースを使用すると、コンテンツ作成者は、Experience Managerがサポートする複数のチャネルにわたって、一貫性のあるスケーラブルなエクスペリエンスを組み立てて提供できます。 この機能により、ニュースレター、プロモーションバナー、顧客の証言など、一貫したマーケティングエクスペリエンスを効率的に簡単に作成できます。

Experience Manager Guidesを使用すると、トピックまたはその要素をエクスペリエンスフラグメントに公開できます。 エクスペリエンスフラグメント内のトピックとその要素の間に JSON ベースのマッピングを作成できます。 次に、マッピングを使用して、トピックまたはその要素をエクスペリエンスフラグメントに公開します。 その後、任意のExperience Manager サイトでエクスペリエンスフラグメントを使用するか、エクスペリエンスフラグメントでサポートされている API を使用して詳細を抽出できます。




エクスペリエンスフラグメントを生成するには、次の手順を実行します。


1. エクスペリエンスフラグメント内にフォルダーを作成します。 このフォルダーを使用して、エクスペリエンスフラグメントテンプレートに基づいて作成したエクスペリエンスフラグメントを保存します。 例えば、*sales-experience-fragments* と指定します。
1. フォルダーを選択し、上部の **プロパティ** アイコンを選択します。
1. フォルダーのプロパティ（例：*sales-experience-fragments*）を編集します。


   * **タイトル**：フォルダーのタイトルを表示または編集します。

   * **許可されたテンプレート**:experiencefragment の子ページとして追加できるテンプレートのリストが含まれます。 許可されたテンプレートを追加するには、必要なテンプレートを取得するための正規表現を「**許可されたテンプレート**」フィールドで指定します。
例：
     `/libs/cq/experience-fragments/components/experiencefragment/template`

     フォルダーに許可されたテンプレートを定義しない場合、デフォルトでは、親フォルダーまたは templates フォルダーからテンプレートが選択されます。
   * **並べ替え可能**：フォルダー内のアセットの順序を変更できます。

     ![ フォルダープロパティにクラウド設定の詳細を追加する ](images/experience-fragment-folder-properties.png){width="650" align="left"}
     *フォルダープロパティにクラウド設定を追加し、フラグメントテンプレートと接続します。*
1. エクスペリエンスフラグメントを生成するには、トピックの **ファイルのプロパティ** にある ![ 出力 **セクションから** 新しい出力 ](./images/Add_icon.svg)**新しい出力アイコン** を選択します。
1. 「**エクスペリエンスフラグメント**」を選択します。\
   ![[ ファイル プロパティ ] の [ オプション ] タブ ](./images/file-properties-outputs.png){width="300" align="left"}

   *トピックのファイルのプロパティから新しいエクスペリエンスフラグメントを追加します*。

   >[!NOTE]
   >
   > **リポジトリ表示** からエクスペリエンスフラグメントを公開することもできます。 エクスペリエンスフラグメントとして公開するトピックを選択します。 次に、**オプション** メニューから **公開形式**/**エクスペリエンスフラグメント** を選択します。

1. **エクスペリエンスフラグメントを生成** ダイアログボックスで、次の詳細を入力します。
   ![ エクスペリエンスフラグメントとして公開ダイアログでフラグメントモデルとマッピングの詳細を追加 ](images/experience-fragment-generate.png){width="500" align="left"}

   *パス、テンプレート、マッピングの詳細を追加して、トピックまたはその要素をエクスペリエンスフラグメントとして公開します。 既存のエクスペリエンスフラグメントを上書きできます。*

   * **パス**：エクスペリエンスフラグメントを公開するフォルダーのパスを参照して選択します。 既存のエクスペリエンスフラグメントを選択し、再公開することもできます。
   * **タイトル**：エクスペリエンスフラグメントのタイトルを入力します。 デフォルトでは、タイトルにはトピックのタイトルが入力されています。 編集できます。 このタイトルは、エクスペリエンスフラグメントの名前を生成するために使用されます。
   * **名前**：エクスペリエンスフラグメントの名前を入力します。 デフォルトでは、名前にはトピックのタイトルが設定され、スペースは「_」に置き換えられます。 例えば、*sample_experience_fragment* と指定します。 編集できます。 この名前は、エクスペリエンスフラグメントの URL の生成に使用されます。
   * **テンプレート**：エクスペリエンスフラグメントの作成に使用する、エクスペリエンスフラグメントテンプレートを選択します。 テンプレートは、プロパティで設定したフォルダーから選択されます。
   * **Mapping**:*experienceFragmentMapping.json* ファイルからマッピングを選択して表示します。



     管理者は、マッピングを *experienceFragmentMapping.json* ファイルに追加できます。  [ トピックとエクスペリエンスフラグメント間のマッピングを作成する ](/help/product-guide/cs-install-guide/conf-experience-fragment-mapping-cs.md) 方法について詳しくは、インストールおよび設定ガイドを参照してください。

   * また、様々な条件を選択してコンテンツを公開することもできます。  次のいずれかのオプションを選択します。


      * **なし**：公開された出力に条件を適用しない場合は、このオプションを選択します。
      * **DITAVAL の使用**：パーソナライズされたコンテンツを生成する DITAVAL ファイルを選択します。 参照ダイアログを使用するか、ファイルパスを入力して、DITAVAL ファイルを選択できます。
      * **属性の使用**: DITA トピックで条件属性を定義できます。 次に、条件属性を選択して、関連するコンテンツを公開します。

     >[!NOTE]
     > 
     >条件は、トピックで条件属性が定義されている場合にのみ有効になります。


   * エクスペリエンスフラグメントが既に存在し、上書きする場合は、「**既存コンテンツを上書き**」チェックボックスを選択します。 エクスペリエンスフラグメントが既に存在する場合に、このチェックボックスをオンにしないと、Experience Manager Guidesにエラーが表示されます。
1. 「**生成**」をクリックして、エクスペリエンスフラグメントを公開します。
1. **ファイルのプロパティ** の「**出力**」セクションで、トピックのエクスペリエンスフラグメントを表示できます。 エクスペリエンスフラグメントは、公開の日時に応じて、最新のを最初に表示します。

   ![ トピックのエクスペリエンスフラグメントを表示 ](images/experience-fragment-outputs.png){width=300 align=&quot;left&quot;}

   *トピックに存在するエクスペリエンスフラグメントを表示し、再公開します*。




エクスペリエンスフラグメントを公開したら、任意のAdobe Experience Manager サイトで使用することもできます。


## エクスペリエンスフラグメントのオプションメニュー

**オプション** メニューを使用して、エクスペリエンスフラグメントに対して次のアクションを実行することもできます。

* **生成**：エクスペリエンスフラグメントを再公開して、DITA トピックの最新のコンテンツで更新します。 出力を再生成する場合、エクスペリエンスフラグメントのパス、名前、タイトル、テンプレートは変更できません。 ただし、出力の再生時に別の条件を選択できます。

* **複製**：エクスペリエンスフラグメントを複製します。 パス、名前、タイトルおよびテンプレートは変更できます。 エクスペリエンスフラグメントを複製する際に、別の条件を選択することもできます。

* **削除**：出力リストからエクスペリエンスフラグメントを削除します。 確認プロンプトが表示されます。 確認すると、エクスペリエンスフラグメントが **出力** リストから削除されます。 ただし、エクスペリエンスフラグメントはフォルダーから削除されません。

* **表示**：エクスペリエンスフラグメントエディターを表示します。 また、変更を加えて保存することもできます。
