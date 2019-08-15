import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BoxWidget", ({ widget }) => {
  const classNames = ["card"];
  const backgroundImage = widget.get("backgroundImage");

  const sectionStyle = {};

  let backgroundColor = widget.get("boxStyle");


  if (backgroundImage) {
    backgroundColor = "dark-image";
    sectionStyle.background = [
      {
        image: "linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))",
      },
      { image: backgroundImage },
    ];
  }


  if (widget.get("boxStyle") !== "white") {
    classNames.push(widget.get("boxStyle"))
  }
  if (widget.get("useOffset") === "yes") {
    classNames.push("box-offset");
  }
  if (widget.get("boxHeight") === "5") {
    classNames.push("height-5");
  }
  if (widget.get("boxHeight") === "10") {
    classNames.push("height-10");
  }
  if (widget.get("boxHeight") === "15") {
    classNames.push("height-15");
  }
  if (widget.get("boxHeight") === "20") {
    classNames.push("height-20");
  }
  if (widget.get("boxHeight") === "25") {
    classNames.push("height-25");
  }
  if (widget.get("boxHeight") === "33") {
    classNames.push("height-33");
  }
  if (widget.get("boxHeight") === "50") {
    classNames.push("height-50");
  }
  if (widget.get("boxHeight") === "66") {
    classNames.push("height-66");
  }
  if (widget.get("boxHeight") === "75") {
    classNames.push("height-75");
  }
  if (widget.get("boxHeight") === "100") {
    classNames.push("height-100");
  }
  console.log('BG',backgroundImage);
  return (
    <Scrivito.BackgroundImageTag
      tag="section"
      style={sectionStyle}
    >
    <Scrivito.WidgetTag className={classNames.join(" ")}>
      <Scrivito.ContentTag
        content={widget}
        attribute="body"
        className="card-body"
      />
    </Scrivito.WidgetTag>
    </Scrivito.BackgroundImageTag>
  );
});
