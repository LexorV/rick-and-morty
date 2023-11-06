<template>
    <div>
        <h3>
        <router-link class="link" :to="'character/' + person.id">
            {{ person.name }}
        </router-link>
        </h3>
        <p>Раздновидность {{  person.species }}</p>
        <img :src="person.image" alt="Персонаж">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            default: () => {}
        }
    }
    
}
</script>

<style lang="scss" scoped>
.link {
    @include link
}

</style>