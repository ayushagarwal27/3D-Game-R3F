import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const store = create(
  subscribeWithSelector((set) => {
    return {
      blocksCount: 3,
      phase: "ready",
      start: () => {
        set((state) => {
          if (state.phase === "ready") {
            return { phase: "playing" };
          }
          return {};
        });
      },
      restart: () => {
        set((state) => {
          if (state.phase === "playing" || state.phase === "ended") {
            return { phase: "ready" };
          }
          return {};
        });
      },
      end: () => {
        set((state) => {
          if (state.phase === "playing") {
            return { phase: "ended" };
          }
          return {};
        });
      },
    };
  })
);

export default store;
