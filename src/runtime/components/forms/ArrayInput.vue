


<template>
 
    <div ref="divEl" class="flex flex-wrap justify-center gap-2">
        <input v-for="al in inputAttr.maxLength" v-model="v.data[al - 1]" maxlength="1"
            class="w-16 text-center border dark:border-gray-500 outline-none rounded-xl  p-4 focus:border-primary focus:dark:border-primary"
            @input="(e: Event) => inputChanged(e,)" @paste="pasteHandler" />
    </div>
</template>


<script setup lang="ts">
import { onMounted, reactive, ref, watch } from '#imports';

interface InputAttrType{
    maxLength?: number
}
interface PropTypes{
    inputAttr?: InputAttrType
}
const props = withDefaults(defineProps<PropTypes>(), {
    inputAttr: ()=>({
        maxLength: 4
    })
});
const model = defineModel()
const v = reactive({
    data: []
})

watch(()=>v.data, (newData)=>{
    console.log(newData)
    model.value = newData
})




onMounted(()=>{
    v.data = [].fill("l", 0, props.inputAttr.maxLength)
})








function pasteHandler(event: ClipboardEvent){
    event.preventDefault();
    let pasteText = event.clipboardData.getData('text/plain');
    if (pasteText.split("").length === props.inputAttr.maxLength){
        v.data = pasteText.split("")
    }
}



function focusPreInput(e: InputEvent) {

    const prevNodeName = (e.target as HTMLInputElement).previousSibling?.nodeName ?? ""
    if (prevNodeName === "INPUT") {
        ((e.target as HTMLInputElement).previousSibling as HTMLInputElement).focus()
    }
}
function focusNextInput(e: InputEvent, ) {

    const NextNodeName = (e.target as HTMLInputElement).nextSibling?.nodeName ?? ""
    if (NextNodeName === "INPUT") {
        ((e.target as HTMLInputElement).nextSibling as HTMLInputElement).focus()
    }
}

function inputChanged(e: Event) {
 
   

    if ((e as InputEvent).inputType === "deleteContentBackward") {
        focusPreInput((e as InputEvent))
        return 0
    }
    focusNextInput((e as InputEvent))
}




</script>