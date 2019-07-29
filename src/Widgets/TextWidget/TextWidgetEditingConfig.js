import * as Scrivito from "scrivito";
import textWidgetIcon from "../../assets/images/text_widget.svg";

Scrivito.provideEditingConfig("TextWidget", {
  title: "Text",
  thumbnail: textWidgetIcon,
  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    animation: {
      title: "Animation",
      description:
        "The animation to perform as this headline becomes visible. Default: None",
      values: [
        { value: "none", title: "None" },
        { value: "fadeInLeft", title: "Left to center" },
        { value: "fadeInRight", title: "Right to center" },
        { value: "fadeInDown", title: "Top to center" },
        { value: "fadeInUp", title: "Bottom to center" },
        { value: "zoomIn", title: "Zoom in" },
      ],
    },
    color: {
      title: "Color",
      description: "Headline color. Default: Dark grey",
      values: [
        { value: "brand-primary", title: "Primary color" },
        { value: "brand-secondary", title: "Secondary color" },
        { value: "secondary-dark", title: "Secondary dark" },
        { value: "grey", title: "Grey light" },
        { value: "greydark", title: "Grey dark" },
        { value: "font-color", title: "Font color" },
        { value: "alert-color", title: "Alert color" },
      ]
    },
    text: {
      title: "Text",
      description: "The actual source code of this text",
    },
  },
  properties: ["alignment", "animation", "color", "text"],
  initialContent: {
    alignment: "left",
    alignment: "none",
    color: "font-color"
  },
});
