<template>
    <main class="main">
        <SearchForm />
        <h1> Персонажи</h1>
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
    data() {
        return {
            pageSearch: usePersonsStore().pageNow,
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
        //Логика infinite-scroll.
        eventHandler  () {
                const scrollTop = window.scrollY
                const viewportHeight = window.screen.height
                const viewportWidth = window.screen.width
                const totalHeight = document.documentElement.offsetHeight
                const atTheBottom = scrollTop + viewportHeight + (viewportWidth< 500 ? 1000:0) >= totalHeight
                if (atTheBottom) {
                        const newPage = usePersonsStore().pageNow + 1;
                        if(this.personsStore.maxPersonsSearchPages >= newPage) {
                    this.personsStore.newSearchOff()
                    this.personsStore.setPageNow(newPage) 
                    this.personsStore.searchPerson(newPage)}
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