import type { CollectionEntry } from "astro:content";
import Fuse from "fuse.js";
import { useRef, useState } from "react";
import SearchButton from "./SearchButton";
import NoResults from "./NoResults";

interface SearchProps {
  searchList: CollectionEntry<"blog">[];
}

const options = {
  keys: ["data.title", "data.description", "slug", "body"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

export default function Search({ searchList }: SearchProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  return (
    <>
      <SearchButton dialogRef={dialogRef} />
      <dialog
        ref={dialogRef}
        className="invisible absolute -z-10 flex w-full scale-0 flex-col items-center gap-4 text-balance rounded-lg bg-surface p-6 text-onSurface shadow-2xl transition-transform backdrop:bg-[black] backdrop:opacity-70 open:visible open:scale-100 max-sm:mt-4 md:w-1/2 2xl:w-1/3"
      >
        <div className="flex w-full items-center gap-4">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="h-12 w-full rounded-full bg-surface-high pl-8 text-xl transition-colors focus:outline-none"
          />
          <form method="dialog" onSubmit={() => setQuery("")}>
            <button className="underline hover:no-underline">close</button>
          </form>
        </div>
        {posts.length ? (
          <ul>
            {posts.map((post) => (
              <li
                key={post.data.title}
                className="flex flex-col rounded-sm bg-surface-high p-6 text-base transition-colors hover:bg-surface-highest"
              >
                <a href={`/${post.data.author}/${post.slug}`}>
                  <h2 className="mb-2 text-2xl md:text-4xl">
                    {post.data.title}
                  </h2>
                  {post.data.description}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <NoResults />
        )}
      </dialog>
    </>
  );
}
