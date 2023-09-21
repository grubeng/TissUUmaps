# TissUUmaps - Interactive visualization and quality assessment of large-scale spatial omics data

![TissUUmaps banner](https://github.com/TissUUmaps/TissUUmapsCore/blob/master/misc/design/logo-github-2443-473.png)

[TissUUmaps](https://tissuumaps.github.io/) is a browser-based tool for fast visualization and exploration of millions of data points overlaying a tissue sample. TissUUmaps can be used as a web service or locally in your computer, and allows users to share regions of interest and local statistics.

## Documentation

For installation and usage, read the [TissUUmaps online documentation](https://tissuumaps.github.io/TissUUmaps-docs/).

For demo and tutorials, see the [TissUUmaps web page](https://tissuumaps.github.io).

## Web development

# Start the flask server

Follow the instructions provided in the [TissUUmaps online documentation](https://tissuumaps.github.io/TissUUmaps-docs/) to start up the flask server.

# Install dependencies

- Navigate to `tissuumaps/static`
- Install dependencies with `npm install`

# Generate a build using webpack

- Build with `npm run build`
- Build with `npm run dev` if you want webpack to recompile on every file change

# Navigate to [TissUUmaps](http://127.0.0.1:5000/)

Refresh the page after each build to see the latest changes