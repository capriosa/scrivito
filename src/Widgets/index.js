import "scrivito-accessible-accordion";
import "scrivito-adv-button";
import "scrivito-adv-button/index.css";
import "scrivito-areachart";
import "scrivito-barchart";
import "scrivito-blockquote";
import "scrivito-clippath-image";
import "scrivito-clippath-image/index.css";
import "scrivito-collapsible-card";
import "scrivito-content-lists";
import "scrivito-countdown";
import "scrivito-eventbrite";
import "scrivito-eyecatcher";
import "scrivito-eyecatcher/index.css";
import "scrivito-fancy-header";
import "scrivito-fancy-header/index.css";
import "scrivito-follow-on-twitter";
import "scrivito-highlight-code";
import "scrivito-jw-video-player";
import "scrivito-linechart";
import "scrivito-piechart";
import "scrivito-progressbar";
import "scrivito-progressbar/index.css";
import "scrivito-range-slider";
import "scrivito-reference-teaser";
import "scrivito-social-links";
import "scrivito-social-links/index.css";
import "scrivito-swipeable";
import "scrivito-tabs";
import "scrivito-time-ago";
import "scrivito-twitter-timeline";
import "scrivito-undraw";
import "scrivito-undraw/index.css";



function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));

