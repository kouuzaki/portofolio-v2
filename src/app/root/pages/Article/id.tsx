import { useParams } from "react-router-dom";

export default function ArticleID() {
  const { id } = useParams();
  return <div>ArticleID : {id}</div>;
}
