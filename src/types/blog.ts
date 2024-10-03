import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export type IPostFilters = {
  publish: string;
};

export type IPostHero = {
  title: string;
  coverUrl: string;
  createdAt?: IDateValue;
  author?: { name: string; avatarUrl: string };
};

export type IPostComment = {
  id: string;
  name: string;
  avatarUrl: string;
  message: string;
  postedAt: IDateValue;
  users: { id: string; name: string; avatarUrl: string }[];
  replyComment: {
    id: string;
    userId: string;
    message: string;
    tagUser?: string;
    postedAt: IDateValue;
  }[];
};

export type IPostItem = {
  id: string;
  name?:string;
  itemPath?:string;
  title: string;
  slug:string;
  articleSection?:string;
  keyword?:string;
  tags: string[];
  publish: string;
  content: string;
  coverUrl: string;
  coverUrlAlt: string;
  category:any;
  metaTitle: string;
  totalViews: number;
  totalShares: number;
  description: string;
  totalComments: number;
  totalFavorites: number;
  metaDescription: string;
  coverUrlOpenGraph:string;
  coverUrlOpenGraphAlt:string;
  createdAt: IDateValue;
  author: { name: string; avatarUrl: string };
};
