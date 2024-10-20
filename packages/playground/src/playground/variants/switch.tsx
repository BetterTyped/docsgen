import { useState } from "react";
import Editor from "react-simple-code-editor";
import { LiveError, LivePreview } from "react-live";

import { PlaygroundComponentProps } from "playground/playground.types";
import { highlightLines } from "playground/playground.utils";

export const Switch = ({ code, setState }: PlaygroundComponentProps) => {
  const [showCode, setShowCode] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const CodeEditor = Editor?.default || Editor;

  return (
    <>
      <div className="api-playground__controls">
        <button
          type="button"
          className={`api-playground__show ${showCode ? "" : "api-playground__active"}`}
          onClick={() => setShowCode(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 511.999 511.999"
          >
            <g>
              <g>
                <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418    C447.361,287.923,358.746,385.406,255.997,385.406z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" />
              </g>
            </g>
          </svg>
          Preview
        </button>
        <button
          type="button"
          className={`api-playground__hide ${showCode ? "api-playground__active" : ""}`}
          onClick={() => setShowCode(true)}
        >
          <svg
            version="1.1"
            id="fi_711284"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 511.997 511.997"
          >
            <g>
              <g>
                <path
                  d="M506.76,242.828l-118.4-125.44c-7.277-7.718-19.424-8.07-27.142-0.787c-7.706,7.277-8.064,19.43-0.781,27.142
			l105.965,112.256L360.437,368.268c-7.283,7.712-6.925,19.859,0.781,27.142c3.712,3.501,8.454,5.235,13.178,5.235
			c5.101,0,10.195-2.022,13.965-6.01l118.4-125.446C513.742,261.785,513.742,250.226,506.76,242.828z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M151.566,368.262L45.608,255.999l105.958-112.262c7.277-7.712,6.925-19.866-0.787-27.142
			c-7.706-7.277-19.866-6.925-27.142,0.787l-118.4,125.44c-6.982,7.398-6.982,18.963,0,26.362L123.643,394.63
			c3.776,4,8.864,6.016,13.965,6.016c4.723,0,9.466-1.741,13.171-5.242C158.498,388.127,158.843,375.974,151.566,368.262z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M287.061,52.697c-10.477-1.587-20.282,5.606-21.882,16.083l-56.32,368.64c-1.6,10.483,5.6,20.282,16.083,21.882
			c0.986,0.147,1.958,0.218,2.925,0.218c9.325,0,17.504-6.803,18.957-16.301l56.32-368.64
			C304.744,64.095,297.544,54.297,287.061,52.697z"
                />
              </g>
            </g>
          </svg>
          Code
        </button>
      </div>
      <div className="api-playground__wrapper">
        {!showCode && (
          <div className="api-playground__presentation">
            <LivePreview className="api-playground__preview" />
          </div>
        )}

        {showCode && (
          <>
            <LiveError className="api-playground__error" />
            <div className="api-playground__editor">
              <CodeEditor
                value={code}
                onValueChange={setState}
                className="api-playground__editor"
                highlight={highlightLines}
                padding={20}
                tabSize={4}
                disabled
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
