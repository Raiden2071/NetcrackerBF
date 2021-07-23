export interface Annoucnment {
  id: number,
  title: String,
  description: String,
  owner: number,
  date: Date,
  address: String,
  likes?: number
}