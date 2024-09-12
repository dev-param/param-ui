<template>
    <UPopover :ui="{
        rounded: 'rounded-3xl',
        ring: 'dark:ring-1 ring-0  dark:ring-gray-800',
    }">
        <PButton color="white" trailing-icon="i-heroicons-chevron-down-20-solid">
            Theme
        </PButton>

        <template #panel>



            <div class="px-4 py-5 sm:px-6 max-w-xs w-full flex flex-col gap-2 ">


                <div class="flex justify-between">
                    <div class="">Dark Mode: </div>
                    <UToggle v-model="isDark" />
                </div>
                <UDivider />


                <div class="">Primary Colors: </div>
                <UDivider />

                <div class=" flex flex-wrap  gap-3 justify-center">
                    <div v-wave="{ color: `white` }" v-for="primary_Color in primary_color_list"
                        :class="`bg-${primary_Color}-500`" class="w-6 h-6 rounded-full" @click="() => {
                            app_config.ui.primary = primary_Color
                        }"></div>
                </div>
                <div v-if="isDark" class="flex flex-col gap-3">

                    <div class="mt-3">Background Colors: </div>
                    <UDivider />

                    <div class=" flex flex-wrap  gap-3 justify-center">
                        <div v-wave="{ color: 'white' }" v-for="bg_Color in bg_color_list" :class="`bg-${bg_Color}-900`"
                            class="w-6 h-6 rounded-full ring-1 ring-gray-500" @click="() => {
                                app_config.ui.gray = bg_Color
                            }"></div>
                    </div>
                </div>
            </div>

        </template>
    </UPopover>



</template>

<script setup lang="ts">
import { ref, useAppConfig, useColorMode, computed } from '#imports';

const app_config = useAppConfig()
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

const primary_color_list = ref(['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'])
const bg_color_list = ['slate', 'cool', 'zinc', 'neutral', 'stone']


</script>