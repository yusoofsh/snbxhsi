export default function Page({
  params,
}: Readonly<{ params: { article: string } }>) {
  return <div>My Post: {params.article}</div>;
}
