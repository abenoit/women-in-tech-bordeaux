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
      platform: z.enum(["Meetup", "LinkedIn"]),
      link: z.string(),
      place: z.string().optional(),
    }),
});

export const collections = {
  organizers,
  events,
};
