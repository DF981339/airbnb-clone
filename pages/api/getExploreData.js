import { explore_data } from "../../data/explore_data";

export default function handler(req, res) {
  res.status(200).json(explore_data);
}
