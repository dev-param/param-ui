<template>
    <!-- <PArrayInput v-model="j"/> -->
    <PTopNavBar>
        <template v-slot:title>
            ParamUi
        </template>
        <div class="w-10 h-screen">

            <PColorPlate />
        </div>

    </PTopNavBar>

</template>
<style>
body {
    @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-gray-900;

}
</style>
<script setup>
var j = ref([]);

</script>
