<template>
  <v-img
    src="../assets/fondo.jpg"
    height="809"
  >
  <v-container>
    <v-row class="mt-12">
      <v-col align="center">
        <v-card width="500px" class="pa-8">

            <v-img
              src="../assets/LOGO1.png"
            ></v-img>
            <p></p>
            <h2><p>Registarse</p></h2>
            <p></p>
          
            <v-text-field
              placeholder="E-mail"
              outlined
              dense
              :rules="[rules.requerido, rules.email]"
            ></v-text-field>
            <v-text-field
              placeholder="Contraseña"
              v-model="pass"
              id="pass"
              outlined
              dense
              :rules="[rules.requerido, rules.min]"
              :type="show ? 'text' : 'password'"
            ></v-text-field>
            <v-text-field
              placeholder="Confirmar contraseña"
              v-model="cpass"
              id="cpass"
              outlined
              dense
              :rules="[rules.requerido, rules.min, passconfirm]"
              :type="show ? 'text' : 'password'"
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
                <a href="/ingresar">Iniciar sesión</a>
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
    name: "registro",

    data: ()=>({
      rules: {
        requerido: value => !!value || 'No puede estar vacio.',
        min: v=> v.length >= 3 || 'Minimo 3 caracteres',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
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