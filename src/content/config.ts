import { z, defineCollection } from "astro:content";

const organizers = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      jobPosition: z.string(),
      pictureName: image(),
    }),
});

const recommendations = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      items: z
        .array(
          z.object({
            title: z.string(),
            author: z.string(),
            consultLink: z
              .object({
                link: z.string(),
                verb: z.enum([
                  "Acheter",
                  "Lire",
                  "Consulter",
                  "Écouter",
                  "Suivre",
                ]),
                platform: z.string(),
              })
              .optional(),
            thumbnail: z.string(),
            recommendedBy: z.object({
              name: z.string(),
              picture: z.string(),
            }),
          }),
        )
        .optional(),
    }),
});

const events = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      date: z.date(),
      link: z.string().optional(),
      pictures: z
        .object({
          folder: z.string(),
          images: z
            .array(z.object({ src: z.string(), alt: z.string() }))
            .optional(),
        })
        .optional(),
      place: z.string().optional(),
      placeLink: z.string().optional(),
      platform: z.enum(["Meetup", "LinkedIn"]).optional(),
      sponsorLogo: z.string(),
      title: z.string(),
      talks: z
        .array(
          z.object({
            title: z.string(),
            speakers: z.array(
              z.object({
                name: z.string(),
                picture: z.string(),
                link: z.string().optional(),
              }),
            ),
            description: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

export const collections = {
  events,
  organizers,
  recommendations,
};
