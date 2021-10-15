<template>
    <div>
        <regain/>
        <botFoot/>
    </div>
    
</template>

<script>
import regain from '../components/Recover.vue'
import botFoot from '../components/Footer.vue'


export default {
    name: "Recuperar",

    components: {
        regain,
        botFoot
    }
    
}
</script>