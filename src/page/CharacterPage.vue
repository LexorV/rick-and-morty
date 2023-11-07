<template>
    <div>
        <PersonTemplate :isPage=true :person="personsStore.onePerson">
            <p> Местоположение: {{ personsStore.location }} </p>
            </PersonTemplate>
    </div>
</template>

<script>
import PersonTemplate from '@/components/template/PersonTemplate'
import { usePersonsStore } from '@/stores'

export default {
    components: {
        PersonTemplate
    },
    mounted() {
        this.personsStore.getOnePerson(this.$route.params.id)
    },
    data () {
        return {
            personsStore: usePersonsStore()
        }
    },
}
</script>

<style lang="scss" scoped>

</style>