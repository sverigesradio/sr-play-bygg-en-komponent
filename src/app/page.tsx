"use client";

export default async function Home() {
  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      <div>...content</div>
    </div>
  );
}

const mock = {
  id: 2447659,
  title: "Muhammad Ali – mästaren och motståndet",
  description:
    "Han är proffsboxaren som blev en obeveklig symbol för motstånd. Med sin charm och sina snabba fötter slog han knockout på en hel värld, men hans värsta fight skulle inte bli i ringen.",
  program: {
    id: 5343,
    name: "P3 ID",
  },
  audiopreference: "pod",
  audiopriority: "mp3",
  audiopresentation: "format",
  imageurl:
    "https://static-cdn.sr.se/images/5343/2e99637b-9cb4-4f33-9cba-c04d0f208d1f.jpg?preset=api-default-square",
  listenpodfile: {
    title: "Muhammad Ali – mästaren och motståndet",
    description: "",
    filesizeinbytes: 66527209,
    program: {
      id: 5343,
      name: "P3 ID",
    },
    availablefromutc: "/Date(1724643900000)/",
    duration: 4157,
    publishdateutc: "/Date(1724643900000)/",
    id: 9452911,
    url: "https://sverigesradio.se/topsy/ljudfil/srapi/9452911.mp3",
    statkey: "/app/avsnitt/p3[k(164)]/p3 id[p(5343)]/[e(2447659)]",
  },
};
