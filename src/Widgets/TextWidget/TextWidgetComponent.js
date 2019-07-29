import * as React from "react";
import * as Scrivito from "scrivito";
import AnimateOnReveal from "../../Components/AnimateOnReveal";

Scrivito.provideComponent("TextWidget", ({ widget }) => {
  const classNames = [];
  const animation = widget.get("animation") || "none";
  const color = "text-" + widget.get("color") || "black";
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }

  classNames.push(color);

  return (
    <AnimateOnReveal animation={animation}>
    <Scrivito.ContentTag
      tag="div"
      className={classNames.join(" ")}
      content={widget}
      attribute="text"
    />
    </AnimateOnReveal>
  );
});
