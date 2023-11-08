<template>
    <main class="main">
        <SearchForm />
        <h1> Главная страница</h1>
        <BoardPerson />
    </main>
</template>

<script>
import SearchForm from '@/components/main/SearchForm.vue'
import { usePersonsStore } from '@/stores'
import BoardPerson from '@/components/main/BoardPerson.vue'
export default {
    name: 'MainPage',
    components: {
        SearchForm,
        BoardPerson

    },
    mounted() {
        this.personsStore.getPersons(this.page)
    },
    data() {
        return {
            pageAll: 1,
            pageSearch: 1,
            personsStore: usePersonsStore(),
            search: '',
        }
    },
    created() {
        document.addEventListener('scroll', this.eventHandler)
    },
    beforeUnmount()  {
        document.removeEventListener('scroll', this.eventHandler);
    },
    methods: {
        //Логика с infinite-scroll. Изначально выводит всех персонажей.
        eventHandler  () {
                const scrollTop = document.documentElement.scrollTop
                const viewportHeight = window.innerHeight
                const totalHeight = document.documentElement.offsetHeight

                const atTheBottom = scrollTop + viewportHeight == totalHeight
                if (atTheBottom) {
                    if(this.personsStore.isAll) {
                        const newPage = this.pageAll + 1
                        if(this.personsStore.maxPersonsAllpages !== newPage) {
                    this.pageAll = newPage
                    this.personsStore.getPersons(newPage)
                }
                    }
                    else {
                        const newPage = this.pageSearch + 1
                        if(this.personsStore.maxPersonsSearchPages !== newPage) {
                    this.pageSearch = newPage
                    this.personsStore.searchPerson(newPage)}
                    }
                }
            }
    }
}

</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>