<template>
    <p class="typewriter">{{ text }}</p>
</template>

<script>
export default {
    name: 'Typewriter',
    props: ['text']
}
</script>

<style scoped>
    .typewriter{
        border-right: 2px solid var(--text-color);
        white-space: nowrap;
        overflow: hidden;
        animation: typewriter 2s steps(30) 0s 1 normal both,
                blinkTextCursor 500ms steps(50) 5 alternate-reverse forwards;
    }
    @keyframes typewriter{
        from{width: 0;}
        to{width: 100%;}
    }
    @keyframes blinkTextCursor{
        from{border-right-color: transparent;}
        to{border-right-color: var(--text-color);}
    }
</style>