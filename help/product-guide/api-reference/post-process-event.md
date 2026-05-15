---
title: 後処理イベントハンドラー
description: 後処理イベントハンドラーについて説明します
exl-id: 3b105ff5-02d4-40e3-a713-206a7fcf18b2
feature: Post-Processing Event Handler
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/ixD-jFpXxkdmPbOWtCDxPgjtxu-FfJkzGCdUHNeA1CY
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 427
ht-degree: 4%

---

# 後処理イベントハンドラー {#id175UB30E05Z}

## UUIDとCloud Service

Adobe Experience Manager Guidesは、後処理の操作を実行するために使用される`com/adobe/guides/postprocess/complete` イベントを公開します。 このイベントは、DITA ファイルに対して操作が実行されるたびにトリガーされます。 このイベントのDITA ファイルトリガーに対する次の操作：

- アップロード
- 作成
- 変更

>[!NOTE]
>
> 後処理イベントは、`fmdita config manager`の設定パラメーターである`fire.processing.events` フラグを有効にすることでトリガーされます。 trueに設定すると、後処理の完了をトラッキングするためにイベント（com/adobe/guides/postprocess/complete）がトリガーされます。 デフォルトでは、false （無効）に設定されています。

Adobe Experience Manager イベントハンドラーを作成して、このイベントで使用可能なプロパティを読み取り、さらに処理を行う必要があります。

イベントの詳細は以下で説明します。

**イベント名**:

```
com/adobe/guides/postprocess/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | 文字列 | このイベントをトリガーしたファイルのパス。 通常、これは操作が実行されたファイルです。 |
| `eventType` | 文字列 | イベントのタイプ（CREATEまたはMODIFY）。 |
| `status` | 文字列 | 実行された操作の戻りステータス。 可能なオプションは次のとおりです。<br> – 成功：後処理操作が正常に完了しました。 <br> – 失敗：一部のエラーが原因で、後処理操作が失敗しました。 |
| `errorMsg` | 文字列 | 処理後の操作に失敗した場合のエラーメッセージ。 |
| `uuid` | 文字列 | このイベントをトリガーしたファイルのUUID。 通常、これは操作が実行されたファイルです。 |

**イベントリスナーのサンプル**


```
@Component(service = EventHandler.class,
        immediate = true,
        property = {
                EventConstants.EVENT_TOPIC + "=" + "com/adobe/guides/postprocess/complete",
        })
public class PostProcessCompleteEventHandler implements EventHandler {

    protected final Logger log = LoggerFactory.getLogger(this.getClass());

    @Override
    public void handleEvent(final Event event) {
        Set<String> propertyNames = new HashSet<>(Arrays.asList(event.getPropertyNames()));
        Map<String, String> properties = new HashMap<>();
        properties.put("path", (String) event.getProperty("path"));
        properties.put("eventType", (String) event.getProperty("eventType"));
        properties.put("status", (String) event.getProperty("status"));
        if(propertyNames.contains("errorMsg")) {
            properties.put("errorMsg", (String) event.getProperty("errorMsg"));
        }
        if (propertyNames.contains("uuid")) {
            properties.put("uuid", (String) event.getProperty("uuid"));
        }
        String eventTopic = event.getTopic();
        log.debug("eventTopic {}", eventTopic);
        for(Map.Entry entry:properties.entrySet()) {
            log.debug(entry.getKey() + " : " + entry.getValue());
        }
    }
}
```

## 非UUID


Adobe Experience Manager Guidesは、任意の後処理操作を実行するために使用されるcom/adobe/fmdita/postprocess/complete イベントを公開します。 このイベントは、DITA ファイルに対して操作が実行されるたびにトリガーされます。 このイベントのDITA ファイルトリガーに対する次の操作：

>[!NOTE]
>
> このイベントは、AEM 6.1の削除操作ではトリガーされません。

- アップロード
- 作成
- 変更
- 削除

Adobe Experience Manager イベントハンドラーを作成して、このイベントで使用可能なプロパティを読み取り、さらに処理を行う必要があります。

イベントの詳細は以下で説明します。

**イベント名**:

```
com/adobe/fmdita/postprocess/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | 文字列 | このイベントをトリガーしたファイルのパス。 通常、これは操作が実行されたファイルです。 |
| `status` | 文字列 | 実行された操作の戻りステータス。 可能なオプションは次のとおりです。<br> – 成功：後処理操作が正常に完了しました。 <br>- エラーが発生して完了：後処理操作は完了しましたが、エラーが発生しました。 <br> – 失敗：一部のエラーが原因で、後処理操作が失敗しました。 |
| `message` | 文字列 | ステータスが「エラーで完了」または「失敗」の場合、このパラメーターにはエラーまたは失敗の理由に関する詳細が含まれます。 |
| `operation` | 文字列 | ファイルに対して実行された後処理操作。 可能なオプションは次のとおりです。<br> – 追加<br> – 更新<br> – 削除 |
