<!--
 * @Author: shen
 * @Date: 2021-01-28 12:16:40
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 12:48:50
 * @Description:
-->

# ProCard 标准卡片

页内容器卡片，提供标准卡片样式，卡片切分布局能力。

## 何时使用

- 需要一个标准卡片容纳内容时。
- 需要进行卡片内切分布局时。
- 需要卡片可折叠时。

## Attributes

| 参数             | 说明                                        | 类型            | 可选值             | 默认值 |
| ---------------- | ------------------------------------------- | --------------- | ------------------ | ------ |
| title            | 标题，有具名 slot header 时无效             | `string`        | -                  | -      |
| extra            | 右上角自定义区域，有具名 slot header 时无效 | `Element`       | -                  | -      |
| border           | 是否有边框                                  | `boolean`       | -                  | false  |
| shadow           | 悬浮效果                                    | `string`        | never/hover/always | never  |
| headerBorder     | 页头是否有分割线                            | `boolean`       | -                  | false  |
| headerStyle      | 页头自定义样式                              | `CSSProperties` | -                  | -      |
| footerBorder     | 页尾是否有分割线                            | `boolean`       | -                  | false  |
| footerStyle      | 页尾自定义样式                              | `CSSProperties` | -                  | -      |
| bodyStyle        | 容器自定义样式                              | `CSSProperties` | -                  | -      |
| collapsed        | 受控属性，是否折叠                          | `boolean`       | -                  | false  |
| collapsible      | 配置是否可折叠，受控时无效                  | `boolean`       | -                  | false  |
| defaultCollapsed | 默认折叠, 受控时无效                        | `boolean`       | -                  | false  |

## Slot

| name   | 说明          |
| ------ | ------------- |
| -      | Card 内容     |
| header | Card 头部区域 |
| footer | Card 底部区域 |

## Events

| name     | 说明                           | 回调参数                       |
| -------- | ------------------------------ | ------------------------------ |
| collapse | 展开收起卡片的事件，受控时无效 | `(collapsed: boolean) => void` |
