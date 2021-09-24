import { discover_data } from "../../data/discover_data";

export default function handler(req, res) {
  res.status(200).json(discover_data);
}
