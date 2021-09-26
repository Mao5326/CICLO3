<template>
  <v-img
    src="../assets/fondo.jpg"
    height="809"
  >
  <v-container class="my-12 py-12 ">
    <v-row >
      <v-col align="center">
        <v-card width="500px" class="pa-8">

            <v-img
              src="../assets/LOGO1.png"
            ></v-img>
            <p></p>
            <h2><p>Recuperar contraseña</p></h2>
            <p></p>
          
            <v-text-field
              label="Ingrese su E-mail"
              outlined
              dense
              :rules="[rules.requerido, rules.email]"
            ></v-text-field>
            <v-btn
              depressed
              color="primary"
            >
              Recuperar
            </v-btn>
            <v-card-text>
                <p></p>
                <p class="text-center">
                <a href="/ingresar" class="mr-3">Iniciar sesión</a>
                <a href="/registro">Registarse</a>
                </p>
                <v-row justify="center"><a href="/">Regresar</a></v-row>
            </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-img>
</template>

<script>
export default {
    name: "recuperar",

    data: ()=>({
      rules: {
        requerido: value => !!value || 'No puede estar vacio.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      },
    })
}
</script>