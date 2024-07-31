import { create } from "zustand"

type PlayerStore = {
    ids: string[],
    activeId: string | undefined,
    setId: (id: string) => void,
    setIds: (ids: string[]) => void,
    reset: () => void,
}

const usePlayer = create<PlayerStore>((set) => {
    return {
        ids: [],
        activeId: undefined,
        setId: (id) => set({activeId: id}),
        setIds: (ids) => set({ids: ids}),
        reset: () => set({ids: [], activeId: undefined})
    }
})

export default usePlayer