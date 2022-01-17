<template>
  <div>
    <h3 class="secondary--text">{{ headText }}</h3>
    <div class="white--text">
      <br />
      {{ textA }}
      <br />
      <br />
      {{ textB }}
      <br />
      <br />
      <div v-if="textC">
        {{ textC }}
        <br />
        <br />
      </div>
      <div v-if="textD">
        {{ textD }}
        <br />
        <br />
      </div>
      <div v-if="textE">
        {{ textE }}
        <br />
        <br />
      </div>
      <div v-if="textF">
        {{ textF }}
        <br />
        <br />
      </div>
      <div v-if="textG">
        {{ textG }}
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "textLeft",
  props: [
    "headText",
    "textA",
    "textB",
    "textC",
    "textD",
    "textE",
    "textF",
    "textG",
  ],
};
</script>

<style scoped></style>
