import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const SectionWidget = Scrivito.provideWidgetClass("SectionWidget", {
  attributes: {
    content: "widgetlist",
    useFullWidth: ["enum", { values: ["yes", "no"] }],
    useFullHeight: ["enum", { values: ["yes", "no"] }],
    showPadding: ["enum", { values: ["yes", "no"] }],
    backgroundColor: [
      "enum",
      {
        values: [
          "white",
          "brand-primary",
          "brand-secondary",
          "secondary-dark",
          "grey",
          "greydark",
          "font-color",
          "alert-color",
        ],
      },
    ],
    backgroundImage: ["reference", { only: ["Image"] }],
  },
});

registerTextExtract("SectionWidget", [
  { attribute: "content", type: "widgetlist" },
]);

export default SectionWidget;
