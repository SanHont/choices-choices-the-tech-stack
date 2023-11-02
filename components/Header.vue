<script setup>
const props = defineProps({
    title: String,
    logoUrl: String
})
</script>


<template>
    <header>
        <img :src="logoUrl" alt="logo image">
        <h1> {{ title }}</h1>
        <ul>
            <li>Home</li>
            <li>Contact</li>
        </ul>
    </header>
</template>