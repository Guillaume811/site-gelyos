import { useContext } from "react";
import { ModalProjectContext } from "./ModalProjectContext";

export function useModalProject() {
  const context = useContext(ModalProjectContext);
  if (!context) {
    throw new Error("useProjectModal doit être utilisé dans <ProjectModalProvider>.");
  }
  return context;
}