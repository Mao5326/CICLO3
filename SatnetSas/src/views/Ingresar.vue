<template>
    <div>
        <logIn/>
        <botFoot/>
    </div>
</template>

<script>
import logIn from '../components/Login.vue'
import botFoot from '../components/Footer.vue'


export default {
    name: 'Ingresar',

    components: {
        logIn,
        botFoot
    }
}
</script>