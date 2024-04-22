import { Character } from "@/constants/characters";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface GroupType {
    id: string,
    data: Character[],
    name: string,
    updateTime: string
}

interface FriendsState {
    friends: GroupType[],
    update: (f: GroupType)=> void
}

const useFriendsStore = create<FriendsState>()(
    persist(
        (set)=>({
            friends: [],
            update: (f)=> set((state) => ({friends: [...state.friends, f]}))
        }),
        {
            name: 'all-friends',
            storage: createJSONStorage(()=> localStorage)
        }
    )
)

export default useFriendsStore