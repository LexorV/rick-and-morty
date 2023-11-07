<template>
    <div class="container">
        <select @input="$emit('update:value', $event.target.value)" class="select">
            <option v-for="(item, index) of listSelect" :key="index">
                {{ item }}
            </option>

        </select>

    </div>
</template>

<script>
import { uniqid } from '@/services/helpers'
export default {
    props: {
        listSelect: {
            type: Array,
            default: () => []
        },
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        uniqid
    }
}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: inline-block;
    border: 1px solid #0000ff;
    border-radius: 8px;
    height: 40px;

    &:before {
        content: '';
        right: 0;
        top: 0;
        width: 48px;
        height: 40px;
        background: url('@/assets/icons/Arrows_down.svg') no-repeat;
        background-position-x: center;
        background-position-y: center;
        position: absolute;
        pointer-events: none;
        display: block;
        z-index: 1;

        @media screen and (max-width: 767px) {
            border: none;
        }
    }

    .select {
        position: relative;
        width: 200px;
        font-size: 16px;
        line-height: 145%;
        font-weight: 500;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: white;
        border: none;
        outline: none;
        padding-left: 32px;
        margin: 0;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        cursor: pointer;
        height: 40px;


        @media screen and (max-width: 767px) {
            width: 48px;
            font-size: 0;
            padding-left: 14px;

            &:before {
                border: none;
            }
        }
    }
}
</style>