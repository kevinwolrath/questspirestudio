export function SpireArt() {
  return <svg className="spire-art" viewBox="0 0 640 620" role="img" aria-labelledby="spire-title">
    <title id="spire-title">A wizard’s tower above a colourful, moonlit mountain landscape</title>
    <defs>
      <linearGradient id="sky" x2="0" y2="1"><stop stopColor="#252553"/><stop offset="1" stopColor="#9361aa"/></linearGradient>
      <linearGradient id="stone" x2="1" y2=".3"><stop stopColor="#7371b8"/><stop offset=".5" stopColor="#b8a7e2"/><stop offset="1" stopColor="#5d5794"/></linearGradient>
      <linearGradient id="roof" x2="1" y2="1"><stop stopColor="#65e0d5"/><stop offset="1" stopColor="#286e9a"/></linearGradient>
      <linearGradient id="island" x2="0" y2="1"><stop stopColor="#4d528d"/><stop offset="1" stopColor="#161d3e"/></linearGradient>
      <radialGradient id="glow"><stop stopColor="#f6b5e9" stopOpacity=".5"/><stop offset="1" stopColor="#b793fa" stopOpacity="0"/></radialGradient>
    </defs>
    <circle cx="330" cy="280" r="270" fill="url(#glow)"/>
    <circle cx="473" cy="111" r="54" fill="#f3e8ff"/><circle cx="492" cy="94" r="49" fill="#29284f"/>
    <g fill="#c7b9f4">{[[72,125],[152,65],[239,109],[381,50],[553,203],[92,299],[515,308],[199,195],[420,195]].map(([x,y])=><path key={x} d={`M${x} ${y-5}l2 4 5 1-5 2-2 5-1-5-5-2 5-1Z`}/>)}</g>
    <path d="M0 445 96 322 176 403 265 274 409 415 504 303 640 444V620H0Z" fill="#363b73"/>
    <path d="m218 338 47-64 60 78-58-29-23 21Z" fill="#9c8dc4" opacity=".6"/>
    <path d="M0 493 103 413 210 479 373 375 496 467 584 396 640 445V620H0Z" fill="#28365e"/>
    <ellipse cx="331" cy="540" rx="224" ry="31" fill="#111b37" opacity=".35"/>
    <g className="spire-island">
      <path d="m160 446 62 98 37-16 64 66 40-83 41 15 74-80Z" fill="url(#island)"/>
      <path d="m153 447 64-33 174-9 93 40-66 35-192-3Z" fill="#488d91"/>
      <path d="m153 447 73 19 192 3 66-24-66 35-192-3Z" fill="#29636f"/>
      <path d="m290 459 19 23 39-7 17-20-23-8Z" fill="#b5b0cb"/>
      <path d="M268 435V226h114v209Z" fill="url(#stone)"/>
      <path d="M255 238h140v-24H255Z" fill="#d2bce9"/>
      <path d="m247 215 78-143 78 143Z" fill="url(#roof)"/>
      <path d="m325 72 0 143h78Z" fill="#205675" opacity=".5"/>
      <path d="M325 72V43m0 0 42 13-42 9" fill="#ee95c3" stroke="#d3b3ec" strokeWidth="3"/>
      <path d="M238 442V331h55v111M372 442V312h51v130" fill="url(#stone)"/>
      <path d="m226 334 40-77 40 77Zm134-20 37-76 39 76Z" fill="url(#roof)"/>
      <g fill="#ffe8b6" stroke="#605687" strokeWidth="5"><path d="M308 283v-24a17 17 0 0 1 34 0v24Z"/><path d="M308 351v-24a17 17 0 0 1 34 0v24Z"/><path d="M254 377v-13a10 10 0 0 1 20 0v13Z"/><path d="M387 358v-13a10 10 0 0 1 20 0v13Z"/></g>
      <path d="M305 443v-39a21 21 0 0 1 42 0v39Z" fill="#27274e" stroke="#cab1df" strokeWidth="5"/>
      <path d="M275 300h21m50 0h30m-90 61h18m45 13h25m-95 34h16m53-170h20" stroke="#706399" strokeWidth="4"/>
      <g fill="#2d596b"><path d="m184 435 17-61 19 61Zm237 12 20-75 22 75Z"/><path d="m207 437 12-43 13 43Z"/></g>
      <path d="M180 452q100-34 144-5" fill="none" stroke="#8ce0cb" strokeWidth="2" opacity=".5"/>
    </g>
    <path d="M110 239q202-131 384 65" fill="none" stroke="#af94ec" strokeWidth="1" strokeDasharray="3 9" opacity=".6"/>
    <g fill="#a2f0df"><circle cx="110" cy="239" r="5"/><circle cx="494" cy="304" r="4"/></g>
    <path d="M0 590q130-78 253-12t387-23v65H0Z" fill="#141e38"/>
  </svg>;
}
