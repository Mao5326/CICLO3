<template>
  <div class="div">
    <v-card color="indigo darken-3" class="pt-8">
      <v-carousel
        cycle
        height="450"
        show-arrows-on-hover
        hide-delimiters
      >

        <v-carousel-item>    
          <v-img
            src="../assets/imagen9.jpg"
            max-height="600"
          >  
          </v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img
            src="../assets/imagen10.jpg"
            max-height="600"
          >  
          </v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img
            src="../assets/imagen11.jpg"
            max-height="600"
          >  
          </v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img
            src="../assets/imagen12.jpg"
            max-height="600"
          >  
          </v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img
            src="../assets/imagen13.jpg"
            max-height="600"
            
          >  
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>

  </div>
</template>

<script>
export default {
    name: 'header',

    data () {
    },
}
</script>

<style>
  .div{
    background-color: #283593;
  }
</style>
