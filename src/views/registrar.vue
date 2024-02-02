<template>
    
    <b-container fluid class="mt-5 mr-5">
        <b-breadcrumb :items="bread"></b-breadcrumb>

        <b-form @submit.prevent="handleSubmit">
            <b-row>
                <b-col md="4">
                    <b-form-group label="Marca:" label-for="marca" class="mb-4">
                        <b-form-input id="marca" v-model="brand" :state="validateAlphanumeric(brand)"
                            placeholder="Ingrese la marca" required></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="4">
                    <b-form-group label="Modelo:" label-for="modelo" class="mb-4">
                        <b-form-input id="modelo" v-model="model" :state="validateAlphanumeric(model)"
                            placeholder="Ingrese el modelo" required></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4">
                    <b-form-group label="Año de fabricación:" label-for="anoFabricacion" class="mb-4">
                        <b-form-input id="anoFabricacion" v-model="year" :state="validateYear(year)"
                            placeholder="Ingrese el año de fabricación" required></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="4">
                    <b-form-group label="Número de serie:" label-for="numSerie" class="mb-4">
                        <b-form-input id="numSerie" v-model="serie" :state="validateSerialNumber(serie)"
                            placeholder="Ingrese el número de serie (XXXX000-00XX)" required></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="8">
                    <b-button type="submit" variant="primary" class="mb-4">Registrar</b-button>
                </b-col>
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            brand: "",
            model: "",
            year: "",
            serie: "",
            bread: [
                {
                    text: "Home",
                    to: { name: "home" },
                },
                {
                    text: "Registrar",
                    active: true,
                },
            ],
        };
    },
    methods: {
        async handleSubmit() {
            const vehicleData = {
                brand: this.brand,
                model: this.model,
                year: this.year,
                serie: this.serie,
        };

        const response = await axios.post('http://localhost:8080/api/vehiculos', vehicleData);
        this.$router.push('/');

        },
        validateAlphanumeric(value) {
            const alphanumericRegex = /^[a-zA-Z0-9]+$/;
            return alphanumericRegex.test(value);
        },
        validateYear(value) {
            const currentYear = new Date().getFullYear();
            return value <= currentYear;
        },
        validateSerialNumber(value) {
            const serialNumberRegex = /^[a-zA-Z]{4}\d{3}-\d{2}[a-zA-Z]{2}$/;
            return serialNumberRegex.test(value);
        },
    },
};
</script>
