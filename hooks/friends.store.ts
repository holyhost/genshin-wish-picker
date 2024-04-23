import { Character } from "@/constants/characters";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface GroupType {
    id: string,
    data: Character[],
    name: string,
    updateTime: string
}

interface FriendsState {
    friends: GroupType[],
    addGroup: (f: GroupType)=> void,
    updateGroup: (f: GroupType)=> void,
    removeGroup: (id: string)=> void
}

const useFriendsStore = create<FriendsState>()(
    persist(
        (set)=>({
            friends: [],
            addGroup: (f)=> set((state) => ({friends: [...state.friends, f]})),
            updateGroup: (f)=> set((state) => {
                const tempArr = state.friends.filter(item => item.id !== f.id)
                return {friends: [...tempArr, f]}
            }, true),
            removeGroup: (id: string)=> set((state) => {
                const tempArr = state.friends.filter(item => item.id !== id)
                return {friends: [...tempArr]}
            }, true)
        }),
        {
            name: 'all-friends',
            storage: createJSONStorage(()=> localStorage)
        }
    )
)

export default useFriendsStore