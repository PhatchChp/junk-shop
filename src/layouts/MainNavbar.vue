<script setup lang="ts">
import OutlinedButton from '@/components/buttons/OutlinedButton.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import { useMenuStore } from '@/stores/menu'

const route = useRoute()
const menuStore = useMenuStore()

// Watch for mobile menu changes to handle body scroll
watch(
  () => menuStore.isMobileMenuOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
)

onMounted(() => {
  document.addEventListener('keydown', menuStore.handleEscape)
  window.addEventListener('resize', menuStore.handleResize)
})

onUnmounted(() => {
  document.removeEventListener('keydown', menuStore.handleEscape)
  window.removeEventListener('resize', menuStore.handleResize)
  // Reset body scroll when component unmounts
  document.body.style.overflow = ''
})
</script>

<template>
  <nav class="bg-white shadow-sm fixed top-0 w-full z-50">
    <div class="max-w-screen mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <RouterLink :to="{ name: 'home' }">
        <img src="/images/logo.svg" alt="Logo" class="h-14 object-contain" />
      </RouterLink>

      <!-- Desktop menu -->
      <ul class="hidden lg:flex items-center space-x-8">
        <li v-for="menu in menuStore.menus" :key="menu.name">
          <!-- Dropdown -->
          <Menu v-if="menu.children" as="div" class="relative inline-block text-left">
            <MenuButton
              class="inline-flex items-center gap-1 text-gray-700 hover:text-primary-orange font-medium transition-colors duration-200"
            >
              {{ menu.name }}
              <svg
                class="w-4 h-4 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.5 7l4.5 4.5L14.5 7H5.5z" clip-rule="evenodd" />
              </svg>
            </MenuButton>
            <TransitionRoot
              enter="transition ease-out duration-200"
              enter-from="transform opacity-0 scale-95"
              enter-to="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leave-from="transform opacity-100 scale-100"
              leave-to="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute z-10 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-for="child in menu.children" :key="child.name">
                    <RouterLink
                      :to="{ name: menu.link, params: { type: child.type } }"
                      class="block px-4 py-2 text-sm transition-colors duration-150"
                      :class="
                        route.name === menu.link && $route.params.type === child.type
                          ? 'text-primary-orange font-medium'
                          : ''
                      "
                    >
                      {{ child.name }}
                    </RouterLink>
                  </MenuItem>
                </div>
              </MenuItems>
            </TransitionRoot>
          </Menu>

          <!-- Normal Link -->
          <RouterLink
            v-else
            :to="{ name: menu.link }"
            class="text-gray-700 hover:text-primary-orange font-medium transition-colors duration-200"
            :class="route.name === menu.link ? 'border-b-2 border-primary-orange pb-1' : ''"
            >{{ menu.name }}
          </RouterLink>
        </li>

        <!-- Buttons -->
        <div class="flex gap-4 ml-8">
          <OutlinedButton name="ติดต่อเรา" :to="{ name: 'contact' }" />
          <PrimaryButton name="เพิ่มเติม" :to="{ name: 'more' }" />
        </div>
      </ul>

      <!-- Mobile Button -->
      <div class="lg:hidden">
        <button
          @click="menuStore.menuOpen"
          :disabled="menuStore.isAnimating"
          class="relative p-2 text-gray-700 hover:text-primary-orange focus:outline-none transition-colors duration-200 disabled:opacity-50"
          aria-label="เปิดเมนู"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span
              class="block w-6 h-0.5 bg-current transition-all duration-300 ease-out"
              :class="
                menuStore.isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-[-3px]'
              "
            ></span>
            <span
              class="block w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1"
              :class="menuStore.isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="block w-6 h-0.5 bg-current transition-all duration-300 ease-out"
              :class="
                menuStore.isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-[3px]'
              "
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <TransitionRoot :show="menuStore.isMobileMenuOpen" as="template">
      <div class="lg:hidden fixed inset-0 z-50">
        <!-- Backdrop -->
        <TransitionChild
          enter="transition-opacity ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-black/20 backdrop-blur-xs"
            @click="menuStore.menuClose"
            aria-hidden="true"
          ></div>
        </TransitionChild>

        <!-- Mobile Menu Panel -->
        <TransitionChild
          enter="transition ease-out duration-300"
          enter-from="transform translate-y-[-100%]"
          enter-to="transform translate-y-0"
          leave="transition ease-in duration-200"
          leave-from="transform translate-y-0"
          leave-to="transform translate-y-[-100%]"
        >
          <div
            class="relative top-0 w-full bg-white shadow-xl border-b border-gray-100"
            @click.stop
          >
            <!-- Header -->
            <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <RouterLink :to="{ name: 'home' }" @click="menuStore.menuClose">
                <img src="/images/logo.svg" alt="Logo" class="h-10 object-contain" />
              </RouterLink>
              <button
                @click="menuStore.menuClose"
                :disabled="menuStore.isAnimating"
                class="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 disabled:opacity-50"
                aria-label="ปิดเมนู"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Menu Items -->
            <div class="px-6 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              <ul class="space-y-1">
                <li v-for="menu in menuStore.menus" :key="menu.name">
                  <!-- Menu with dropdown -->
                  <Menu v-if="menu.children" as="div" class="relative">
                    <MenuButton
                      class="w-full flex items-center justify-between py-3 px-4 text-left text-gray-800 hover:text-primary-orange hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    >
                      <span>{{ menu.name }}</span>
                      <svg
                        class="w-5 h-5 transition-transform duration-200 ui-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </MenuButton>

                    <TransitionRoot
                      enter="transition ease-out duration-200"
                      enter-from="opacity-0 scale-95"
                      enter-to="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leave-from="opacity-100 scale-100"
                      leave-to="opacity-0 scale-95"
                    >
                      <MenuItems class="mt-1 ml-4 bg-white rounded-lg focus:outline-none">
                        <div class="py-2">
                          <MenuItem
                            v-for="child in menu.children"
                            :key="child.name"
                            v-slot="{ close }"
                          >
                            <button
                              class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:text-primary-orange transition-colors duration-150"
                              :class="
                                route.name === menu.link && $route.params.type === child.type
                                  ? 'text-primary-orange font-medium'
                                  : ''
                              "
                              @click="
                                () => {
                                  close()
                                  menuStore.menuClose()
                                  $router.push({ name: menu.link, params: { type: child.type } })
                                }
                              "
                            >
                              {{ child.name }}
                            </button>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </TransitionRoot>
                  </Menu>

                  <!-- Normal Menu -->
                  <RouterLink
                    v-else
                    :to="{ name: menu.link }"
                    class="block py-3 px-4 text-gray-800 hover:text-primary-orange hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    :class="route.name === menu.link ? 'text-primary-orange bg-orange-50' : ''"
                    @click="menuStore.menuClose"
                  >
                    {{ menu.name }}
                  </RouterLink>
                </li>
              </ul>

              <!-- Mobile Action Buttons -->
              <div class="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
                <OutlinedButton
                  name="ติดต่อเรา"
                  :to="{ name: 'contact' }"
                  class="w-full justify-center"
                  @click="menuStore.menuClose"
                />
                <PrimaryButton
                  name="เพิ่มเติม"
                  :to="{ name: 'more' }"
                  class="w-full justify-center"
                  @click="menuStore.menuClose"
                />
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </TransitionRoot>
  </nav>
</template>
