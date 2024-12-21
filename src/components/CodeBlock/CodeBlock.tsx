import { Highlight, themes } from "prism-react-renderer";

import styles from "./CodeBlock.module.scss";

type CodeBlockProps = {
  code: string;
};

export const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <Highlight theme={themes.vsDark} code={code} language="tsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={styles.code} translate="no">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
