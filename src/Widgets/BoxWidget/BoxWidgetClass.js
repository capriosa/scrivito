import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const BoxWidget = Scrivito.provideWidgetClass("BoxWidget", {
  attributes: {
    body: "widgetlist",
    boxStyle: ["enum", {
      values: [
        "transparent",
        "white",
        "brand-primary",
        "brand-secondary",
        "brand-secondary-dark",
        "grey",
        "greydark",
        "font-color",
        "alert-color",
      ],
    }],
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
    backgroundImage: ["reference", { only: ["Image"] }],
    useOffset: ["enum", { values: ["yes", "no"] }],
  },
});

registerTextExtract("BoxWidget", [{ attribute: "body", type: "widgetlist" }]);

export default BoxWidget;
