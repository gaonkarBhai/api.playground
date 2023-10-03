import React from "react";

function HomeLayout(props) {
  return <section {...props}>{props.children}</section>;
}

export default HomeLayout;
