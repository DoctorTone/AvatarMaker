import React from "react";
import { Toolbar } from "./Toolbar";
import { Logos } from "./Logos";
import { Title } from "./Title";
import { Options } from "./Options";

export function ToolbarContainer({ onGLBUploaded, randomizeConfig }) {
  return (
    <Toolbar>
      <div className="toolbarContent">
        <Logos />
        <Title />
        <Options {...{ onGLBUploaded, randomizeConfig }} />
      </div>
      <div className="toolbarNotice">
        <span>
          Content available under a{" "}
          <a href="https://www.mozilla.org/en-US/foundation/licensing/website-content/" target="_blank" noreferrer>
            Creative Commons license
          </a>
          .
        </span>
      </div>
    </Toolbar>
  );
}
