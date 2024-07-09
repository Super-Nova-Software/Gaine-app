"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import TipTapMenuBar from "./TipTapMenuBar";
import { useMutation } from "@apollo/client";
import Text from "@tiptap/extension-text";
import { UPDATE_DOCUMENT } from "@/graphql/mutation/document";
import { useCompletion } from "ai/react";
import { DocumentType } from "@/graphql/gql/graphql";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "../ui/button";

type Props = { document: DocumentType ,channelId: string };
const TipTapEditor = ({ document, channelId }: Props) => {

  const [editorState, setEditorState] = React.useState(
    document?.editorState || `<h1>${document?.editorState}</h1>`
  );

  const { complete, completion } = useCompletion({
    api: "/api/completion",
  });

  const [updataDocument, { loading: saving }] = useMutation(UPDATE_DOCUMENT, {
    onError: (err) => {
      console.error("Error creating/updating document:", err);
    },
  });

  const customText = Text.extend({
    addKeyboardShortcuts() {
      return {
        "Shift-a": () => {
          // take the last 30 words
          const prompt = this.editor.getText().split(" ").slice(-30).join(" ");
          complete(prompt);
          return true;
        },
      };
    },
  });

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit, customText],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  const lastCompletion = React.useRef("");

  React.useEffect(() => {
    if (!completion || !editor) return;
    const diff = completion.slice(lastCompletion.current.length);
    lastCompletion.current = completion;
    editor.commands.insertContent(diff);
  }, [completion, editor]);

  const debouncedEditorState = useDebounce(editorState, 500);

  React.useEffect(() => {
    if (debouncedEditorState === "") return;
    updataDocument({
      variables: {
        id: 53,
        channelId: channelId,
        editorState: debouncedEditorState,
      },
      onCompleted: (data) => {
        console.log("Success update!", data);
      },
    });
  }, [debouncedEditorState, updataDocument,document.id, channelId]);

  return (
    <>
      <div className="flex justify-between items-center">
        {editor && <TipTapMenuBar editor={editor} />}
        <Button disabled >
          {saving ? "Saving..." : "Saved"}
        </Button>
      </div>

      <div className="prose prose-sm w-full mt-10">
        <EditorContent editor={editor} />
      </div>
      <div className="h-4"></div>
      <span className="text-sm">
        Tip: Press{" "}
        <kbd className="px-2 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg">
          Shift + A
        </kbd>{" "}
        for AI autocomplete
      </span>
    </>
  );
};

export default TipTapEditor;
