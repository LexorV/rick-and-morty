<template>
    <div class="loader">
        <img class='loader__picture' src="@/assets/loader.svg" alt='загрузка' />
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.loader {
    background-color: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;

    &__picture {
        position: absolute;
        top: calc(50% - 30px);
        left: calc(50% - 30px);
        width: 60px;
        height: 60px;
        animation: rotation 1s linear infinite;
    }
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>