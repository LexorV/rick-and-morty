<template>
    <div>
        <h3 class="title">
        <router-link :class="`link ${isPage  ? 'not_link' : ''}`"
         :to="'character/' + person.id">
            {{ person.name }}
        </router-link>
        </h3>
        <p>Разновидность {{  person.species }}</p>
        <img class="picture" :src="person.image" alt="Персонаж">
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
.title {
    @media screen and (max-width:700px) {
        font-size: 14px;
    }
}
.link {
    @include link
}
.not_link {
    pointer-events: none;
}
.picture {
    @include picture
}

</style>