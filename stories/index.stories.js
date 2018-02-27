import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import FOO from "../src/index";

import { withInfo } from "@storybook/addon-info";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("FOO", module).add(
  "FOO H1",
  withInfo(`
description or documentation about my component, supports markdown

~~~js
<FOO>Some text</FOO>
~~~

`)(() => {
    return <FOO>howdy</FOO>;
  })
);

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));
