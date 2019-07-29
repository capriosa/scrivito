import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const AlertWidget = Scrivito.provideWidgetClass("AlertWidget", {
  attributes: {
    title: "string",
    text: "string",
    additionalText: "string",
    color: [
      "enum",
      {
        values: [
          "alert-dark",
          "alert-primary",
          "alert-secondary",
          "alert-success",
          "alert-danger",
          "alert-warning",
          "alert-info"
        ]
      }
    ],

  },

});

registerTextExtract("AlertWidget", [
  { attribute: "text", type: "string" },
]);

export default AlertWidget;
