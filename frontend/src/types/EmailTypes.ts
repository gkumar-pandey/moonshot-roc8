export interface Email {
  id: string;
  from: {
    email: string;
    name: string;
  };
  date: number;
  subject: string;
  short_description: string;
  isRead?: boolean;
  isFavorite?: boolean;
}

export interface EmailBodyType {
  id: string;
  body: string;
}

export type FilterEmailsType = (
  emails: Email[] | [],
  filterBy: string
) => Email[];
