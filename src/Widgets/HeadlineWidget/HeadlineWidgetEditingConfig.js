import * as Scrivito from "scrivito";
import headlineWidgetIcon from "../../assets/images/headline_widget.svg";

Scrivito.provideEditingConfig("HeadlineWidget", {
  title: "Headline",
  thumbnail: headlineWidgetIcon,
  attributes: {
    style: {
      title: "Style",
      description: "Size and font of this headline. Default: Heading 2",
      values: [
        { value: "h1", title: "Heading 1" },
        { value: "h2", title: "Heading 2" },
        { value: "h3", title: "Heading 3" },
        { value: "h4", title: "Heading 4" },
        { value: "h5", title: "Heading 5" },
        { value: "h6", title: "Heading 6" },
      ],
    },
    level: {
      title: "Heading tag (optional)",
      description:
        "May be used for SEO, for generating a table of contents," +
        " or for improving accessibility. Default: Derived from Style",
      values: [
        { value: "h1", title: "h1" },
        { value: "h2", title: "h2" },
        { value: "h3", title: "h3" },
        { value: "h4", title: "h4" },
        { value: "h5", title: "h5" },
        { value: "h6", title: "h6" },
      ],
    },
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
    showDividingLine: {
      title: "Show dividing line?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    showMargin: {
      title: "Show margin?",
      description: "A margin adds space around this headline. Default: Yes",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["style", "level", "alignment", "animation", "color", "showDividingLine", "showMargin"],
  initialContent: {
    alignment: "left",
    headline: "Lorem Ipsum",
    animation: "none",
    color: "font-color",
    showDividingLine: "no",
    showMargin: "yes",
    style: "h2",
  },
});
