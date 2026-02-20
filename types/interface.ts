import type { DropdownProps } from "@heroui/dropdown";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import type { User } from "@/lib/redux/api";
import type { Space } from "@/lib/redux/api/space-api";

export interface ContentCarouselItemProps {
  backgroundImage: string;
  heading: string;
  content: string;
  gameLogo: string;
  onClick: () => void;
}

export interface FeatureCardProps {
  className?: string;
  heading: string;
  content: string;
  onClick: () => void;
  buttonText: string;
  buttonIcon: LucideIcon;
}

export interface AuthButtonProps {
  children: ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  startContent: LucideIcon;
  className?: string;
}

interface DropdownItemType {
  key: string;
  label: string;
  href?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  className?: string;
  onPress?: () => void;
  target?: string;
}

export interface DropdownSectionType {
  title: string;
  items: DropdownItemType[];
}

export interface ReusableDropdownProps {
  sections: DropdownSectionType[];
  triggerComponent?: React.ReactNode;
  dropdownProps?: Partial<DropdownProps>;
}

interface FormData {
  username: string;
  email: string;
  currency: string;
  image?: File | string;
}

export interface GetStartedFormProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setValue: UseFormSetValue<FormData>;
}

export interface SpacesInterface {
  id: number;
  name: string;
  description: string;
  url: string;
  isActive: boolean;
  category: string;
  adminId: number;
  imageData: string | null;
  bannerData: string | null;
}

export interface SpaceInterface {
  space: {
    id: number;
    name: string;
    description: string;
    url: string;
    isActive: boolean;
    category: string;
    adminId: number;
    imageData: string | null;
    bannerData: string | null;
    admin: {
      id: number;
      username: string;
      email: string;
      imageData: string | null;
    };
  };
}

export interface FileWithPreview extends File {
  preview: string;
  base64: string;
}

export interface FeedItemProps {
  id: number;
  content: string;
  likesCount: number;
  imageData: string;
  status: string;
  authorId: number;
  spaceId: number;
  username: string;
  isLoading: boolean;
  spaceImageData: string | null;
  deletePostHandler: (id: number) => void;
  likePostHandler: (id: number) => void;
  editPostHandler: (id: number, content: string, imageData: string) => void;
}

export interface Region {
  key: string;
  label: string;
}

export interface SetContentProps {
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export interface Team {
  id: number;
  name: string;
  imageData: string | null;
  adminId: number;
}

interface Members {
  id: 3;
  username: "MrKick";
  imageData: null;
}

export interface UserTeam {
  id: number;
  name: string;
  adminId: number;
  imageData: string | null;
  bannerData: string | null;
  members: Members[];
}
export interface TeamInterface {
  teams: UserTeam[];
}

export interface Friend {
  id: number;
  username: string;
  email: string;
  imageData: string | null;
  bannerData: string | null;
  type: string;
}

export interface UserFriends {
  allFriends: Friend[];
}

export interface FriendRequests {
  id: number;
  username: string;
  email: string;
  imageData: string | null;
  FriendRequest: {
    status: string;
  };
}

export interface FriendRequestInterface {
  user: {
    id: number;
    username: string;
    email: string;
    imageData: string | null;
    bannerData: string | null;
    sentRequests: FriendRequests[];
    receivedRequests: FriendRequests[];
  };
  friendRequests: FriendRequests[];
}

interface TeamDetails {
  id: number;
  name: string;
  adminId: number;
  imageData: string | null;
  bannerData: string | null;

  members: User[];
}

export interface TeamDetailsInterface {
  team: TeamDetails;
}

export interface Tournament {
  id: number;
  playersCount: number;
  status: string;
  name: string;
  tournamentTime: string;
  spaceId: number;
  gameId: number;
  hostedById: number;
  space: Space;
}

export interface TournamentResponseInterface {
  tournament: Tournament;
  message?: string;
}

export interface Game {
  id: number;
  name: string;
  imageUrl: string;
  bannerUrl: string;
}

export interface Games {
  games: Game[];
}
