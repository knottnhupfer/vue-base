<template>
  <va-navbar class="app-layout-navbar">
    <template #left>
      <div class="left">
        <va-icon-menu-collapsed
          :class="{ 'x-flip': isSidebarMinimized }"
          class="va-navbar__item"
          :color="colors.primary"
          @click="isSidebarMinimized = !isSidebarMinimized"
        />
        <router-link to="/">
          <vuestic-logo class="logo" />
        </router-link>
      </div>
      <!-- <form>
        <div class="row">
          <div class="flex md12 xs12" style="margin-left: 65px; width: 250px">
            <va-select
              v-model="simpleSelectModel"
              :label="t('menu.project')"
              text-by="name"
              track-by="id"
              :options="projects"
            />
          </div>
        </div>
      </form> -->
    </template>
    <template #center>
      <!--  -->
    </template>
    <template #right>
      <!-- <app-navbar-actions class="app-navbar__actions md5 lg4" :user-name="userName" /> -->
      {{ userName }}
    </template>
  </va-navbar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { useI18n } from 'vue-i18n'
// import { ref, onMounted } from 'vue'
import { useColors } from 'vuestic-ui'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '../../stores/layout'
// import VuesticLogo from '../VuesticLogo.vue'
import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'
// import AppNavbarActions from './components/AppNavbarActions.vue'
// // import getAllProjects from './../../services/projects'

// import { useProjectsStore } from '../../stores/projects'

// // import axios from 'axios'
// // import { useProjectsStore } from '../../stores/projects'

// // interface IProject {
// //   id: number
// //   login: string
// // }
// const loading = ref(false)
// const progressMax = ref(392)

// const { t } = useI18n()
// const simpleSelectModel = ref('')

const { getColors } = useColors()
const colors = computed(() => getColors())

const layoutStore = useLayoutStore()
const { isSidebarMinimized, userName } = storeToRefs(layoutStore)

// const projectsStore = useProjectsStore()
// const projects = computed(() => {
//   return projectsStore.getProjects
// })

// onMounted(() => {
//   projectsStore.fetchProjects()
//   console.log('Fetched projects on mount')
// })
</script>

<style lang="scss" scoped>
  .va-navbar {
    box-shadow: var(--va-box-shadow);
    z-index: 2;

    @media screen and (max-width: 950px) {
      .left {
        width: 100%;
      }

      .app-navbar__actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 1.5rem;
    }

    & > *:last-child {
      margin-right: 0;
    }
  }

  .x-flip {
    transform: scaleX(-100%);
  }

  .app-navbar-center {
    display: flex;
    align-items: center;

    @media screen and (max-width: 1200px) {
      &__github-button {
        display: none;
      }
    }

    @media screen and (max-width: 950px) {
      &__text {
        display: none;
      }
    }
  }
</style>
