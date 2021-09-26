<template>
    <div>
        <register/>
        <botFoot/>
    </div>
</template>

<script>
import register from '../components/Register.vue'
import botFoot from '../components/Footer.vue'


export default {
    name:"Registrar",

    components:{
        register,
        botFoot
    }
}
</script>