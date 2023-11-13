<template>
    <ul class="board">
        <CardPerson
         v-for="item of personsStore.persons"
         :key="item.id" 
         :person="item"
         />
    </ul>
    <div v-if="personsStore.errorSerch"> {{ checkError }}</div>
</template>

<script>
import CardPerson from '@/components/main/CardPerson.vue' 
import { usePersonsStore } from '@/stores'
export default {
    components: {
        CardPerson
    },
    data () {
        return {
            personsStore: usePersonsStore()
        }
    },
    computed: {
        checkError() {
            return this.personsStore.errorSerch === 'There is nothing here'
            ? 'Персонаж не существует'
            : this.personsStore.errorSerch 
        }
    }
}
</script>

<style lang="scss" scoped>
.board {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @include SectionContainer;
}

</style>