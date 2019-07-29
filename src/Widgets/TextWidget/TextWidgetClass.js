import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TextWidget = Scrivito.provideWidgetClass("TextWidget", {
  attributes: {
    text: "html",
    alignment: ["enum", { values: ["left", "center", "right"] }],
    animation: [
      "enum",
      {
        values: [
          "none",
          "fadeInLeft",
          "fadeInRight",
          "fadeInDown",
          "fadeInUp",
          "zoomIn",
        ],
      },
    ],
    color: [
      "enum",
      {
        values: [
            "brand-primary",
            "brand-secondary",
            "secondary-dark",
            "grey",
            "greydark",
            "font-color",
            "alert-color",
        ]
      }
    ],
  },
});

registerTextExtract("TextWidget", [{ attribute: "text", type: "html" }]);

export default TextWidget;
