import type { AfterReadHook } from "payload/dist/collections/config/types";

export const populateContributors: AfterReadHook = async ({ doc, req: { payload } }) => {
  if (doc?.contributors) {

    const contributorDocs = await Promise.all(
      doc.contributors.map(
        async contributor =>
          await payload.findByID({
            collection: "contributors",
            id: typeof contributor === "object" ? contributor?.id : contributor,
            depth: 0,
          }),
      ),
    );

    doc.populatedContributors = contributorDocs.map(contributorDoc => ({
      id: contributorDoc.id,
      name: contributorDoc.name,
      role: contributorDoc.role,
    }));

  }
  return doc;
};
