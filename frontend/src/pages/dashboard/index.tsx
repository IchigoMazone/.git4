import { useEditor } from "../../state/useEditor";
import Loading from "../loading";
import Container from "./components/container";
import DropDown from "./components/drop-down";
import { useRef } from "react";

export default function Dashboard() {
    const buttonRef = useRef(null);
    const { state, dispatch } = useEditor();

    const setDropDown = (key: string, value: boolean) => {
        dispatch({
            type: "SET_DROPDOWN",
            payload: { [key]: value },
        });
    };

    return (
        <>
            {state.util.loading ? (
                <Loading />
            ) : (
                <Container
                    actions={{ logout: () => setDropDown("logout", !state.dropdown["logout"]) }}
                />
            )}
            {state.dropdown.logout && (
                <DropDown
                    actions={{
                        profile: () => console.log("1"),
                        update: () => console.log("2"),
                        person: () => console.log("3"),
                        setup: () => console.log("4"),
                        help: () => console.log("5"),
                        logout: () => console.log("6"),
                    }}
                    onClose={() => console.log("7")}
                    buttonRef={buttonRef}
                />
            )}
        </>
    );
}
