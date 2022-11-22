import Link from "next/link";

export default async function Home() {
  const data = await fetch("https://v2.jokeapi.dev/categories?format=json");
  const json = await data.json();

  return (
    <div>
      <div>Home</div>
      <div style={{ display: "flex", gap: "8px" }}>
        {json.categories.map((category: any) => (
          <Link key={category} href={`/jokes/${category}`}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
