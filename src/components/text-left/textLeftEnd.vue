<template>
  <div>
    <h3 class="textHeaderLeftPanel--text">{{ headText }}</h3>
    <div class="textLeftPanel--text">
      <br />
      {{ textA }}
      <br />
      <br />
      {{ textB }}
      <br />
      <br />
      {{ textC }}
      <br />
      <br />
      {{ textD }}
      <br />
      <br />
      {{ textE }}
      <br />
      <br />
      {{ firstName }} {{ lastName }}
      <br />
      <br />
      {{ textF }}
      {{ websiteTeam }}
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "textLeftEnd",
  props: [
    "headText",
    "textA",
    "textB",
    "textC",
    "textD",
    "textE",
    "textF",
    "textG",
    "firstName",
    "lastName",
    "websiteTeam",
  ],
};
</script>

<style scoped></style>
