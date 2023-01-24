import { useState } from "react";
import {
  Button,
  EditorContent,
  EditorWrapper,
  Panel,
  PanelSection,
} from "./Editor.styled";
import { ReactComponent as AlignLeft } from "../../assets/alignLeft.svg";
import { ReactComponent as AlignRight } from "../../assets/alignRight.svg";
import { ReactComponent as AlignCenter } from "../../assets/alignCenter.svg";

enum FontStyle {
  bold = "bold",
  italic = "italic",
  underline = "underline",
}

enum TextAlignment {
  center = "center",
  left = "left",
  right = "right",
}

type RecordFontStyle = {
  [P in FontStyle]?: boolean;
};

export function Editor() {
  const [fontStyles, setFontStyles] = useState<RecordFontStyle>({});
  const [textAlignment, setTextAlignment] = useState<TextAlignment>(
    TextAlignment.left
  );

  const updateFontStyle = (style: FontStyle) =>
    setFontStyles((prevStyles) => ({
      ...prevStyles,
      [style]: !prevStyles[style],
    }));

  const styleVariants = {
    ...fontStyles,
    align: textAlignment,
  };

  return (
    <EditorWrapper>
      <Panel>
        <PanelSection>
          <Button
            bold
            active={fontStyles[FontStyle.bold]}
            onClick={() => updateFontStyle(FontStyle.bold)}
          >
            B
          </Button>
          <Button
            italic
            active={fontStyles[FontStyle.italic]}
            onClick={() => updateFontStyle(FontStyle.italic)}
          >
            i
          </Button>
          <Button
            underline
            active={fontStyles[FontStyle.underline]}
            onClick={() => updateFontStyle(FontStyle.underline)}
          >
            u
          </Button>
        </PanelSection>
        <PanelSection>
          <Button
            active={textAlignment === TextAlignment.left}
            onClick={() => setTextAlignment(TextAlignment.left)}
          >
            <AlignLeft />
          </Button>
          <Button
            active={textAlignment === TextAlignment.center}
            onClick={() => setTextAlignment(TextAlignment.center)}
          >
            <AlignCenter />
          </Button>
          <Button
            active={textAlignment === TextAlignment.right}
            onClick={() => setTextAlignment(TextAlignment.right)}
          >
            <AlignRight />
          </Button>
        </PanelSection>
      </Panel>
      <EditorContent {...styleVariants} contentEditable spellCheck={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
        facilisis dui, et laoreet tortor. Ut gravida est sed porta pharetra. Sed
        euismod ligula id sapien auctor, sit amet vulputate justo consequat.
        Cras malesuada lacus in commodo pellentesque. Duis cursus lectus sit
        amet consequat dignissim. Nunc fringilla, odio eu maximus pellentesque,
        massa arcu posuere est, vitae gravida justo augue non lectus. Donec
        congue, velit vel finibus viverra, dolor nibh venenatis justo, vitae
        hendrerit velit neque quis eros. Aliquam ut eros tempus, egestas lectus
        vitae, rutrum libero. Quisque sed tellus nec leo suscipit tempor vitae
        in orci. Phasellus ut justo sed massa tincidunt pretium. Donec et
        dapibus eros. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Curabitur sit amet convallis nulla, non laoreet urna. Vivamus
        suscipit vulputate malesuada. Fusce tellus dolor, aliquam eu blandit at,
        volutpat at lacus. In ullamcorper luctus neque, rhoncus sagittis tellus
        aliquam eget. Praesent non pellentesque felis, sed posuere augue. In nec
        rhoncus augue. Etiam ornare leo a tortor sodales accumsan. Suspendisse
        ac neque et nisi facilisis elementum ac sit amet massa. Nam sodales
        blandit nibh, et volutpat nibh congue imperdiet. Vivamus luctus lorem
        nec ex faucibus rhoncus.
      </EditorContent>
    </EditorWrapper>
  );
}
