import React from "react";
import { Toolbar } from "./Toolbar";
import { UploadButton } from "./UploadButton";
import { MoreMenu } from "./MoreMenu";
import { Logos } from "./Logos";
import { dispatch } from "../dispatch";
import constants from "../constants";

function dispatchResetView() {
  dispatch(constants.resetView);
}

function dispatchExportAvatar() {
  dispatch(constants.exportAvatar);
}

export function ToolbarContainer({ onGLBUploaded, randomizeConfig }) {
  return (
    <Toolbar>
      <div className="toolbarContent">
        <span className="appName">Avatar Maker</span>
        <Logos />
        <MoreMenu
          items={
            <>
              <UploadButton onGLBUploaded={onGLBUploaded} />
              <a href="https://github.com/mozilla/hackweek-avatar-maker" target="_blank">
                GitHub
              </a>
            </>
          }
        ></MoreMenu>
        <button onClick={randomizeConfig}>Randomize avatar</button>
        <button onClick={dispatchResetView}>Reset camera view</button>
        <button onClick={dispatchExportAvatar} className="primary">
          Export avatar
        </button>
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
