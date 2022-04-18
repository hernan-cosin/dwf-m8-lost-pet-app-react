import { atom, selector } from "recoil";

export const paramState = atom({
  key: "paramState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const resultState = selector({
  key: "searchResults", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const query = get(paramState);

    if (query) {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + query,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      return data.results;
    } else {
      return [];
    }
  },
});

export const itemParam = atom({
  key: "itemParam",
  default: "",
});

export const itemResult = selector({
  key: "itemResult",
  get: async ({ get }) => {
    const query = get(itemParam);

    if (query) {
      const res = await fetch("https://api.mercadolibre.com/items/" + query, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } else {
      return [];
    }
  },
});
