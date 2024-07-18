---
title: 一括有効化の完了イベントハンドラー
description: 一括アクティベーション完了イベントハンドラーについて学ぶ
feature: Bulk Activation Event Handler
role: Developer
level: Experienced
exl-id: 08b153d7-3d13-4804-9e3e-38790dbea1f3
source-git-commit: 9b8971bf7065a94a2e42669094249c822c555718
workflow-type: tm+mt
source-wordcount: '185'
ht-degree: 7%

---

# 一括有効化の完了イベントハンドラー

Experience Manager Guidesは `com/adobe/fmdita/replication/complete` 一括有効化プロセスの完了後、操作を実行するために使用されるイベントを公開します。 このイベントは、一括アクティベーションプロセスが完了するたびにトリガーされます。 例えば、マップのAEM サイトプリセットの一括有効化を実行した場合、このイベントは有効化プロセスの終了後に呼び出されます。

このイベントで使用可能なプロパティを読み取り、さらに処理を行うには、AEM イベントハンドラーを作成する必要があります。

イベントの詳細は、以下で説明します。

**イベント名**:

```
com/adobe/fmdita/replication/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | String | このイベントをトリガーしたファイルのパス。 <br>例えば、`/content/output/sites/ditamap1-ditamap` などです。<br> JSON 配列としてシリアル化されたパスのリストです。 |
| `messageType` | 文字列 | メッセージのタイプ。 <br> 可能なオプション : `REPLICATION` |
| `action` | 文字列 | これは、実行されるアクションです。 <br> 可能なオプション : `BulkReplicate` |
| `user` | 文字列 | 操作を開始したユーザー。 |
| `result` | 文字列 | 一括アクティベーションの結果。 シリアル化された JSON オブジェクトです（<br>`{"success":boolean,"code":integer,"message":"" }`）。 |
| `agentId` | 文字列 | レプリケーションで使用される agentId。 例えば、`"publish"` のように指定します。 |
| `importMode` | 文字列 | アクティベーションで使用されるインポートモード。 使用可能なオプションは次のとおりです。<br>`REPLACE, MERGE, UPDATE` |


**サンプルイベントリスナー**:

```XML
@Component(service = EventHandler.class,
        immediate = true,
        property = {
                EventConstants.EVENT_TOPIC + "=" + "com/adobe/fmdita/replication/complete",
        })
 
public class SampleEventHandler implements EventHandler {
 
    protected final Logger log = LoggerFactory.getLogger(this.getClass());
 
    @Override
    public void handleEvent(final Event event) {
        Map<String, String> properties = new HashMap<>();
        properties.put("paths", (String) event.getProperty("paths"));
        properties.put("messageType", (String) event.getProperty("messageType"));
        properties.put("action", (String) event.getProperty("action"));
        properties.put("result", (String) event.getProperty("result"));
        properties.put("user", (String) event.getProperty("user"));
        properties.put("agentId", (String) event.getProperty("agentId"));
        properties.put("importMode", (String) event.getProperty("importMode"));
 
        String eventTopic = event.getTopic();
        log.debug("eventTopic {}", eventTopic);
        for(Map.Entry entry:properties.entrySet()) {
            log.debug(entry.getKey() + " : " + entry.getValue());
        }
 
    }
}
```
