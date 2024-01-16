import type { MetaFunction } from "@remix-run/node";
import IndexPage from "~/components/page/index";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix ShadcnUI Examples" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <IndexPage />;
}
