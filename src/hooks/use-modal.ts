import { useRef } from "react";
import { ModalActions } from "../interfaces/modal-actions";

export const useModal = () => useRef<ModalActions>(null)