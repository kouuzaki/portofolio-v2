import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About/About"));
const Article = lazy(() => import("./Article/Article"));
const ArticleID = lazy(() => import("./Article/id"));

export { Home, About, Article, ArticleID };
