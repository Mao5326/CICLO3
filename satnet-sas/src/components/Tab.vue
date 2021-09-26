<template>
  <v-card>
    <v-toolbar
      color="indigo darken-3"
      dark
      flat
    >
      <v-text-field
        class="mt-7 ml-12"
        placeholder="Buscar"
        prepend-inner-icon="mdi-magnify"
      >
      </v-text-field>
      <v-spacer></v-spacer>

        <v-tabs
          v-model="tab"
          background-color="indigo darken-3"
          color="white"
          dark
          right
          class="mr-3"
        >
          <v-tabs-slider color="#05B2B4"></v-tabs-slider>
  
          <v-tab>Servicios</v-tab>
          <v-tab>Nosotros</v-tab>
          <v-tab>Nuestro equipo</v-tab>
        </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item class="ma-3">
        <v-container>
          <v-row justify="start" class="mt-5">
              <v-col cols="5" >
                
              <v-card flat>
              <v-img
                src="../assets/image2.jpg"
                width="500px"
                aspect-ratio="1.7"
                height="200"
                class="mx-auto"
              >
              </v-img>
              <v-card-title>
                <h1><p class="black--text text-decoration-underline "> 
                  Conectividad Satelital 
                </p></h1></v-card-title>
              <v-card-text class="mx-0">
                <h2><p 
                class="text-justify font-weight-bold black--text">
                  Contamos con una amplia gama de servicios, 
                  listos para suplir las necesidades de nuestros usuarios, 
                  desde personas naturales hasta pequeñas, 
                  medianas y grandes empresas tanto privadas como gubernamentales. 
                  Te invitamos a conocer mas sobre los servicios de tu interes: </p><p>
                  <a href="#">Servicios Corportativos</a>, 
                  <a href="#">Servicios Transaccionales</a>, 
                  <a href="#">Backhaul celular</a>, 
                  <a href="#">Backup Satelital.</a>
                </p></h2> 
              </v-card-text>
              </v-card>

              <v-card flat>
              <v-img
                src="../assets/imagen6.jpg"
                width="500px"
                height="300"
                class="mx-auto mt-7"
              >
              </v-img>
              <v-card-title>
                <h1><p class="black--text text-decoration-underline "> 
                  Infraestructura 
                </p></h1>
              </v-card-title>
              <v-card-text class="mx-0">
                <h2><p 
                class="text-justify font-weight-bold black--text">
                  Nuestra estación remota incluye: </p><ul class="black--text">
                  <li>Antena Satelital fija o móvil</li>
                  <li>LBN Banda Ku</li>
                  <li>BUC</li>
                  <li>Módem satelital capricorn 4</li>
                  <li>Ap wifi</li>
                  <li>mástil</li>
                </ul></h2> 
              </v-card-text>
              </v-card>

              </v-col>
              <v-col cols="5">

              <v-card flat>
              <v-img
                src="../assets/imagen7.jpg"
                width="500px"
                aspect-ratio="1.7"
                height="200"
                class="mx-auto"
              >
              </v-img>
              <v-card-title>
                <h1><p class="black--text text-decoration-underline "> 
                  Infraestructura y Soporte 
                </p></h1>
              </v-card-title>
              <v-card-text class="mx-0">
                <h2><p 
                class="text-justify font-weight-bold black--text">
                  Nuestra infraestructura se extiende a través de todo el territorio nacional, 
                  incluyendo zonas remotas del país, ofrecemos servicios de infraestructura, 
                  instalación, soporte y mantenimiento para todo tipo de estructuras como antenas, 
                  torres, telefonía satelital, inventario, planos, materiales, entre otros. 
                  Conoce mas sobre nuestro portafolio: </p><p>
                  <a href="#">Instalación de infraestructura de instalaciones</a>,
                  <a href="#">Mantenimientos en campo</a>,
                  <a href="#">Site survey</a>,
                  <a href="#">Adecuaciones de Obra Civil para Telecomunicaciones.</a>
                </p></h2> 
              </v-card-text>
              </v-card>
      
              <v-card flat>
              <v-img
                src="../assets/imagen8.jpg"
                width="500px"
                height="300"
                class="mx-auto"
              >
              </v-img>
              <v-card-title>
                <h1><p class="black--text text-decoration-underline "> 
                  Servicios profecionales
                </p></h1>
              </v-card-title>
              <v-card-text class="mx-0">
                <h2><p 
                class="text-justify font-weight-bold black--text">
                  Podemos ofrecer los siguientes servicios: </p><ul class="black--text"> 
                    <li>Desarrollo de contenidos educativos</li>
                    <li>Formación y aprobacion TIC</li>
                    <li>Tercerizacion de procesos</li>
                </ul></h2> 
              </v-card-text>
              </v-card>
  
              </v-col>
              <v-col>
                <p 
                class="text-justify font-weight-bold black--text">
                PLACEHOLDER
                </p>
              </v-col>
              
          </v-row>
        </v-container>
      </v-tab-item>
      
      <v-tab-item class="ma-3">
        <v-container>
          <v-row justify="start" class="mt-5">
              <v-col cols="5" >
                
              <v-card flat>
              <v-img
                src="../assets/mision.jpg"
                width="500px"
                aspect-ratio="1.7"
                height="200"
                class="mx-auto"
              >
              </v-img>
              <v-card-title>
                <h1><p class="black--text text-decoration-underline "> 
                  Mision 
                </p></h1></v-card-title>
              <v-card-text class="mx-0">
                <h2><p 
                class="text-justify font-weight-bold black--text">
                  Ofrecer a nuestros clientes un servicio oportuno, 
                  de alta calidad y confiabilidad, proveer sistemas y servicios 
                  avanzados para cualquier tipo y tamaño de organización. 
                  Generamos valor a la sociedad, clientes y accionistas, y 
                  todos los grupos de interés, con una gestión innovadora, 
                  eficiente, neutral y de calidad en la prestación de servicios
                </p></h2> 
              </v-card-text>
              </v-card>

              <v-card flat>
              <v-img
                src="../assets/valores.jpg"
                width="500px"
                aspect-ratio="1.7"
                height="550"
                class="mx-auto mt-12 mr-"
              >
              </v-img>
              </v-card>

              </v-col>
              <v-col cols="5">

                <v-card flat>
                  <v-img
                    src="../assets/vision.png"
                    width="500px"
                    aspect-ratio="1.7"
                    height="200"
                    class="mx-auto"
                  >
                  </v-img>
                  <v-card-title>
                    <h1><p class="black--text text-decoration-underline "> 
                      Vision 
                    </p></h1>
                  </v-card-title>
                  <v-card-text class="mx-0">
                    <h2><p 
                    class="text-justify font-weight-bold black--text">
                      Conservar y optimizar el posicionamiento que SATNET 
                      S.A.S ha logrado en su comunidad para obtener un futuro 
                      donde la tecnología esté al servicio, beneficio y desarrollo 
                      de nuestros clientes. Permaneciendo en la mente de la gente 
                      siempre que se piense en telecomunicaciones.
                    </p></h2> 
                  </v-card-text>
                </v-card>

                <v-card flat class="mt-12 pt-12" height="500" >
                  <v-card-title>
                    <h1><p class="black--text text-decoration-underline mt-12 "> 
                      Valores 
                    </p></h1>
                  </v-card-title>
                    <v-card-text class="mx-0">
                      <h2><ul 
                      class="text-left font-weight-bold black--text pt-5 ">
                        <li class="mb-2">Compromiso: Nos responsabilizamos de fortalecer nuestros <br> proyectos de forma proactiva.</li>
                        <li class="mb-2">Flexibilidad: Nos adaptamos al entorno en continua evolución.</li>
                        <li class="mb-2">Honestidad: Demostramos integridad en nuestras actuaciones.</li>
                        <li class="mb-2">Credibilidad: Lo que decimos, lo hacemos.</li>
                        <li class="mb-2">Desarrollo: Favorecemos el desarrollo de las personas mediante <br> la cohesión, la colaboración y el equipo.</li>
                        <li class="mb-2">Ética: disfrutar la verdad en el mundo de los negocios, mediante <br> el cumplimiento de los compromisos pactados.</li>
                      </ul></h2> 
                    </v-card-text>
                </v-card>
              
              </v-col>
              <v-col>
                <p 
                class="text-justify font-weight-bold black--text">
                PLACEHOLDER                
                </p>
              </v-col>

          </v-row>

        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
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
