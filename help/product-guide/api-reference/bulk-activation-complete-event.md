---
title: 一括アクティブ化完了イベントハンドラー
description: 一括アクティベーションの完全なイベントハンドラーについて説明します
feature: Bulk Activation Event Handler
role: Developer
level: Experienced
exl-id: 08b153d7-3d13-4804-9e3e-38790dbea1f3
TQID: https://experienceleague.adobe.com/M8Q8A8auCkKjmoilHsUfU2ztNSCxOWstwPC1bMLmvD0
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 185
ht-degree: 6%

---

# 一括アクティブ化完了イベントハンドラー

Experience Manager Guidesは、一括アクティベーションプロセスの完了後に操作を実行するために使用される`com/adobe/fmdita/replication/complete` イベントを公開します。 このイベントは、一括アクティベーションプロセスが完了するたびにトリガーされます。 例えば、マップのAEM サイトプリセットの一括アクティベーションを実行する場合、このイベントはアクティベーションプロセスの終了後に呼び出されます。

AEM イベントハンドラーを作成して、このイベントで使用可能なプロパティを読み取り、さらに処理を行う必要があります。

イベントの詳細は以下で説明します。

**イベント名**:

```
com/adobe/fmdita/replication/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | 文字列 | このイベントをトリガーしたファイルのパス。<br> 例：`/content/output/sites/ditamap1-ditamap`。<br> これは、JSON配列としてシリアル化されたパスのリストです。 |
| `messageType` | 文字列 | メッセージの種類。 <br>可能なオプション : `REPLICATION` |
| `action` | 文字列 | これが実行されたアクションです。 <br>可能なオプション : `BulkReplicate` |
| `user` | 文字列 | 操作を開始したユーザー。 |
| `result` | 文字列 | 一括アクティベーションの結果。 シリアル化されたJSON オブジェクトです：<br>`{"success":boolean,"code":integer,"message":"" }` |
| `agentId` | 文字列 | レプリケーションで使用されるagentId。 例えば、`"publish"` のように指定します。 |
| `importMode` | 文字列 | アクティベーションで使用される読み込みモード。 使用可能なオプションは次のとおりです：<br>`REPLACE, MERGE, UPDATE`。 |


**イベントリスナーの例**:

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
