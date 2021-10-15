<template>
  <v-img src="../assets/fondo.jpg" height="873"
    ><v-container>
      <v-data-table
        :headers="headers"
        :items="servicios"
        sort-by="cpeID"
        class="elevation-1"
        loading
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Lista de servicios</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-card flat>
              <v-img src="../assets/LOGO1.png" contain width="150" />
            </v-card>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="1200px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Nuevo servicio
                </v-btn>
                <v-btn color="primary" dark class="mb-2 mx-2" href="/principal">
                  Regresar
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.cpeID"
                          label="terminal ID"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.cpeName"
                          label="Nombre de la estación"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.ubicacion"
                          label="Sitio"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.coordenadas"
                          label="Latitud ,  Longitud"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.tipoServicio"
                          label="Tipo de servicio"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombreContacto"
                          label="Nombre del contacto"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.numeroContacto"
                          label="Teléfono de contacto"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.clienteID"
                          label="Cliente ID"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.direccionIP"
                          label="Dirección IP"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.mask"
                          label="Mascara de red"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.tamañoAntena"
                          label="Tamaño de la antena"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.bucW"
                          label="Potencia Buc W"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.bucOL"
                          label="Oscilador Buc"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4"
                        ><v-text-field
                          v-model="editedItem.lnbOL"
                          label="Oscilador lnb"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-card flat>
                    <v-img src="../assets/LOGO1.png" contain width="200" />
                  </v-card>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >esta seguro de eliminar este servicio?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-img>
</template>


<script>
import {
  deleteServicio,
  insertServicio,
  getAllServicios,
  //getServicioBycpeID,
  updateServicio,
} from "../services/serviciosService";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID Estación",
        align: "start",
        sortable: false,
        value: "cpeID",
      },
      { text: "Nombre Estación", value: "cpeName" },
      { text: "Sitio", value: "ubicacion" },
      { text: "Coordenadas", value: "coordenadas" },
      { text: "Tipo de servicio", value: "tipoServicio" },
      { text: "Contacto", value: "nombreContacto" },
      { text: "Tel de Contacto", value: "numeroContacto" },
      { text: "Cliente ID", value: "clienteID" },
      { text: "Dirección IP", value: "direccionIP" },
      { text: "Mask", value: "mask" },
      { text: "Tamaño de Antena", value: "tamañoAntena" },
      { text: "Potencia Buc W", value: "bucW" },
      { text: "Oscilador buc", value: "bucOL" },
      { text: "Oscilador lnb", value: "lnbOL" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    servicios: [],
    editedIndex: -1,
    editedItem: {
      cpeID: "",
      ubicacion: "",
      coordenadas: "",
      tipoServicio: "",
      nombreContacto: "",
      numeroContacto: 0,
      clienteID: "",
      direccionIP: "",
      mask: 0,
      tamañoAntena: 0,
      bucW: "",
      bucOL: "",
      lnbOL: "",
    },
    defaultItem: {
      cpeID: "",
      cpeName: "",
      ubicacion: "",
      coordenadas: "",
      tipoServicio: "",
      nombreContacto: "",
      numeroContacto: 0,
      clienteID: "",
      direccionIP: "",
      mask: 0,
      tamañoAntena: 0,
      bucW: "",
      bucOL: "",
      lnbOL: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "NUEVO SERVICIO" : "EDITAR SERVICIO";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {},

    editItem(item) {
      this.editedIndex = this.servicios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      updateServicio(item.cpeID);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.servicios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      deleteServicio(item.cpeID);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.servicios.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
        this.dialog = false;
        this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      
      if (this.editedIndex > -1) {
        Object.assign(this.servicios[this.editedIndex], this.editedItem);
        //alerta(this.editItem)
      } else 
      { this.servicios.push(this.editedItem);
        this.cpeID= '';
      
        var dato= {

         'cpeID': this.editedItem.cpeID,
         cpeName: this.editedItem.cpeName

        };
        this.servicios.push(this.editedItem);
        this.cpeID= '';
        this.cpeName= '';
      
        alert(dato.cpeID)
        insertServicio(dato)
       
        
      }
      this.close();
    }
     
  
  },
  mounted() {
    getAllServicios()
      .then((response) => {
        this.servicios = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>
