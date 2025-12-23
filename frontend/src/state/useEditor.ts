import { useContext } from "react";
import { EditorContext } from "./editor.context";

export function useEditor() {
    const ctx = useContext(EditorContext);
    if (!ctx) {
        throw new Error("useEditor must be used inside EditorProvider");
    }
    return ctx;
}
