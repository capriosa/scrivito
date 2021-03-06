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
          "brand-secondary-dark",
          "grey",
          "greydark",
          "font-color",
          "alert-color",
        ],
      },
    ],
    boxHeight: ["enum", {
      values: [
        "10",
        "15",
        "20",
        "25",
        "33",
        "50",
        "66",
        "75",
        "100",
      ],
    }],
    useGradient: ["enum", { values: ["yes", "no"]} ],
    rightBorder: ["enum", { values: ["yes", "no"]} ],
    verticalAlign: ["enum", { values: ["top", "center", "bottom"]}],
    backgroundImage: ["reference", { only: ["Image"] }],
  },
});

registerTextExtract("SectionWidget", [
  { attribute: "content", type: "widgetlist" },
]);

export default SectionWidget;
