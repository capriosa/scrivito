import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";

const ProductPage = Scrivito.provideObjClass("ProductPage", {
  attributes: {
    title: "string",
    productImage: ["reference", {only: "ImageWidget"}],
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
});

registerTextExtract("ProductPage", [{ attribute: "body", type: "widgetlist" }]);

export default ProductPage;
