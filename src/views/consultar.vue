<template>
    <b-container fluid class="mt-5 mr-5">
        <b-breadcrumb :items="bread"></b-breadcrumb>
        <b-row>
            <div>
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                    aria-controls="my-table"></b-pagination>
                <b-table :items="vehiculos" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                    :per-page="perPage" :current-page="currentPage">
                    <template #cell(brand)="data">
                        {{ data.item.brand }}
                    </template>
                    <template #cell(model)="data">
                        {{ data.item.model }}
                    </template>
                    <template #cell(year)="data">
                        {{ data.item.year }}
                    </template>
                    <template #cell(serie)="data">
                        {{ data.item.serie }}
                    </template>
                </b-table>
            </div>
        </b-row>
    </b-container>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            vehiculos: [],
            fields: [
                {
                    key: "brand",
                    sortable: true,
                },
                {
                    key: "model",
                    sortable: true,
                },
                {
                    key: "year",
                    sortable: true,
                },
                {
                    key: "serie",
                    sortable: true,
                },
            ],
            sortBy: "",
            sortDesc: false,
            bread: [
                {
                    text: "Home",
                    to: { name: "home" },
                },
                {
                    text: "Consultar vehiculos",
                    active: true,
                },
            ],
        };
    },
    computed: {
        rows() {
            return this.vehiculos.length;
        }
    },
    created() {
        this.fetchVehiculos();
    },
    watch: {
        sortBy: "fetchVehiculos",
        sortDesc: "fetchVehiculos",
    },
    methods: {
        async fetchVehiculos() {
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/vehiculos/page",
                    {
                        page: this.currentPage - 1,
                        size: this.perPage,
                        sort: this.sortBy,
                        desc: this.sortDesc,
                    }
                );
                this.vehiculos = response.data.content;
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        },
    },
};
</script>
  
<style></style>
  