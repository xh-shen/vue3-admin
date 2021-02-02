/*
 * @Author: shen
 * @Date: 2021-01-31 21:48:28
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 13:57:35
 * @Description:
 */
import { computed, defineComponent, nextTick, reactive, ref, watch, watchEffect } from 'vue'
import { useInject } from '@/hooks/useContext'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/hooks/useStore'
import { off, on } from '@/utils/dom'
import { useI18n } from '@/hooks/useI18n'
import { VisitedViews } from '@/store/types'

let timer: any = null
export default defineComponent({
  name: 'TagsView',
  setup() {
    let selectedTag: VisitedViews
    const isSelectedHome = ref(false)
    const { t } = useI18n()
    const visible = ref(false)
    const currentTag = ref()
    const scroll = ref()
    const isScroll = ref(false)
    const position = reactive({ top: 0, left: 0 })
    const route = useRoute()
    const { push, replace } = useRouter()
    const { state, getters, dispatch } = useStore()
    const { languageHump, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__tagsview')
    const path = computed(() => route.path)
    const homeMenu = computed(() => state.permission.home)
    const scrollWrapper = computed(() => scroll.value!.$refs.wrap)
    const visitedViews = computed(() => state.tagsView.visitedViews)

    const genTagView = (path: string) => {
      const menu = getters.menuPathData[path] || {}
      return { ...route, ...menu }
    }

    const stopScroll = () => {
      timer && clearTimeout(timer)
      timer = setTimeout(function() {
        isScroll.value = false
      }, 200)
    }

    const onWheel = (e: any) => {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      visible.value = false
      isScroll.value = true
      scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollLeft + eventDelta / 4
      stopScroll()
    }

    const onClickTag = (path: string) => push(path)

    const onContextmenu = (e: MouseEvent, item: VisitedViews, isHome?: boolean) => {
      e.preventDefault()
      selectedTag = item
      isSelectedHome.value = !!isHome
      visible.value = true
      position.left = e.pageX + 10
      position.top = e.pageY + 10
    }

    const onCloseMenu = () => (visible.value = false)

    const toLastView = (visitedViews: VisitedViews[], view: VisitedViews) => {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        push(latestView.fullPath)
      } else {
        if (view.name === 'Dashboard') {
          replace({ path: '/redirect' + view.fullPath })
        } else {
          push('/')
        }
      }
    }

    const onCloseTag = (e: MouseEvent, view: VisitedViews) => {
      e.stopPropagation()
      dispatch('tagsView/delView', view).then(({ visitedViews }: { visitedViews: VisitedViews[] }) => {
        if (view.path === route.path) {
          toLastView(visitedViews, view)
        }
      })
    }

    const onRefreshView = () => {
      dispatch('tagsView/delCachedView', selectedTag).then(() => {
        const { fullPath } = selectedTag
        nextTick(() => {
          replace({
            path: '/redirect' + fullPath,
          })
        })
      })
    }
    const onCloseView = (e: MouseEvent) => {
      onCloseTag(e, selectedTag)
      onCloseMenu()
    }
    const onCloseOthersView = () => {
      if (selectedTag.path !== route.path) {
        push(selectedTag.fullPath)
      }
      dispatch('tagsView/delOthersViews', selectedTag)
    }
    const onCloseAllView = () => {
      dispatch('tagsView/delAllViews').then(({ visitedViews }: { visitedViews: VisitedViews[] }) => {
        toLastView(visitedViews, selectedTag)
      })
    }

    watch(visible, (newVal) => {
      if (newVal) {
        on(document, 'click', onCloseMenu)
      } else {
        off(document, 'click', onCloseMenu)
      }
    })

    watch(
      path,
      () => {
        if (homeMenu.value.path === route.path) {
          nextTick(() => {
            scrollWrapper.value.scrollLeft = 0
          })
          return
        }
        const view = genTagView(path.value)
        if (view.name) {
          dispatch('tagsView/addView', view)
          nextTick(() => {
            const wrapperWidth = scrollWrapper.value.offsetWidth
            const wrapperScrollLeft = scrollWrapper.value.scrollLeft
            const currentTagWidth = currentTag.value.offsetWidth
            const currentTagOffetLeft = currentTag.value.offsetLeft
            const offet = currentTagWidth + currentTagOffetLeft - wrapperWidth
            if (offet >= wrapperScrollLeft) {
              scrollWrapper.value.scrollLeft = wrapperScrollLeft > currentTagOffetLeft ? currentTagOffetLeft : offet
            } else if (wrapperScrollLeft > currentTagOffetLeft) {
              scrollWrapper.value.scrollLeft = currentTagOffetLeft - wrapperWidth <= wrapperWidth ? currentTagOffetLeft : currentTagOffetLeft - wrapperWidth
            }
          })
        }
      },
      {
        immediate: true,
      },
    )
    return () => (
      <div class={prefixCls}>
        <div class={`${prefixCls}-wrapper`}>
          <div class={`${prefixCls}-btn`}>
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class={`${prefixCls}-container`}>
            <el-scrollbar ref={scroll} class={`${prefixCls}-scroll`} vertical={false} onWheel={onWheel}>
              <div
                class={[`${prefixCls}-tag`, !isScroll.value ? 'no-scroll' : '', homeMenu.value.path === route.path ? 'active' : '']}
                key={homeMenu.value.path}
                onClick={() => onClickTag(homeMenu.value.path)}
                onContextmenu={(e) => onContextmenu(e, homeMenu.value, true)}
              >
                <span class={`${prefixCls}-tag-title`}>{homeMenu.value[`${languageHump.value}Title`]}</span>
              </div>
              {visitedViews.value.map((item: VisitedViews) => (
                <div
                  ref={item.path === route.path ? currentTag : 'otherTag'}
                  class={[`${prefixCls}-tag`, !isScroll.value ? 'no-scroll' : '', item.path === route.path ? 'active' : '']}
                  key={item.path}
                  onClick={() => onClickTag(item.path)}
                  onContextmenu={(e) => onContextmenu(e, item)}
                >
                  <span class={`${prefixCls}-tag-title`}>{item[`${languageHump.value}Title`] || item.title}</span>
                  <span class={`${prefixCls}-tag-close`} onClick={(e: MouseEvent) => onCloseTag(e, item)}>
                    <svg-icon icon-class="close-line" />
                  </span>
                </div>
              ))}
            </el-scrollbar>
          </div>
          <div class={`${prefixCls}-btn`}>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <ul v-show={visible.value} style={{ left: position.left + 'px', top: position.top + 'px' }} class={`${prefixCls}-contextmenu`}>
          <li onClick={onRefreshView}>{t('button.refresh')}</li>
          {!isSelectedHome.value && <li onClick={onCloseView}>{t('button.close')}</li>}
          <li onClick={onCloseOthersView}>{t('button.closeOthers')}</li>
          <li onClick={onCloseAllView}>{t('button.closeAll')}</li>
        </ul>
      </div>
    )
  },
})
