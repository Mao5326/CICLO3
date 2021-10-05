<template>
  <v-img
    src="../assets/fondo.jpg"
    height="873"
  >
  <v-container fluid>
    <v-row class="ma-12 ">
      <v-col align="center">
        <v-card width="500px" class="pa-8">

            <v-img src="../assets/LOGO1.png"/>
            <p></p>
            <h2><p>LOG-IN</p></h2>
            <p></p>
          
            <v-text-field
              placeholder="E-mail"
              outlined
              dense
              :rules="[rules.requerido, rules.email]"
              id="EmailI"
            ></v-text-field>
            <v-text-field
              placeholder="Contraseña"
              outlined
              dense
              :rules="[rules.requerido]"
              :type="show ? 'text' : 'password'"
              id="PassI"
            ></v-text-field>
            <v-btn
              depressed
              color="primary"
            >
              Ingresar
            </v-btn>
            <v-card-text>
                <p></p>
                <p class="text-center">
                <a href="/recuperar" class="mr-3">Recuperar contraseña</a>
                <a href="/registro">Registarse</a>
                </p>
                <v-row justify="center"><a href="/principal">Pagina Principal</a></v-row>
            </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-img>
</template>

<script>
export default {
    name: "log",

    data: ()=>({
      rules: {
        requerido: value => !!value || 'No puede estar vacio.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      },
      return: {
        show: false,
        password: 'password',
      }
    })
}
</script>