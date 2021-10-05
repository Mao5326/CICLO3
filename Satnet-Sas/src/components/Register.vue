<template>
  <v-img
    src="../assets/fondo.jpg"
    height="873"
  >
  <v-container>
    <v-row class="mt-12">
      <v-col align="center">
        <v-card width="500px" class="pa-8">

            <v-img src="../assets/LOGO1.png"/>
            <p></p>
            <h2><p>Registarse</p></h2>
            <p></p>
            <v-row>
              <v-text-field
                placeholder="Nombre"
                outlined
                dense
                :rules="[rules.requerido]"
                id="NombreRe"
                class="mx-2"
              ></v-text-field>
              <v-text-field
                placeholder="Apellidos"
                outlined
                dense
                :rules="[rules.requerido]"
                id="ApellidoRe"
                class="mx-2"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                placeholder="Numero de Telefono"
                outlined
                dense
                :rules="[rules.requerido]"
                id="CelRe"
                class="mx-2"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                placeholder="E-mail"
                outlined
                dense
                :rules="[rules.requerido, rules.email]"
                id="EmailRe"
                class="mx-2"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                placeholder="Contraseña"
                v-model="pass"
                id="PassRe"
                outlined
                dense
                :rules="[rules.requerido, rules.min]"
                :type="show ? 'text' : 'password'"
                class="mx-2"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                placeholder="Confirmar contraseña"
                v-model="cpass"
                id="CpassRe"
                outlined
                dense
                :rules="[rules.requerido, rules.min, passconfirm]"
                :type="show ? 'text' : 'password'"
                class="mx-2"              
              ></v-text-field>
            </v-row>
            <v-btn
              depressed
              color="primary"
              id="BotonRe"
            >
              Ingresar
            </v-btn>
            <v-card-text>
                <p></p>
                <p class="text-center">
                <a href="/principal" class="mx-2">Pagina Principal</a>
                <a href="/ingresar" class="mx-2">Iniciar sesión</a>
                </p>
            </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-img>
</template>

<script>
export default {
    name: "registro",

    data: ()=>({
      rules: {
        requerido: value => !!value || 'No puede estar vacio.',
        min: v=> v.length >= 3 || 'Minimo 3 caracteres',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo invalido.'
        },
      },
      return: {
        show: false,
        password: 'password',
      }
    }),
    computed:{
        passconfirm(){
            return() => (this.pass === this.cpass) || 'La contraseña no coincide'
        }
    }
}
</script>