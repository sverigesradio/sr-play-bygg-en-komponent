"use client";

export default function Home() {
  return (
    <div className="grid grid-flow-col gap-5 p-5">
      <div />
    </div>
  );
}

const mock = {
  id: 2339459,
  title: "Bret Easton Ellis – i huvudet på ”Mr American psycho”",
  description:
    "Bret Easton Ellis anser sig ha blivit svartlistad av både litteraturvärlden och av Hollywood –&nbsp;med 30 år emellan. P3 ID möter kultförfattaren som skildrar sex, knark och seriemördare.",
  publisher: "Caroline Pouron",
  publishDate: "2024-02-12T04:45:00Z",
  links: {
    self: "https://open-api.sr.se/v3/episodes/2339459",
    html: "https://sverigesradio.se/avsnitt/bret-easton-ellis",
  },
  program: {
    id: 5343,
    name: "P3 ID",
    links: { self: "https://open-api.sr.se/v3/programs/5343" },
  },
  branding: { name: "P3", color: "#19a972" },
  language: { code: "sv", direction: "ltr" },
  image: {
    title: "Bret Easton Ellis gestikulerar med händerna",
    photographer: "Heiko Junge/TT/SR",
    variants: [
      {
        url: "https://static-cdn.sr.se/images/5343/9b98b124-8140-44c1-8aab-6cd88ca93b6d.jpg?preset=2048x1152",
        width: 2048,
        height: 1152,
      },
      {
        url: "https://static-cdn.sr.se/images/5343/9b98b124-8140-44c1-8aab-6cd88ca93b6d.jpg?preset=1024x576",
        width: 1024,
        height: 576,
      },
      {
        url: "https://static-cdn.sr.se/images/5343/9b98b124-8140-44c1-8aab-6cd88ca93b6d.jpg?preset=512x288",
        width: 512,
        height: 288,
      },
      {
        url: "https://static-cdn.sr.se/images/5343/9b98b124-8140-44c1-8aab-6cd88ca93b6d.jpg?preset=256x144",
        width: 256,
        height: 144,
      },
    ],
  },
  audios: [
    {
      duration: 4607,
      type: "pod",
      variants: [
        {
          type: "mp3",
          url: "https://sverigesradio.se/topsy/ljudfil/srapi/9203599.mp3",
          bitrate: 128000,
        },
      ],
    },
    {
      duration: 4607,
      type: "broadcast",
      variants: [
        {
          type: "aac",
          url: "https://sverigesradio.se/topsy/ljudfil/srapi/9203595-hi.html5desktop",
          bitrate: 192000,
        },
        {
          type: "aac",
          url: "https://sverigesradio.se/topsy/ljudfil/srapi/9203595.html5desktop",
          bitrate: 96000,
        },
        {
          type: "aac",
          url: "https://sverigesradio.se/topsy/ljudfil/srapi/9203595-lo.html5desktop",
          bitrate: 32000,
        },
      ],
    },
  ],
};
