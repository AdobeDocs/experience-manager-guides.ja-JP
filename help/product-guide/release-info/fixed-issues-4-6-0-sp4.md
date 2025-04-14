---
title: Release Notes | Fixed issues in Adobe Experience Manager Guides 4.6.0 Service Pack 4 release
description: Learn about the bug fixes in the  4.6.0 Service Pack 4 release of Adobe Experience Manager Guides
role: Leader
source-git-commit: f9a03ae620a362989a36ebaefb264ea28220a4b3
workflow-type: tm+mt
source-wordcount: '239'
ht-degree: 1%

---

# Fixed issues in the 4.6.0 Service Pack 4 release (April 2025)


This article covers the bugs fixed in various areas of 4.6.0 Service Pack 4 release of Adobe Experience Manager Guides.

Learn about [upgrade instructions for the 4.6.0 Service Pack 4 release](upgrade-instructions-4-6-0-sp4.md).

## オーサリング

- Dragging and dropping an image within a topic in **Author** view causes the image reference to break, leading to data loss. (25769)
- Dragging and dropping a `topicref` within a Map in **Author** view fails to perform the intended operation and removes the `topicref` next to the dragged `topicref`. (19460)
- Failing to close JCR session connections while updating or creating topics result in memory leaks and service downtime. (26282)

## 公開

- Native PDF publishing continues indefinitely, if the DITA content has a weblink without having scope as `external`. (26434)
- When creating a new baseline with a large number of labels, it causes the labels loader to fail and prevents the labels from being fetched. (16232)
- Publishing of Native PDFs and AEM sites stalls and gets queued, when there are errors in the content. (26516)

## 既知の問題

Adobe has identified the following known issue for this release:

- Native PDF publishing on Windows encounters failures when DITA content contains an external link that does not include the `scope` attribute.
