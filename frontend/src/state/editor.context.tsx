import { createContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";
import { editorReducer } from "./editor.reducer";
import { initialEditorState } from "./editor.initial";
import type { EditorAction } from "./editor.actions";
import type { EditorState } from "./editor.types";

export const EditorContext = createContext<{
    state: EditorState;
    dispatch: Dispatch<EditorAction>;
} | null>(null);

export function EditorProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(editorReducer, initialEditorState);

    return (
        <EditorContext.Provider value={{ state, dispatch }}>
            {children}
        </EditorContext.Provider>
    );
}
