# Matthew Thompson's Personal Site

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

When I decided to rebuild my personal website, I saw it as an opportunity to really think about how I build a project. A new project is really exciting, as it gives me the chance to implement what I have learned since the last one, from the beginning. And there is a lot that I have learned.

I'm using this project not only to implement those lessons, but to document them. My goal is to create a reference I can use to make starting the next new projects faster and better planned. And since this is GitHub, I'd be thrilled if others found value in it as well. Others, possibly, including you.

## Roadmap

One of my favorite code jokes comes from a sticker I found in some corner of the Internet:

> Weeks of programming can save you hours of planning

Of course, overplanning a project limits the ability to adapt to the needs of the project that you didn't anticipate. But in my experience, giving in to the desire to jump straight into the implementation can end up trapping you in an architecture that takes a long, long time to get out of.

So learning from the wisdom of the joke, I'm starting by laying out a 10,000-foot view roadmap for where I want the project to go. Starting with a roadmap may feel like a dreaded waterfall product development strategy, but really, what I want is to create a framework that can that an agile development strategy can be successful in.

Here's my plan:

1. Define the initial requirements
    - I fully expect what I end up doing to be different that what I thought I was going to do at first, but having an initial direction helps me order my ideas into a general path that I can follow - and wander from
2. Set up a solid foundation
    - Even though it gets harder with each passing day, I'm going to resist diving into the implementation until I have set myself up for success with the tooling and documentation I know allows a project to thrive
3. Go wild
    - With a general idea of where I'm going and a solid foundation to support me along the way, I'm going to do what I love: building, fixing, ideating, and repeating

The quicker I get those first two done, the sooner I can get going on building. So let's get started.

## Initial Requiremements

I'm going to start by articularing the overall goal of the project.

As my personal site, I want to be able to express who I am, not only in the site's content, but in the process of creating it. That'll be the initial requirement:

> Use the site's repository to tell the story of who I am as a developer, as much as the content of the site

Some criteria I'll use to measure the success for this requirement:

-   Well documented development practices
-   Changelogs that tell the story of how the project came to be
-   Organization of tasks into Issues, changes into PRs, and if I decide to get fancy with it, plans into Projects

Once I know what I'm going to do, I want to show my passion for implementing tasks well. That'll make for a good second requirement:

> Take the time to be the best developer I can be through the practices I use

I love using criteria to know how well I'm achieving a goal; some criteria for this requirement will be:

-   Robust testing
-   Readbility and commenting
-   Encapsulating responsibilities, separating concerns, and defining contracts between components

Finally, I want to show not only who I am as a developer, but who I am as a person. My last initial requirement is:

> Let the site reflect who I am, not just how I develop

I think the criteria for this one are pretty fun:

-   Be constructively weird
-   Make the audience laugh
-   Do with the project what I try to do in life: create joy

See, just by taking half an hour to figure out what I actually want to do with this project (despite having to resist that urge to dive into the code) I feel like I not only know much better the goal of this, I identified some goals I hadn't put into words yet.

I'd say it was better to figure that out with a half hour now than with some huge amount of time if I'd done it later. That's a pride point for the day.

## Laying the Foundation (Project Setup)

Alright, now I know what I want to do. But before I do it, I'm going to set up some tools and write down some practices I want to use to do it as best as I can.

### Tooling

Forgive my nerd moment here, but I love tooling. Finding those hacks that make writing the code easier and faster brings me almost as much joy as writing the code itself. Here's some of the tools I love that I'm going to use in this project:

-   [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) (using [Commitizen CLI](https://github.com/commitizen/cz-cli))

    I love the pattern of standardized commit messages in a `git log`, so I'm going to enforce a commit message format (and making generating them easier, customized to the style I like, with [cz-customizable](https://github.com/leoforfree/cz-customizable))

-   [Semantic Versioning](https://semver.org/) (using [Standard Version](https://github.com/conventional-changelog/standard-version))

    Version names that mean something other than the developer's whim at the moment a release is cut? All done in one command? Yes please. I'm going to use this to communicate what's in each version of my site, so that anyone can know when I add something new, fix something broken, or break something better.

-   Pretty, consistent code (with [TSLint](https://palantir.github.io/tslint/) for linting and [Prettier](https://prettier.io/) for formatting)

    No matter the opinion, I like an opinionated code base when it comes to linting and formatting. And since this is my project, I get to use my own opinions when setting the rules that make my code pretty to me. Plus, having the tools to make sure I hold myself to that standard makes holding that line all that much easier. Pretty awesome.

-   [VSCode](https://code.visualstudio.com/) (and its lovely Extensions)

    People have their favorite IDEs, but from all I've tried, VSCode has stolen my heart. I can make it look pretty to me, but that's nothing compared the Extensions that integrate with the other tools to allow for those beautiful moments when things just work and I go "wow". Some of my favorites:

    -   [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - because sometimes, being able to see the Git history is just so nice
    -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) - sure, I'll let my IDE lint and format my code without me having to do anything, why not
    -   [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) - what's that package's most recent version? Let's hover and find out; that's pretty cool to me

### Development Practices

I resisted them for years, but I finally learned: there's a reason all those best practices exist. Here's some that I'm going to proactively use in this project:

-   Test Driven Development

    This is one I've come to love, even though it does add that buffer between me and the implementation. But at the end of the day, I like knowing that what I wrote works (and didn't break anything)

-   In-code documentation (commenting)

    Sure, I know what my code does, but how can I expect you to get how cool it is if I don't show you why it is? I'm going to really push myself to document my stuff, so that you can see why what I write is as cool as I think it is

## And now, let's code

At this point, I (and hopefully you) know what I want to do, and how I plan to do it. So let's do it.

If you've made it this far, thanks for letting me tell the story of how I'm going to tell my story. Here's to the adventure ahead.
