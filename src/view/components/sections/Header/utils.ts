import { HOME_ROUTE } from "../../../../data/router/utils/utils.publicRoutes";

type HeaderNavItemData = {
  text: string;
  path: string;
};

export const HEADER_NAV_LIST: HeaderNavItemData[] = [
  {
    text: "Поддержка",
    path: HOME_ROUTE,
  },
  {
    text: "Магазин",
    path: HOME_ROUTE,
  },
];
