export default async function Page({ params }: any) {
  let category = null;
  const data = await (
    await fetch(`https://v2.jokeapi.dev/joke/${params.id}?format=json`, {})
  ).json();

  return <>{JSON.stringify(data)}</>;
}
