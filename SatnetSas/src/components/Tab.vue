<template>
  <div>
    <v-tabs
        v-model="tab"
        background-color="indigo darken-3"
        color="white"
        dark
        centered
        class="ma-auto"
      >
        <v-tabs-slider color="#05B2B4"></v-tabs-slider>
    
        <v-tab>Servicios</v-tab>
        <v-tab>Nosotros</v-tab>
        <v-tab>Nuestro equipo</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="ma-4">
          <v-row>
            <v-col>
              <v-row>
              
                <v-card flat class="ma-4" width="750px">
                  <v-img
                    src="../assets/image2.jpg"
                    max-width="500px"
                    max-height="200"
                    class="mx-auto"
                  >
                  </v-img>
                  <v-card-title>
                    <h1><p class=" text-decoration-underline "> 
                      Conectividad Satelital 
                    </p></h1>
                  </v-card-title>
                  <v-card-text>
                    <h2><p class="text-justify black--text">
                      Contamos con una amplia gama de servicios, 
                      listos para suplir las necesidades de nuestros usuarios, 
                      desde personas naturales hasta pequeñas, 
                      medianas y grandes empresas tanto privadas como gubernamentales. 
                      Te invitamos a conocer mas sobre los servicios de tu interes: 
                    </p><p class="text-justify grey--text text--darken-4">
                      Servicios Corportativos, 
                      Servicios Transaccionales, 
                      Backhaul celular, 
                      Backup Satelital.
                    </p></h2> 
                  </v-card-text>
                </v-card>
                <v-card flat class="ma-4" width="750px">
                  <v-img
                    src="../assets/imagen7.jpg"
                    max-width="500px"
                    max-height="200"
                    class="mx-auto"
                  >
                  </v-img>
                  <v-card-title>
                    <h1><p class="text-decoration-underline"> 
                      Infraestructura y Soporte 
                    </p></h1>
                  </v-card-title>
                  <v-card-text>
                    <h2><p 
                    class="text-justify black--text">
                      Nuestra infraestructura se extiende a través de todo el territorio nacional, 
                      incluyendo zonas remotas del país, ofrecemos servicios de infraestructura, 
                      instalación, soporte y mantenimiento para todo tipo de estructuras como antenas, 
                      torres, telefonía satelital, inventario, planos, materiales, entre otros. 
                      Conoce mas sobre nuestro portafolio: 
                    </p><p class="text-justify grey--text text--darken-4">
                      Instalación de infraestructura de instalaciones,
                      Mantenimientos en campo,
                      Site survey,
                      Adecuaciones de Obra Civil para Telecomunicaciones.
                    </p></h2> 
                  </v-card-text>
                </v-card>

              </v-row>
              <v-row>

                <v-card flat class="ma-4" width="750px">
                  <v-img
                    src="../assets/imagen6.jpg"
                    max-width="500px"
                    max-height="300"
                    class="ma-auto "
                  >
                  </v-img>
                  <v-card-title>
                    <h1><p class="text-decoration-underline"> 
                      Infraestructura 
                    </p></h1>
                  </v-card-title>
                  <v-card-text>
                    <h2><p class="text-justify black--text">
                      Nuestra estación remota incluye: 
                    </p><ul class="black--text">
                      <li>Antena Satelital fija o móvil</li>
                      <li>LBN Banda Ku</li>
                      <li>BUC</li>
                      <li>Módem satelital capricorn 4</li>
                      <li>Ap wifi</li>
                      <li>mástil</li>
                    </ul></h2> 
                  </v-card-text>
                </v-card>
                <v-card flat class="ma-4" width="750px">
                  <v-img
                    src="../assets/imagen8.jpg"
                    max-width="500px"
                    max-height="300"
                    class="ma-auto"
                  >
                  </v-img>
                  <v-card-title>
                    <h1><p class="text-decoration-underline"> 
                      Servicios profecionales
                    </p></h1>
                  </v-card-title>
                  <v-card-text class="mx-0">
                    <h2><p class="text-justify black--text">
                      Podemos ofrecer los siguientes servicios: 
                    </p><ul class="black--text"> 
                      <li>Desarrollo de contenidos educativos</li>
                      <li>Formación y aprobacion TIC</li>
                      <li>Tercerizacion de procesos</li>
                    </ul></h2> 
                  </v-card-text>
                </v-card>

              </v-row>
            </v-col>
              
            <v-card flat width="300" class="mr-5">
              <v-img src="../assets/LOGO1B.png"/>
              <v-row class="mt-5" justify="center">

                <h4 class="text-center"><p > 
                  Te damos la bienvenida a la página de Satnet Soluciones. <br>
                  Tienes una cuenta? <a href="/ingresar">Inicia sesión.</a> <v-icon>mdi-account</v-icon> <br>
                  No tienes una cuenta? <a href="/registro">Registrate.</a> <v-icon>mdi-pencil</v-icon>
                </p><p>
                  ¿Desea contratar nuentros servicios? <br>
                  Diligencie un formulario <a href="/form">Aqui</a>.
                </p><p></p><p>
                  Consulté todos los servicios <a href="/servicios">aqui</a>.
                </p><p>
                  ¿Desea consultar o eliminar un servicio en especifico?
                </p></h4>
                <v-text-field
                  placeholder="Id de formulario"
                  outlined
                  dense
                  id="PassI"
                  class="mx-2"
                ></v-text-field>
                <v-btn
                  depressed
                  color="primary"
                  class="mx-2"
                  
                >
                  Consultar
                </v-btn>
                <v-btn
                  depressed
                  color="primary"
                  class="mx-2"
                >
                  Eliminar
                </v-btn>
              </v-row>
            </v-card>

          </v-row>
      </v-tab-item>
      
      <v-tab-item class="ma-4">
            <v-row justify="center">
              <v-card flat class="ma-4" width="750px">
                    <v-img
                      src="../assets/mision.jpg"
                      max-width="500px"
                      max-height="200"
                      class="mx-auto"
                    >
                    </v-img>
                    <v-card-title>
                      <h1><p class="text-decoration-underline"> 
                        Mision 
                      </p></h1>
                    </v-card-title>
                    <v-card-text>
                      <h2><p class="text-justify black--text">
                        Ofrecer a nuestros clientes un servicio oportuno, 
                        de alta calidad y confiabilidad, proveer sistemas y servicios 
                        avanzados para cualquier tipo y tamaño de organización. 
                        Generamos valor a la sociedad, clientes y accionistas, y 
                        todos los grupos de interés, con una gestión innovadora, 
                        eficiente, neutral y de calidad en la prestación de servicios
                      </p></h2> 
                    </v-card-text>
              </v-card>
              <v-card flat class="ma-4" width="750px">
                    <v-img
                      src="../assets/vision.png"
                      max-width="500px"
                      max-height="200"
                      class="mx-auto"
                    >
                    </v-img>
                    <v-card-title>
                      <h1><p class="text-decoration-underline"> 
                        Vision 
                      </p></h1>
                    </v-card-title>
                    <v-card-text>
                      <h2><p class="text-justify black--text">
                        Conservar y optimizar el posicionamiento que SATNET 
                        S.A.S ha logrado en su comunidad para obtener un futuro 
                        donde la tecnología esté al servicio, beneficio y desarrollo 
                        de nuestros clientes. Permaneciendo en la mente de la gente 
                        siempre que se piense en telecomunicaciones.
                      </p></h2> 
                    </v-card-text>
              </v-card>
            </v-row>
            <v-row class="mb-4" justify="center" >
                <v-card flat class="mx-6">
                  <v-img
                    src="../assets/valores.jpg"
                    max-width="500px"
                    max-height="550"
                  >
                  </v-img>
                </v-card> 
                <v-card flat class="my-4 mr-4" width="600px">
                  <v-card-title>
                    <h1><p class="text-decoration-underline mt-12"> 
                      Valores 
                    </p></h1>
                  </v-card-title>
                  <v-card-text>
                    <h2><ul class="text-left font-weight-bold black--text pt-5 ">
                      <li class="mb-2">Compromiso: Nos responsabilizamos de fortalecer nuestros proyectos de forma proactiva.</li>
                      <li class="mb-2">Flexibilidad: Nos adaptamos al entorno en continua evolución.</li>
                      <li class="mb-2">Honestidad: Demostramos integridad en nuestras actuaciones.</li>
                      <li class="mb-2">Credibilidad: Lo que decimos, lo hacemos.</li>
                      <li class="mb-2">Desarrollo: Favorecemos el desarrollo de las personas mediante la cohesión, la colaboración y el equipo.</li>
                      <li class="mb-2">Ética: disfrutar la verdad en el mundo de los negocios, mediante el cumplimiento de los compromisos pactados.</li>
                    </ul></h2> 
                  </v-card-text>
                </v-card>

            </v-row>

      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
    name:'tab',
    data () {
      return {
        tab: null,
      }
    },
  }
</script>

<style>
  .v-tables-items{
    background-color: #15ac7a;
  }
</style>

