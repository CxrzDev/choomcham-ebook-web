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
  type MDXEditorProps
} from '@mdxeditor/editor';

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
        <button
          type="button"
          onClick={handleBoldClick}
          className="px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
        >
          Bold
        </button>
        <button
          type="button"
          onClick={handleItalicClick}
          className="px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
        >
          Italic
        </button>
        <button
          type="button"
          onClick={handleCodeClick}
          className="px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
        >
          Code
        </button>
      </div>
      
      <MDXEditor
      contentEditableClassName=''

        ref={editorRef}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
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