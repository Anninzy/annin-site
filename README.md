# Fresh project

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### TODO

- [] May want to switch to % instead of REM for sizing. It's getting annoying needing to specify sizes for mobile and desktop seperately.

### Notes

May need to run:

```
deno install npm:prettier
deno install npm:prettier-plugin-tailwindcss
```

I put them in the import map, but I don't think it will be cached if it's never actually imported.

Run:

```
deno run -A npm:prettier . --write
```

To format all files
