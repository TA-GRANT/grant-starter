import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#4f2d7f",
        secondary: "#98D732",
        accent: "#D2002e",
        error: "#D2002e",
        info: "#C24200",
        success: "#FF6C00",
        warning: "#D2002e",
        leftPanel: "#4f2d7f",
        rightPanel: "#ffffff",
        textWhite: "#ffffff",
        textStat: "#4f2d7f",
        circleColorOne: "#4f2d7f",
        circleColorTwo: "#98D732",
      },
      dark: {
        primary: "#4f2d7f",
        secondary: "#98D732",
        accent: "#D2002e",
        error: "#D2002e",
        info: "#C24200",
        success: "#FF6C00",
        warning: "#D2002e",
        leftPanel: "#4f2d7f",
        rightPanel: "#000000",
        textWhite: "#ffffff",
        textStat: "#98D732",
        circleColorOne: "#98D732",
        circleColorTwo: "#4f2d7f",
      },
    },
  },
});
