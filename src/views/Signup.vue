<template>
<div>
    <form>
        <label>Full Name:</label><input type = 'text' placeholder = 'Full Name' />
        <label>Wallet Address:</label><input type = 'text' placeholder = 'Ethereum Wallet Address' />
        <!-- <button class = 'big cta'>Sign up As A Medical Professional</button> -->
        
        <input v-if = "$route.params.type === 'patient'" type = 'submit' value = 'Sign Up As A Patient' />
        <input v-else type = 'submit' value = 'Sign Up As A Medical Professional' />
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    mounted() {
        if(this.$route.params.type == 'patient') {
            this.$route.meta.title = 'Sign Up As A Patient'
        }
    }
}
</script>

<style>
</style>
