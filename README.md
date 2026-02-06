# hackncsu-landing

Official landing page for Hack_NCState, accessible at <https://hackncstate.org>.

## Setup Instructions

**Prerequisites: Have Node.js and npm installed on your machine.** Ideally also install the tailwind plugin for your code editor.

### Tailwind CLI

Install tailwind CLI (tailwind is basically a lightweight framework that makes CSS less of a pain. I recommend [reading the docs](https://tailwindcss.com/docs/styling-with-utility-classes)).
```bash
npm install tailwindcss @tailwindcss/cli
```

Then run tailwindcss in watch mode (so it rebuilds on changes)
```bash
npx tailwindcss -i ./src/style.css -o ./src/output.css --watch
```

Now when you change any HTML or CSS files, the output.css file will be updated automatically with the new styles. Don't forget to link the output.css file in your HTML files if you create new ones.

### Live Server

Lastly I suggest installing Live Server or another plugin that allows you to view your HTML files in a browser and see changes live as you edit them. Make sure to set the root directory it uses to the `src` folder so it serves the HTML files correctly (that's where the website code is). If you're using VS Code just install the "Live Server" extension and add this to `.vscode/settings.json`:

```json
{
  "liveServer.settings.root": "/src"
}
```

Now when you launch live server (go live button on the bottom right) it'll let you test the website in your browser and see changes live as you edit the HTML and CSS files.

Anytime you are developing, have both of these services running. **Please develop in a separate branch and open a pull request when you are ready to merge your changes into the main branch.** Cloudflare Pages will give you a preview link for your pull request so you can see how your changes look.

## Deployment

Cloudflare Pages (the website host) should automatically run tailwindcss and deploy changes when you merge into the main branch. No additional steps needed.
