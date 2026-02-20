import { ZonedDateTime } from "@internationalized/date";
import { z } from "zod";

export const SignUpFormSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 character"),
});

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 character"),
});

export const UserInfoSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  currency: z.string().min(1, "Currency is required"),
  image: z.union([z.instanceof(File), z.string()]).optional(),
});

export const SpaceFormSchema = z.object({
  spaceName: z.string().min(5),
  description: z.string().optional(),
  category: z.string().optional(),
  spaceUrl: z
    .string()
    .min(1, "Space is required")
    .regex(
      /^[a-zA-Z][a-zA-Z0-9_]*[a-zA-Z0-9]$/,
      "URL must start with a letter, may contain letters, numbers, and underscores, and cannot end with an underscore."
    ),
});

export const ContactSalesSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  workEmail: z.string().email(),
  workTitle: z.string().min(1, "Work Title is required"),
  country: z.string(),
  companyName: z.string().min(1, "Company name is required."),
  companySize: z.string(),
  companyType: z.string(),
  anythingElse: z.string().optional(),
  forMarketingOptIn: z.boolean().optional(),
});

export const FeedSchema = z.object({
  content: z.string().min(1, "Content is required."),
});

export const SpaceAboutSettingsSchema = z.object({
  name: z.string().min(1, "Name is required."),
  description: z.string().optional(),
  category: z.string().min(1, "Category is required"),
});

export const TournamentCreateSchema = z.object({
  tournamentName: z
    .string({ message: "Tournament name is required." })
    .min(3, "Min length 3"),
  gameRegion: z.string({ message: "Region is required" }),
  teams: z.string().min(1, "Team selection is required"),
  tournamentDate: z.custom<ZonedDateTime>(),
});

export const CreateTeamSchema = z.object({
  name: z.string().min(3),
});

export const TeamAboutSchema = z.object({
  description: z.string().min(1, "Description is required"),
  videoUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  // socialNetwork: z.array(
  //   z.object({
  //     socialLink: z.string().url(),
  //   })
  // ),
  teamContactEmail: z.string().optional(),
  location: z.string().optional(),
});

export const GameGeneralSettingsSchema = z.object({
  teamSize: z.string(),
  substitutes: z.string(),
  coaches: z.string(),
  allowFreeAgents: z.boolean(),
  headReadiesTeam: z.boolean(),
  showUnlistedTournaments: z.boolean(),
  tournamentChat: z.boolean(),
  customPrice: z.string(),
});
