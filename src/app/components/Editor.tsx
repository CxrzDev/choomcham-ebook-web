'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CreateLink,
  BlockTypeSelect,
  CodeToggle,
  ListsToggle,
  linkDialogPlugin,
  linkPlugin,
  InsertThematicBreak,
  tablePlugin,
  InsertTable
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
type EditorProps = MDXEditorProps & {
  className?: string;
};

const Editor = forwardRef<MDXEditorMethods, EditorProps>((props, forwardedRef) => {
  const editorRef = useRef<MDXEditorMethods>(null);

  // Forward the editor methods to the parent component
  useImperativeHandle(forwardedRef, () => ({
    ...editorRef.current!
  }));

  // Toolbar action handlers
  const handleBoldClick = () => {
    // editorRef.current?.commands.toggleBold();
  };

  const handleItalicClick = () => {
    // editorRef.current?.commands.toggleItalic();
  };

  const handleCodeClick = () => {
    // editorRef.current?.commands.toggleCodeBlock();
  };

  return (
    <div className="rounded-lg border border-gray-200 ">
      <div className="border-b border-gray-200 bg-gray-50 p-2 flex gap-2">
        Live Preview
      </div>

      <MDXEditor

        contentEditableClassName="prose"
        ref={editorRef}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {' '}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CreateLink />
                <BlockTypeSelect />
                <InsertThematicBreak />
                <CodeToggle />
                <ListsToggle />
                <InsertTable />
                
              </>
            )
          }),
          headingsPlugin(),
          tablePlugin(),
          listsPlugin(),
          linkDialogPlugin(),
          linkPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin()
        ]}


        {...props}
        className={`focus:border-none  w-full ${props.className || ''}`}
      />
    </div>
  );
});

Editor.displayName = 'Editor';

export default Editor;