import type { Footer, Header, Settings, Social } from "../../payload/payload-types";
import { FOOTER_QUERY, HEADER_QUERY, SETTINGS_QUERY, SOCIALS_QUERY } from "../_graphql/globals";
import { GRAPHQL_API_URL } from "./shared";

export async function fetchSettings(): Promise<Settings> {
  if (!GRAPHQL_API_URL) throw new Error("NEXT_PUBLIC_SERVER_URL not found");

  try {
    return await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: SETTINGS_QUERY,
      }),
    })
      ?.then(res => {
        if (!res.ok) throw new Error("Error fetching doc");
        return res.json();
      })
      ?.then(res => {
        if (res?.errors) throw new Error(res?.errors[0]?.message || "Error fetching settings");
        return res.data?.Settings;
      });
  } catch (err: unknown) {
    throw new Error("Error fetching settings")
  }
}

export async function fetchHeader(): Promise<Header> {
  if (!GRAPHQL_API_URL) throw new Error("NEXT_PUBLIC_SERVER_URL not found");

  try {
    return await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: HEADER_QUERY,
      }),
    })
      ?.then(res => {
        if (!res.ok) throw new Error("Error fetching doc");
        return res.json();
      })
      ?.then(res => {
        if (res?.errors) throw new Error(res?.errors[0]?.message || "Error fetching header");
        return res.data?.Header;
      });
  } catch (err: unknown) {
    throw new Error("Error fetching header");
  }
}

export async function fetchFooter(): Promise<Footer> {
  if (!GRAPHQL_API_URL) throw new Error("NEXT_PUBLIC_SERVER_URL not found");

  try {
    return await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: FOOTER_QUERY,
      }),
    })
      .then(res => {
        if (!res.ok) throw new Error("Error fetching doc");
        return res.json();
      })
      ?.then(res => {
        if (res?.errors) throw new Error(res?.errors[0]?.message || "Error fetching footer");
        return res.data?.Footer;
      });
  } catch (err: unknown) {
    throw new Error("Error fetching footer");
  }
}

export async function fetchSocials(): Promise<Social> {
  if (!GRAPHQL_API_URL) throw new Error("NEXT_PUBLIC_SERVER_URL not found");

  try {
    return await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: SOCIALS_QUERY,
      }),
    })
      ?.then(res => res.json())
      ?.then(res => {
        if (res?.errors) throw new Error(res?.errors[0]?.message || "Error fetching socials");
        return res.data?.Social;
      });
  } catch (err: unknown) {
    throw new Error("Error fetching socials");
  }
}

export const fetchGlobals = async (): Promise<{
  settings: Settings
  header: Header
  footer: Footer
  socials: Social
}> => {
  // initiate requests in parallel, then wait for them to resolve
  // this will eagerly start to the fetch requests at the same time
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const settingsData = fetchSettings();
  const headerData = fetchHeader();
  const footerData = fetchFooter();
  const socialsData = fetchSocials();

  const [settings, header, footer, socials]: [Settings, Header, Footer, Social] = await Promise.all(
    [await settingsData, await headerData, await footerData, await socialsData],
  );

  return {
    settings,
    header,
    footer,
    socials,
  };
};
