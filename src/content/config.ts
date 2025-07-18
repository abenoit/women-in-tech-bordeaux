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

const events = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date(),
      platform: z.enum(["Meetup", "LinkedIn"]).optional(),
      link: z.string().optional(),
      place: z.string().optional(),
      placeLink: z.string().optional(),
      talks: z
        .array(
          z.object({
            title: z.string(),
            speakers: z.string(),
            description: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

export const collections = {
  organizers,
  events,
};
