

<template>
    <b-container fluid class="mt-5 mr-5">
      <b-row>
        <b-breadcrumb :items="bread"></b-breadcrumb>

        <h1>Home</h1>
        <div class="container fluid">
          <div class="row">
            <div class="col-12">
              <p>
                Hola a donde quieres ir?
              </p>
              <div class="row">
                <div class="col-6">
                  <router-link to="/registrar" class="btn btn-primary">Registrar vehiculo</router-link>
                </div>
                <div class="col-6">
                  <router-link to="/consultar" class="btn btn-primary">consultar</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
</template>


<script>
export default {
  data() {
    return {
      bread: [
        {
          text: "Home",
          active: true,
        },
      ],
    };
  },
};
</script>