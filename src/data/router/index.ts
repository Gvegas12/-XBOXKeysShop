import React from "react";
import About from "../../view/components/pages/About";
import Cart from "../../view/components/pages/Cart";
import Categories from "../../view/components/pages/Categories";
import CoinsMarket from "../../view/components/pages/CoinsMarket";
import Market from "../../view/components/pages/Market";
import News from "../../view/components/pages/News";
import User from "../../view/components/pages/User";
import {
  ABOUT_ROUTE,
  CART_ROUTE,
  CATEGORIES_ROUTE,
  COINS_ROUTE,
  MARKET_ROUTE,
  NEWS_ROUTE,
  USER_ROUTE,
} from "./utils/utils.publicRoutes";

type RouteDataArray = Array<{
  path: string;
  Component: React.FC;
}>;

export const publicRoutes: RouteDataArray = [
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: NEWS_ROUTE,
    Component: News,
  },
  {
    path: CART_ROUTE,
    Component: Cart,
  },
  {
    path: MARKET_ROUTE,
    Component: Market,
  },
  {
    path: COINS_ROUTE,
    Component: CoinsMarket,
  },
  {
    path: CATEGORIES_ROUTE,
    Component: Categories,
  },
];

export const authRoutes: RouteDataArray = [
  {
    path: USER_ROUTE,
    Component: User,
  },
];
