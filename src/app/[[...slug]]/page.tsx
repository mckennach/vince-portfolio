import { getRoute } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { PageDocument, ProjectDocument } from "@/prismicio-types";
import { components } from "@/slices";
import AboutTemplate from "@/src/components/about-template/about-template";
import ContactTemplate from "@/src/components/contact-template/contact-template";
import ProjectTemplate from "@/src/components/project-template";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { type Metadata } from "next";
import { Suspense } from "react";
export default async function RootPage({
  params,
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const routeSlug = Array.isArray(slug) ? slug : slug ? [slug] : [];
  const route = getRoute(routeSlug);
  const client = createClient();
  const page = slug
    ? await client.getByUID(route.documentType, route.uid)
    : await client.getSingle("home");

  return (
    <Suspense fallback={null}>
      {route.documentType === "project" ? (
        <ProjectTemplate {...(page as ProjectDocument<string>)}>
          <SliceZone slices={page.data.slices} components={components} />
        </ProjectTemplate>
      ) : route.uid === "about" ? (
        <AboutTemplate {...(page as PageDocument<string>)} />
      ) : route.uid === "contact" ? (
        <ContactTemplate {...(page as PageDocument<string>)} />
      ) : (
        <SliceZone slices={page.data.slices} components={components} />
      )}
    </Suspense>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const routeSlug = Array.isArray(slug) ? slug : slug ? [slug] : [];
  const route = getRoute(routeSlug);
  const client = createClient();

  // Get Page Type
  const page = slug
    ? await client.getByUID(route.documentType, route.uid)
    : await client.getSingle("home");

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}
