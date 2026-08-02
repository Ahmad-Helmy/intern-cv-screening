# `src/services` — talking to the API

One file per resource. Each one exports plain `async` functions that return a
promise — no react-query, no global store. A component calls them from a
`useEffect` (or an event handler) and keeps the result in `useState`.

`api.ts` is finished and working; you should not need to change it. The other
four are **placeholders**: each has one GET and one POST written out end to end
as the pattern to copy, and `TODO` stubs for the rest.

## The rules

1. Always import the shared instance: `import api from "./api"`.
2. Services return **data**, never the axios response. Unwrap `response.data`
   here so components never see axios.
3. Type the call — `api.get<Something>(...)` — using the types you write in
   `src/types/api`. Until you do, everything is `unknown` and the compiler will
   (correctly) refuse to let you render it.
4. No UI in this folder: no JSX, no formatting, no badge mapping. That belongs
   in the page-level `*-service.tsx` files you already have.
5. Let errors reject. Catch them in the component so it can show a message.

## Calling one from a component

```tsx
const [candidates, setCandidates] = useState<CandidateListItem[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  let cancelled = false;

  getCandidates(internshipId, { sortBy: "score" })
    .then((data) => {
      if (!cancelled) setCandidates(data);
    })
    .catch(() => {
      if (!cancelled) setError("Could not load candidates.");
    })
    .finally(() => {
      if (!cancelled) setIsLoading(false);
    });

  return () => {
    cancelled = true;
  };
}, [internshipId]);
```

The `cancelled` flag matters: React 19 StrictMode mounts every component twice
in dev, so without it you will see the request fire twice and you risk setting
state after unmount.
