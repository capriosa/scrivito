import * as Scrivito from "scrivito";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("ProductPage", {
  title: "Product Page",
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
    productImage: {
      title: "Product Image",
    }
  },
  properties: ["title", "productImage"],
  propertiesGroups: [metadataPropertiesGroup],
  initialContent: {
    body: [
      new SectionWidget({
        content: [new HeadlineWidget({ style: "h1" })],
      }),
    ],
    ...metadataInitialContent,
  },
});
