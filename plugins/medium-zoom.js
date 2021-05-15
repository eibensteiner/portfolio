import extend from "../utils/extend-vue-app";
import mediumZoom from "medium-zoom";

export default async function({ app }) {
  extend(app, {
    mounted() {
      mediumZoom("img[data-zoomable]", {
        margin: window.innerWidth < 1000 ? 0 : 160,
      });
    },
  });
}
