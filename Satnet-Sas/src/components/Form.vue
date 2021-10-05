<template>
  <v-img
    src="../assets/imagen14.jpg"
  >
    <v-row>
      <v-col align="center" >
        <v-card class="ma-4 pt-1" width="800" outlined>
          <v-img src="../assets/LOGO1.png" width="300" class="ma-2"/>
          <p></p>
          <h4><p>Por favor diligencie el siguiente formulario en orden de solicitar nuestros servicios</p></h4>
          <br>

          <v-card-title>Información personal</v-card-title>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Nombre"
              outlined
              dense
              :rules="[rules.requerido]"
              id="NombreF"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="Apellidos"
              outlined
              dense
              :rules="[rules.requerido]"
              id="ApellidoF"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Numero de contacto"
              outlined
              dense
              :rules="[rules.requerido]"
              id="NumF"
              class="mx-2"
            ></v-text-field>
              <v-text-field
              placeholder="Contacto Secundario"
              outlined
              dense
              id="Num2F"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Numero de Identificación"
              outlined
              dense
              :rules="[rules.requerido]"
              id="IdentidadF"
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
          </v-row>

          <v-card-title>Información de residencia</v-card-title>
          <v-row class="mx-4" justify="center">
            <v-text-field
              placeholder="Departamento de residencia"
              outlined
              dense
              :rules="[rules.requerido]"
              id="DepartF"
              class="mx-2"
            ></v-text-field>
            <v-text-field
              placeholder="Municipio"
              outlined
              dense
              :rules="[rules.requerido]"
              id="MuniF"
              class="mx-2"
            ></v-text-field>
          </v-row>
          <v-row class="mx-4" justify="center">
          <v-text-field
            placeholder="Direccion de residencia"
            outlined
            dense
            :rules="[rules.requerido]"
            id="DireccF"
            class="mx-2"
          ></v-text-field>
          </v-row>
          
          <v-card-title>Información de servicio</v-card-title>
          <v-row class="mx-6" justify="center">
            <v-col>
              <v-text-field
                placeholder="Tamaño de antena"
                outlined
                dense
                :rules="[rules.requerido]"
                id="DepartF"
                class=" shrink"
              ></v-text-field>
              <v-text-field
                placeholder="LNB OL"
                outlined
                dense
                :rules="[rules.requerido]"
                id="DepartF"
                class=" shrink"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                placeholder="BUC OL"
                outlined
                dense
                :rules="[rules.requerido]"
                id="DepartF"
                class=" shrink"
              ></v-text-field>
              <v-text-field
                placeholder="BUC W"
                outlined
                dense
                :rules="[rules.requerido]"
                id="MuniF"
                class=" shrink"
              ></v-text-field>
            </v-col>
          </v-row>
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