export interface Screen {
  id?: number;
  name: string;
  description: string;
  picture_url: string;
  user_id: number;
  price_per_day: number;
  resolution_height: number;
  resolution_width: number;
  type: string;
}
