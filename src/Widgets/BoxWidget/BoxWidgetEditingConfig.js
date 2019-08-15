import * as Scrivito from "scrivito";
import boxWidgetIcon from "../../assets/images/box_widget.svg";

Scrivito.provideEditingConfig("BoxWidget", {
  title: "Box",
  thumbnail: boxWidgetIcon,
  attributes: {
    boxStyle: {
      title: "Background color",
      description: "Default: Transparent",
      values: [
        { value: "transparent", title: "Transparent" },
        { value: "white", title: "White with border" },
        { value: "brand-primary", title: "Primary color" },
        { value: "brand-secondary", title: "Secondary color" },
        { value: "brand-secondary-dark", title: "Secondary dark color" },
        { value: "grey", title: "Grey" },
        { value: "greydark", title: "Greydark" },
        { value: "font-color", title: "Font color" },
        { value: "alert-color", title: "Alert color" },

      ],
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
    useOffset: {
      title: "Use offset?",
      description: 'If so, the box will move "up". Default: No',
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["boxStyle", "backgroundImage","boxHeight", "useOffset"],
  initialContent: {
    boxStyle: "transparent",
    boxHeight: "50",
    useOffset: "no",
  },
});

