<template>
    <div>
        <formu/>
        <botFoot/>
    </div>
</template>

<script>
import formu from '../components/Form.vue'
import botFoot from '../components/Footer.vue'

export default {
    name: "Formulario",

    components: {
        formu,
        botFoot
    }
}
</script>