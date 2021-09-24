import { live_data } from "../../data/live_data";

export default function handler(req, res) {
  res.status(200).json(live_data);
}
