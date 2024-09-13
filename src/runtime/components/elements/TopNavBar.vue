<template>
    <div :ui="{ body: { padding: '', base: '', } }"
        class=" w-full  flex  justify-between items-center  px-4 py-5 sm:p-6 dark:border-b  border-gray-500/30 shadow-md sticky top-0 z-[999] backdrop-blur-2xl bg-white-50/30 dark:bg-gray-900/50">
        <div class="">
            <slot name="title"></slot>
        </div>
        <div class="">
            <div class="flex gap-3">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
    <div>
        <slot></slot>
    </div>
</template>

