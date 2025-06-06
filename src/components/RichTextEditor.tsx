"use client";

import React, { useEffect, useState } from "react";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

type RichTextEditorProps = {
  value: string;
  onChange: (content: string) => void;
};

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [isClient, setIsClient] = useState(false);
  const [editorState, setEditorState] = useState<EditorState | null>(null);

  useEffect(() => {
    setIsClient(true);

    // Initialize editor state only after mounting
    try {
      if (value) {
        const content = convertFromRaw(JSON.parse(value));
        setEditorState(EditorState.createWithContent(content));
      } else {
        setEditorState(EditorState.createEmpty());
      }
    } catch {
      setEditorState(EditorState.createEmpty());
    }
  }, [value]);

  const handleChange = (state: EditorState) => {
    setEditorState(state);
    const raw = JSON.stringify(convertToRaw(state.getCurrentContent()));
    onChange(raw);
  };

  if (!isClient || !editorState) return null;

  return (
    <div className="border p-2 min-h-[150px] bg-white">
      <Editor editorState={editorState} onChange={handleChange} />
    </div>
  );
}
