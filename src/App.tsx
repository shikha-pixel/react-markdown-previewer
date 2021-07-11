import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.scss";
import { Tabs, Tab, TextArea, Button } from "carbon-components-react";

import MarkdownPreviewErr from "./MarkdownPrevErr/MarkdownPrevErr";
import rehypeRaw from "rehype-raw";

interface Props {}
const gfm = require("remark-gfm");
const MarkdownPreview: React.FunctionComponent<Props> = (props) => {
 
  const [markdownContent, setMarkdownContent] = useState("");
  return (
    <React.Fragment>
      <div className="bgColor">
        <div className="contentToCentre">
          <div style={{ width: "50%" }}>
            <h5 style={{ textAlign: "center", marginTop: "1rem" }}>
              {" "}
              React markdown editor with preview
            </h5>
            <Tabs scrollIntoView={false}>
              <Tab href="#" id="tab-1" label="Write your content">
                <div className="some-content">
                  <TextArea
                    cols={50}
                    id="gettingStarted"
                    labelText=""
                    light
                    value={markdownContent}
                    onChange={(event) => {
                      setMarkdownContent(event.target.value);
                    }}
                    rows={25}
                  />
                </div>
              </Tab>
              <Tab href="#" id="tab-2" label="Preview">
                <div className="spacing preview markdown-style markdown-preview ">
                  <MarkdownPreviewErr>
                    <ReactMarkdown
                      children={markdownContent}
                      linkTarget="_blank"
                      rehypePlugins={[rehypeRaw]}
                      plugins={[gfm]}
                    />
                  </MarkdownPreviewErr>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="contentToCentre">
          <Button kind="tertiary" onClick={() => setMarkdownContent("")}>
            Clear text
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MarkdownPreview;
