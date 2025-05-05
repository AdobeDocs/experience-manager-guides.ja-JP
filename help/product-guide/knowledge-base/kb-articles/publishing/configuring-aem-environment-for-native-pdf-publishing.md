---
title: ネイティブPDF公開用のAEM環境の設定
description: ネイティブPDF公開用のAEM環境の設定
exl-id: 40266ca0-0b0b-4418-b606-f70270addbaa
feature: Native PDF Output
role: User, Admin
source-git-commit: 1baed01b2e573d79d4baaa6a551966ce59449136
workflow-type: tm+mt
source-wordcount: '902'
ht-degree: 1%

---

# ネイティブPDF公開用のAEM環境の設定

AEM Guidesには、PDF形式でコンテンツを設計、開発および公開できるネイティブのPDF公開エンジンが含まれています。

ページレイアウトや CSS テンプレートを作成し、ページレイアウトおよび CSS と組み合わせてPDFテンプレートをデザインする機能を提供します。

AEM GuidesでこのネイティブPDFを設定する手順は、オペレーティングシステムによって異なります。 AEMがインストールされているオペレーティングシステムに応じて、以下の設定手順を使用します。

## 前提条件

ネイティブPDFを設定するための最小要件

- Java Platform, Standard Edition 8 または 11 JDK （Java SE Development Kit）および JRE （Java SE Runtime Environment）がインストールされていること
- AEM 6.5 SP13、SP12、SP11、SP10
- ガイド 4.1 以降のバージョン（非 UUID または UUID）

ネイティブPDFパブリッシュエンジンでは、AEM crx-quickstart フォルダーにノードモジュールを生成するためのOracle JDK が必要です。 デフォルトでは、次のオペレーティングシステムがサポートされています。

- Windows 10、Windows 2019 Server 以降。
- Linux - （RHEL 8 以降、CentOS 7 以降、Ubuntu 18 以降）
- Mac OS （Intel ベース）

## Windows Server （JAVA 11/8）の設定手順

1. AEM サーバーがダウンしていることを確認します。
2. Windows タスクバーで、Windows アイコンを右クリックし、[ システム ] を選択します。
3. [ 設定 ] ウィンドウの [ 関連設定 ] で、[ システムの詳細設定 ] をクリックします。
4. 「詳細」タブで、「環境変数」をクリックします。
5. 「システム変数」セクションで、「_新規_」をクリックして新しい環境変数を作成します。
6. 変数名に JAVA_HOME と入力します。
7. 値フィールドに Java インストールパスを入力し、「OK」をクリックします。

   次に例を示します。

   JAVA 11:

   C:\Program Files\JAVA\jdk-11.0.15.1

   JAVA 8:

   C:\Program Files\JAVA\ jdk1.8.0_144

8. システム変数から「パスを選択」を追加し、「編集」をクリックします。

9. これで、パス変数内にサーバーパスの値が指定され、「OK」をクリックします。

   次に例を示します。

   JAVA 11:

   %JAVA_HOME%\bin\server\

   JAVA 8:

   %JAVA_HOME%\jre\bin\server\

10. 環境変数ダイアログで「OK」を再度クリックします。
11. [ システムのプロパティ ] ダイアログで [OK] を再度クリックします。
12. 次に、AEM サーバーを起動します。
13. Web エディターのプリセットからネイティブPDFを生成する。

## Linux サーバーの設定手順（RHEL7/centOS 7）

1. AEM サーバーがダウンしていることを確認します
2. echo $JAVA_HOME を実行して JAVA_HOME 変数を検証します。
3. JAVA_HOME 変数が設定されていない場合は、手順 4 に従います。 それ以外の場合は、手順 5 に直接移動します。
4. インストールされている Java のバージョンに応じて、次のコマンドを使用して JAVA_HOME 変数を設定します。

   次に例を示します。

   JAVA 11:

   1. export JAVA\_HOME=/usr/lib/jvm/java-11.0.15.1
   2. export PATH=$PATH: $JAVA\_HOME/bin
   3. export LD\_LIBRARY\_PATH=/usr/lib/jvm/jdk-11.0.15.1/lib/server:/usr/java/jdk-11.0.15.1/lib/server

   JAVA 8:

   1. export JAVA\_HOME=/usr/lib/jvm/java-11.0.15.1
   2. export PATH=$PATH: $JAVA\_HOME/bin

5. Guides バージョン 4.2 以降を使用している場合は、AEM Server を再起動して手順 12 に進みます。
6. この記事の下部に添付されている「_node_modules.zip_」を crx-quickstart/profiles/nodejs—b1aad0a7-9079-e56c-1ed8-6fcabababe8166/ ディレクトリにコピーします。
7. crx-quickstart/profiles/nodejs—b1aad0a7-9079-e56c-1ed8-6fcababe8166/の場所にターミナルを開きます。
8. 以下のコマンドを使用して node_modules ディレクトリを削除します

   **rm -rf node_modules**

9. 以下のコマンドを使用して node_modules.zip を解凍します。

   **unzip node_modules.zip**

10. unzip コマンドがインストール/認識されていない場合は、次のコマンドを使用してインストールできます

    **yum install unzip**

11. fontconfig パッケージをインストールします。
コマンド：yum install fontconfig
12. Web エディターのプリセットからネイティブPDFを生成する。

**注意**:node_modules.zip パッケージは [ こちら ](https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:295d8f03-41e1-429b-8465-2761ce3c2fb3) からダウンロードできます。

ダウンロードした Linux オペレーティング・システムのノード・モジュールを手動でインポートすると、Guides 4.1 以前のバージョンを使用しているユーザーに対して回避策が実行されます（手順 6-12）

## Mac マシンの設定手順（JAVA 11/8）

1. oracle JAVA 11 またはOracle JAVA 8 をインストールします。
2. JAVA_HOME 環境変数を、インストールされた JAVA ディレクトリに設定します。
3. Unix シェルを開きます。
（ここでは、Bash を設定に使用しています）

   コマンド：nano ～/.bashrc

4. インストールされている Java のバージョンに応じて、次のコマンドを使用して JAVA_HOME 変数を設定します。

   次に例を示します。

   JAVA 11:

   export JAVA\_HOME= /Library/Java/JavaVirtualMachines/jdk-11.0.15.1.jdk/Contents/Home

5. bashrc をリロード

   コマンド：source ～/.bashrc.

6. コマンド echo $JAVA_HOME を使用して JAVA_HOME が設定されていることを確認します。

7. AEM インストールパスから以下の 3 つのコマンドを実行します

   C:/{aem-installation-folder}/crx-quickstart/profiles/nodejs—b1aad0a7-9079-e56c-1ed8-6fcababe8166

   （i）を検索します。 -type d -exec chmod 0755 {} \;
（ii）を検索します。 -type f -exec chmod 0755 {} \;
（iii）./node-darwin/bin/node node-darwin/lib/node_modules/npm/bin/npm-cli.js —prefix。 install —unsafe-perm —scripts-prepend-node-path

8. 次のコマンドを使用して、Java がインストールされているかどうかを確認します

   （イ） **を実行します。/node-darwin/bin/node**/crx-quickstart/profiles/nodejs からのコマンド – b1aad0a7-9079-e56c-1ed8-6fcababe8166 フォルダー

   ![mac](../assets/publishing/mac.png)

   ii） a = require （&#39;java&#39;）

9. fontconfig パッケージをインストールします。
コマンド：apt install fontconfig

10. Web エディターのプリセットからネイティブPDFを生成する。

## トラブルシューティング

以下は、環境変数が正しく設定されていない場合に、PDFの生成中に発生する可能性のある一般的なエラーです。

### Windows/Mac OS でのヌルポインターの例外

![null ポインター例外 ](../assets/publishing/null-pointer-exception.png)

Java 環境設定を修正しても問題が解決しない場合は、次の点を再検証してください。

1. 出力プリセットが正しく定義されているかどうかを確認するか、スペースを入れずに新しい出力プリセットを作成します。

2. /libs/fmdta/node_resources のノードリソースディレクトリを確認して、インストール時に必要なライブラリがすべてインストールされていることを確認します。

### RHEL 7 Linux OS でライブラリが見つからない

![ ライブラリがありません ](../assets/publishing/missing-libraries.png)

### Publish プロセスのタイムアウト。 指定された時間（0 ms）でプロセスが完了しませんでした

![ 公開プロセスのタイムアウト ](../assets/publishing/publish-process-timeout.png)

CRX リポジトリの/var/dxml/profiles/b1aad0a7-9079-e56c-1ed8-6fcabababe8166/nodejs にある nodejs ノードの timeout プロパティ値を検証します。 デフォルト値は 300 です。



上記の手順のいずれかを実行中に問題が発生した場合は、AEM Guides Community [ フォーラム ](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation) で質問を投稿してください。
