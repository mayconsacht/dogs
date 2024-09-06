export type Comment = {
  id: string;
  postId: string;
  author: string;
  authorUrl: string;
  authorIp: string;
  date: string;
  dateGmt: string;
  content: string;
  karma: string;
};

export type Photo = {
  id: string;
  totalHits: string;
  author: string;
  date: Date;
  age: string;
  weight: string;
  img: string;
  title: string;
  totalComments: string;
  comments: Comment[];
};

export type Post = {
  photo: Photo;
  comments: Comment[];
};
