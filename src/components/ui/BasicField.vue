<template>
    <input type='input' 
    :value="value" 
    :placeholder="placeholder" 
    class="field" 
    @input="$emit('update:value', $event.target.value)" />
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
    },


    },
    emits: ['update:value'],
}
</script>

<style lang="scss" scoped>
.field {
    width: 100%;
    height: 48px;
    border: 1px solid #D5DAE1;
    background-color: white;
    border-radius: 8px;
    color: gray;
    padding-left: 32px;
    padding-right: 72px;
    box-sizing: border-box;
    outline: none;
    
}
.field:focus {
    border: 2px solid blue;
}
</style>