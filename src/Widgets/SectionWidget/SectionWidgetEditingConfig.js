import * as Scrivito from "scrivito";
import sectionWidgetIcon from "../../assets/images/section_widget.svg";

Scrivito.provideEditingConfig("SectionWidget", {
  title: "Section",
  thumbnail: sectionWidgetIcon,
  attributes: {
    backgroundColor: {
      title: "Background color",
      description:
        "Does not apply if a background image is set. Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "brand-primary", title: "Primary color" },
        { value: "brand-secondary", title: "Secondary color" },
        { value: "secondary-dark", title: "Secondary dark" },
        { value: "grey", title: "Grey light" },
        { value: "greydark", title: "Grey dark" },
        { value: "font-color", title: "Font color" },
        { value: "alert-color", title: "Alert color" },
      ],
    },
    useFullWidth: {
      title: "Use full width?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    useFullHeight: {
      title: "Use full screen height?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    showPadding: {
      title: "Show padding?",
      description: "Padding adds space around this section. Default: Yes",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    backgroundImage: {
      title: "Background image",
    },
    boxHeight: {
      title: "Box height",
      description: "Default: 50vh",
      values: [
        { value: "10", title: "10vh" },
        { value: "15", title: "15vh" },
        { value: "20", title: "20vh" },
        { value: "25", title: "25vh" },
        { value: "33", title: "33vh" },
        { value: "50", title: "50vh" },
        { value: "66", title: "66vh" },
        { value: "75", title: "75vh" },
        { value: "100", title: "100vh" },

      ],
    },
  },
  properties: [
    "backgroundColor",
    "backgroundImage",
    "boxHeight",
    "useFullWidth",
    "useFullHeight",
    "showPadding",
  ],
  initialContent: {
    boxHeight: "50",
    backgroundColor: "white",
    showPadding: "yes",
    useFullHeight: "no",
    useFullWidth: "no",
  },
});
