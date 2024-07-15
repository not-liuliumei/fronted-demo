"use client";

import { Panel } from "@/components/Panel/Panel";
import { useState, useRef, ChangeEvent } from "react";
import "./index.css";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(20);
  const inputTextArea = useRef<HTMLTextAreaElement>(null);

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value as string);

    const newHeight = Math.max(20, inputTextArea.current?.offsetHeight || 0);
    setTextareaHeight(newHeight);
  };

  return (
    <Panel title="grow input">
      <div className="grow-input-wrapper" data-inputvalue={inputValue}>
        <textarea
          className="grow-input"
          rows={1}
          style={{ minHeight: textareaHeight }}
          value={inputValue}
          onChange={onInputChange}
          ref={inputTextArea}
        />
      </div>
    </Panel>
  );
}
