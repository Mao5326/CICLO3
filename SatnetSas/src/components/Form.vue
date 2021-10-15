<template>
  <v-img
    src="../assets/imagen14.jpg"
  >
    <v-row>
      <v-col align="center" >
        <v-card class="ma-4 pt-1" width="800" outlined>
          <v-img src="../assets/LOGO1.png" width="350" class="ma-2"/>
          <p></p><br>
          <h4><p>Por favor diligencie el siguiente formulario en orden de solicitar nuestros servicios</p></h4>
          <br>
         
          <v-card-title>Información del servicio </v-card-title>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="ID personal"
              outlined
              dense
              :rules="[rules.requerido]"
              id="cpeIDF"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="Nombre"
              outlined
              dense
              :rules="[rules.requerido]"
              id="cpeNameF"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Ubicacion"
              outlined
              dense
              :rules="[rules.requerido]"
              id="ubicacionF"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="Coordenadas"
              outlined
              dense
              :rules="[rules.requerido]"
              id="coordenadasF"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Correo electronico"
              outlined
              dense
              :rules="[rules.email]"
              id="IdentidadF"
              class="mx-2"
             ></v-text-field>
              <v-text-field
              placeholder="Tipo de servicio"
              outlined
              dense
              :rules="[rules.requerido]"
              id="IdentidadF"
              class="mx-2"
              ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Nombre de Contacto"
              outlined
              dense
              :rules="[rules.requerido]"
              id="identidadF"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="Numero de contacto"
              outlined
              dense
              :rules="[rules.requerido]"
              id="Num2F"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Direccion IP"
              outlined
              dense
              :rules="[rules.requerido]"
              id="NumF"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="Mascara"
              outlined
              dense
              :rules="[rules.requerido]"
              id="Num2F"
              class="mx-2"
            ></v-text-field>
          </v-row>
                
              
          <v-card-title>Información de técnica</v-card-title>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="cliente ID"
              outlined
              dense
              :rules="[rules.requerido]"
              id="cpeIDF"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="TamañoAntena"
              outlined
              dense
              :rules="[rules.requerido]"
              id="MuniF"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
             <v-text-field
              placeholder="bucW"
              outlined
              dense
              :rules="[rules.requerido]"
              id="Num2F"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="bucOL"
              outlined
              dense
              :rules="[rules.requerido]"
              id="numF"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
             <v-text-field
              placeholder="lnbOL"
              outlined
              dense
              :rules="[rules.requerido]"
              id="NumF"
              class="mx-2"
            ></v-text-field>
          
            
          </v-row><br>
          <h6><p class="text-left mx-4 text--secondary"> BUC: Bloque de Transmicion <br> LNB: Conversor de reduccion de ruido</p></h6>

          <v-row class="ma-4 pb-4" justify="start">
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              href="/"
            >
              Regresar
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              @click="insertServicio"
            >
              Enviar
            </v-btn>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>

export default {
  name: "Form",

  data: ()=>({
    rules: {
      requerido: value => !!value || 'No puede estar vacio.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Correo invalido.'
      },
    },
  })
  
}
</script>