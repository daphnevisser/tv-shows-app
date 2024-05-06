## Building and running the project

To start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To build the project:

```bash
npm install
npm run build
```

## Tools I used

I used Next.js, Typescript and Tailwind to match Estrid's tech stack.

## Why did I use them?

I've worked with Next.js in a previous job and enjoyed it then. I went for the latest version (14+) and decided to use the app router and server components as much as possible, as I always enjoy learning and using new features. I made sure to do all API data fetching in server components (even for the search input by syncing it with the url query) which was a fun way to solve things.

Typescript is something I always use and almost consider a "standard" in the industry today. It's just so much nicer to work with a typed TV-show compared to guessing what props are available.

Tailwind was a more new experience, which I have mostly heard a lot of but not used a lot in the past. In this case using the utility classes probably slowed me down compared to just writing my own CSS, but I'm sure I'd see more advantages with time.

## Did you leave anything out?

I didn't do the optional part, due to time constraints and wanting to focus on doing tho core parts well. I also couldn't find an obvious way to do it for all endpoints in the TVMaze API other than for scheduling.

I didn't spend a lot of time on visual design and styling (as per the instructions). Just some basics to make it look ok. I put more focus into functionality rather than visuals.
