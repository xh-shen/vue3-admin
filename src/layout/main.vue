<!--
 * @Author: shen
 * @Date: 2021-02-02 21:03:57
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 23:01:18
 * @Description: 
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import { useStore } from '@/hooks/useStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'LayoutMain',
  setup() {
    const route = useRoute()
    const { state } = useStore()
    const path = computed(() => route.path)
    const cachedViews = computed(() => state.tagsView.cachedViews)
    return {
      path,
      cachedViews,
    }
  },
}
</script>
