import * as React from "react";
import * as Scrivito from "scrivito";
import AnimateOnReveal from "../../Components/AnimateOnReveal";

Scrivito.provideComponent("HeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const animation = widget.get("animation") || "none";
  const color = "text-" + widget.get("color") || "black";
  const classNames = [style];
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }
  if (widget.get("showDividingLine") === "yes") {
    classNames.push("b-bottom");
  }
  if (widget.get("showMargin") === "no") {
    classNames.push("no-margin");
  }

  classNames.push(color);

  return (
    <AnimateOnReveal animation={animation}>
    <Scrivito.ContentTag
      tag={level}
      content={widget}
      attribute="headline"
      className={classNames.join(" ")}
    />
    </AnimateOnReveal>
  );
});
