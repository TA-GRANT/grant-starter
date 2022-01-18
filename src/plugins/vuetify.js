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
        textHeaderLeftPanel: "#00a7b5",
        textLeftPanel: "#ffffff",
        rightPanel: "#ffffff",
        textWhite: "#ffffff",
        textStat: "#4f2d7f",
        circleColorOne: "#4f2d7f",
        circleColorTwo: "#98D732",
        toolbarColor: "#dcd5e5",
        textToolBar: "#000000",
      },
      dark: {
        primary: "#4f2d7f",
        secondary: "#98D732",
        accent: "#D2002e",
        error: "#D2002e",
        info: "#C24200",
        success: "#FF6C00",
        warning: "#D2002e",
        leftPanel: "#ffffff",
        textHeaderLeftPanel: "#4f2d7f",
        textLeftPanel: "#000000",
        rightPanel: "#000000",
        textWhite: "#ffffff",
        textStat: "#00a7b5",
        circleColorOne: "#00a7b5",
        circleColorTwo: "#98D732",
        toolbarColor: "#4f2d7f",
        textToolBar: "#ffffff",
      },
    },
  },
});
