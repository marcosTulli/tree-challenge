import { create } from 'zustand';

const initialState = {
    isOpen: false
};

interface ICreateNodeDialogState {
    isOpen: boolean,
    openDialog: () => void;
    closeDialog: () => void;
}

export const useCreateNodeDialog = create<ICreateNodeDialogState>()((set) => ({
    ...initialState,
    openDialog: () => set(() => ({ isOpen: true })),
    closeDialog: () => set(() => ({ isOpen: false })),
}));

export default useCreateNodeDialog;