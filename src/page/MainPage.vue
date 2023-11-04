<template>
    <main>
        <h1> Главная страница</h1>
    </main>
</template>

<script>
import { usePersonsStore } from '@/stores'
export default {
    name: 'MainPage',
    mounted() {
        this.personsStore.getPersons()
    },
    data () {
        return {
            personsStore: usePersonsStore()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>