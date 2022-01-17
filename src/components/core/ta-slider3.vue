<template>
  <div class="mt-3">
    <div><br /><br /></div>
    <v-slider
      prop="value"
      v-model="joho"
      :value="value"
      :color="color"
      always-dirty
      min="0"
      max="10"
      step="1"
      thumb-label="always"
      :thumb-color="color"
      :track-color="color"
    >
      <template v-slot:append>
        <v-icon color="secondary">mdi-plus-circle-outline</v-icon>
      </template>
      <template v-slot:prepend>
        <v-icon color="accent">mdi-minus-circle-outline</v-icon>
      </template>
    </v-slider>
  </div>
</template>

<script>
export default {
  name: "ta-slider2",
  props: {
    value: null,
  },
  data() {
    return {};
  },

  computed: {
    joho: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },

    color() {
      if (this.value < 5) return "accent";
      if (this.value > 5) return "secondary";
      return "accent";
    },
  },
};
</script>

<style scoped></style>
