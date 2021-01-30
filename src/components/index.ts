/*
 * @Author: shen
 * @Date: 2021-01-23 00:35:14
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 19:10:03
 * @Description:
 */
import { App } from 'vue'
import ProCard from './ProCard'
import SvgIcon from './SvgIcon'
import Dialog from './Dialog'
import CountUp from './CountUp'
import ScrollContainer from './ScrollContainer'

const components = [ProCard, Dialog, SvgIcon, ScrollContainer, CountUp]

export function setupGlobCom(app: App<Element>): void {
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}
