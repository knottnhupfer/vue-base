import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      isSidebarMinimized: true,
      userName: 'David M',
    }
  },

  actions: {
    toggleSidebar () {
      this.isSidebarMinimized = !this.isSidebarMinimized
    },

    changeUserName (userName: string) {
      this.userName = userName
    },
  },
})
