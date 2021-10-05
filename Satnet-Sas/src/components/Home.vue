<template>
  <v-img
    src="../assets/imagen14.jpg"
    min-height="873"
  >
    <v-row class="mt-12">
      <v-col align="center">
        <v-card color="indigo darken-3" width="850px" class="pa-5">
        <v-card 
          width="800px" 
          class="pa-5" 
        >
          <v-img src="../assets/LOGO1.png" class="ma-4" />
          <v-card-title>
          <p></p>
          <h1>BIENVENIDO A SATNET SOLUCIONES</h1>
          <p></p>
          </v-card-title>

          <v-row justify="center" class="ma-4">
            <v-btn class="mx-2" color="primary" href="/ingresar"> 
              INICIAR SESIÓN
            </v-btn>
            <v-btn class="mx-2" color="primary" href="/registro">
              REGISTRARSE
            </v-btn>
            <v-btn class="mx-2" color="primary" href="/principal">
              PAGINA PRINCIPAL
            </v-btn>
          </v-row>

        </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
export default {
    name:"inicio"
}
</script> 