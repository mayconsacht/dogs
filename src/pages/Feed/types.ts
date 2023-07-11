export type Comment = {
  comment_ID: string;
  comment_post_id: string;
  comment_author: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_author_IP: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_content: string;
  comment_karma: string;
};

export type Photo = {
  id: string;
  acessos: string;
  author: string;
  date: Date;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
  comments: Comment[];
};

export type Post = {
  photo: Photo;
  comments: Comment[];
};
