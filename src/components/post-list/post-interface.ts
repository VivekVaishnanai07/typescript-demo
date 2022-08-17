export interface OuterModel {
  data: InnerModel[]
  source: object
}

export interface InnerModel {
  id: number;
  likes: number;
  Nation: string;
  tags: string;
  text: string;
  owner: {
    firstName: string
    lastName: string
  }
}