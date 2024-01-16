import { createCookie } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const defaultLayout = createCookie("react-resizable-panels:layout");
export const defaultCollapsed = createCookie("react-resizable-panels:collapsed");