<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dense flat dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Ollie</span>
        <span class="font-weight-light">Brennan</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn router-link to="/" text>Home</v-btn>
        <v-btn router-link to="/about" text>About Me</v-btn>
        <v-btn router-link to="/contact" text>Contact</v-btn>
        <v-btn router-link to="/concepts" text disabled>Concepts</v-btn>
        <v-btn router-link to="/d2" text>D2 API</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {};
</script>