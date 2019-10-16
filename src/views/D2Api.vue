<template>
  <div class="about">
    sum d2 api here
    <br />
    {{this.info}}
  </div>
</template>

<script>
export default {
  key: "fffd26d042f24bdd8b90f5075f2b4ca4",
  data: function() {
    return {
      info: null
    };
  },
  mounted() {
    const axios = require("axios");

    axios
      .get(
        "https://www.bungie.net/en/oauth/authorize?client_id=25096&response_type=code&state=fffd26d042f24bdd8b90f5075f2b4ca4/"
      )
      .then(response => (this.info = response));
  }
};
</script>