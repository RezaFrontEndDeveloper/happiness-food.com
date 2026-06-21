import { create } from "zustand";

const useEmployed = create((set) => ({
  employedForm: {},
  setEmployedForm: (form) => {
    set({ employedForm: form });
  },
}));
export default useEmployed;
