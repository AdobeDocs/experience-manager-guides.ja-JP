---
title: 後処理イベントハンドラー
description: 後処理イベントハンドラーについて説明します
exl-id: 3b105ff5-02d4-40e3-a713-206a7fcf18b2
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: 8e57d4048f4aa13d7f77f25082d4e7aa329ee355
workflow-type: tm+mt
source-wordcount: '414'
ht-degree: 5%

---

# 後処理イベントハンドラー {#id175UB30E05Z}

## UUID とCloud Service

Adobe Experience Manager Guidesは `com/adobe/guides/postprocess/complete` 後処理操作の実行に使用されるイベントを公開します。 このイベントは、DITA ファイルで操作が実行されるたびにトリガーされます。 DITA ファイルに対して次の操作を行うと、このイベントはトリガーされます。

- アップロード
- 作成
- 変更

>[!NOTE]
>
> 後処理イベントは、`fire.processing.events` の設定パラメーターである `fmdita config manager` フラグを有効にすることによってトリガーされます。 true に設定した場合は、イベント（com/adobe/guides/postprocess/complete）をトリガーして、後処理の完了を追跡します。 デフォルトでは、false （無効）に設定されています。

このイベントで使用可能なプロパティを読み取り、さらに処理を行うには、Adobe Experience Manager イベントハンドラーを作成する必要があります。

イベントの詳細は、以下で説明します。

**イベント名**:

```
com/adobe/guides/postprocess/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | String | このイベントをトリガーしたファイルのパス。 通常、これは操作が実行されたファイルです。 |
| `eventType` | 文字列 | イベントのタイプ （CREATE または MODIFY）。 |
| `status` | 文字列 | 実行された操作の復帰ステータス。 -<br> – 成功：後処理操作が正常に完了しました。 <br> – 失敗：エラーが発生したため、後処理の操作に失敗しました。 |
| `errorMsg` | 文字列 | 後処理操作が失敗した場合のエラーメッセージ。 |
| `uuid` | 文字列 | このイベントをトリガーしたファイルの UUID。 通常、これは操作が実行されたファイルです。 |

**サンプルイベントリスター**


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

## 非 UUID


Adobe Experience Manager Guidesは、後処理操作の実行に使用される com/adobe/fmdita/postprocess/complete イベントを公開します。 このイベントは、DITA ファイルで操作が実行されるたびにトリガーされます。 DITA ファイルに対して次の操作を行うと、このイベントはトリガーされます。

>[!NOTE]
>
> このイベントは、AEM 6.1 での削除操作に対してはトリガーされません。

- アップロード
- 作成
- 変更
- 削除

このイベントで使用可能なプロパティを読み取り、さらに処理を行うには、Adobe Experience Manager イベントハンドラーを作成する必要があります。

イベントの詳細は、以下で説明します。

**イベント名**:

```
com/adobe/fmdita/postprocess/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | String | このイベントをトリガーしたファイルのパス。 通常、これは操作が実行されたファイルです。 |
| `status` | 文字列 | 実行された操作の復帰ステータス。 -<br> – 成功：後処理操作が正常に完了しました。 <br>- エラーが発生して完了：後処理操作は完了しましたが、いくつかのエラーが発生しました。 <br> – 失敗：エラーが発生したため、後処理の操作に失敗しました。 |
| `message` | 文字列 | ステータスが「エラーあり」または「失敗」の場合、このパラメータにはエラーの詳細または失敗の理由が含まれます。 |
| `operation` | 文字列 | ファイルに対して実行された後処理操作。 <br> – 追加 <br> – 更新 <br> – 削除 |
