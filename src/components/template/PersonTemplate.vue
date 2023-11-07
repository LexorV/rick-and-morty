<template>
    <div>
        <h3>
        <router-link :class="`link ${isPage  ? 'not_link' : ''}`"
         :to="'character/' + person.id">
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
        },
        isPage: {
            type: Boolean,
            default:false,

        }
    }
    
}
</script>

<style lang="scss" scoped>
.link {
    @include link
}
.not_link {
    pointer-events: none;
}

</style>