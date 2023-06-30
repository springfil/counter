<template>
    <div class="container">
        <h3>Output: {{counter}}</h3>
        <div class="button-container">
            <button class="btn btn-danger" v-on:click="counter--">Decrease</button>
            <button class="btn btn-success" @click="encrease">Ecrease</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        encrease() {
            this.counter = this.counter + 1
        }
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
}

.button-container {
    margin-top: auto;
    display: flex;
    gap: 50px;
}
</style>