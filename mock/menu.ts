/*
 * @Author: shen
 * @Date: 2021-01-31 12:31:14
 * @LastEditors: shen
 * @LastEditTime: 2021-02-01 22:27:49
 * @Description:
 */
import { genResponse } from './util'

const menuList = [
  {
    id: '1',
    pid: '0',
    path: '/icons',
    icon: 'icon',
    enTitle: 'Icons',
    zhCnTitle: '图标',
  },
  {
    id: '2',
    pid: '0',
    path: '/table',
    icon: 'table',
    enTitle: 'Table',
    zhCnTitle: '表格',
  },
  {
    id: '2-1',
    pid: '2',
    path: '/table/simple',
    icon: '',
    enTitle: 'Simple Table',
    zhCnTitle: '简单表格',
  },
  {
    id: '2-2',
    pid: '2',
    path: '/table/query',
    icon: '',
    enTitle: 'Query Table',
    zhCnTitle: '查询表格',
  },
  {
    id: '3',
    pid: '0',
    path: '/form',
    icon: 'table',
    enTitle: 'Form',
    zhCnTitle: '表单',
  },
]

export function getMenu() {
  return genResponse(200, menuList, '')
}
