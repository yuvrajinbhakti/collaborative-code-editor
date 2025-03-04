import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
const Editor = () => {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);
  return (
    <div className="editor">
      <CodeMirror
        value={value}
        // height="200px"
        theme={"dark"}
        // theme={vscodeDark}
        minHeight="90vh"
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={onChange}
        autoCorrect="true"
        autoSave="true"
      />
      ;
    </div>
  );
};

export default Editor;
