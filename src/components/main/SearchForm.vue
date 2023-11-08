<template>
    <form class="form" @submit.prevent="searchSubmit">
        <BasicField v-model:value="search" />
        <div class="button-box"> 
        <BasicSelect v-model:value="status" :listSelect="listSelect" />
        <BasicButton type="submit" text="Поиск"  />
        </div>
    </form>
</template>

<script>
import BasicButton from '@/components/ui/BasicButton.vue'
import BasicField from '@/components/ui/BasicField.vue'
import BasicSelect from '@/components/ui/BasicSelect.vue'
import { usePersonsStore } from '@/stores'
import { listStatusPersons } from '@/services/constants';
export default {
    components: {
        BasicButton,
        BasicField,
        BasicSelect
        
    },
    data () {
        return {
            search: '',
            status: '',
            listSelect: listStatusPersons,
            personsStore: usePersonsStore()
        }
    },
    methods: {
        searchSubmit () {
            this.personsStore.searchPerson(1, this.search, this.status)
        }
    }
}
</script>

<style lang="scss" scoped>

.form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    gap: 20px;
    max-width: 800px;
    @include SectionContainer;
}
.button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;

}

</style>
`1``