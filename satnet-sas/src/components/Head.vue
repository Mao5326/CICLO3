<template>
  <div class="div">
    <v-container>
      <v-row >
        <v-col align="center">
          <v-card 
            color="white"
            width="1000px"
          >

            <v-img
              src="../assets/LOGO1.png"
              width="500px"
              class="mx-auto mb-3"
            >
            </v-img>

            <p></p>
            <h3><p class="text-center"> 
            Te damos la bienvenida a la página de Satnet Soluciones. 
            </p>
            <p class="text-center">
              Tienes una cuenta? <a href="/ingresar">Inicia sesión.</a> <v-icon>mdi-account</v-icon>  
              No tienes una cuenta? <a href="/registro">Registrate.</a> <v-icon>mdi-pencil</v-icon>
            </p></h3>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'header',

    data: ()=>({
    }),
}
</script>

<style>
  .div{
    background-color: #283593;
  }
</style>
