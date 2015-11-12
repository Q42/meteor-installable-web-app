# Installable Web App

Meteor Package that allows your app to be installed as web app on the home screen of your device.

## Installing

`meteor add q42:installable-web-app`

Add a `/public/manifest.json` file, containing information on your app. Here's an example:

```
{
  "short_name": "Installable Web App",
  "name": "Application that's installable on your home screen",
  "icons": [
    {
      "src": "icons/96.png", // this links to /public/icons/96.png
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "icons/144.png", // this links to /public/icons/144.png
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icons/192.png", // this links to /public/icons/192.png
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "start_url": "/index.html?webapp=true",
  // to remove the address bar at the top
  "display": "standalone",
  // to fix the orientation. `portrait`, `landscape` or `null`
  "orientation": "portrait"
}
```

## Usage by end-users

### Android

When visiting this website, the user can tap the ... at the top right and select "add to homescreen". The icon you provided will be used on the homescreen. When the homescreen icon is tapped, your web app will open with a fixed orientation and without address bar (if you specified this in your manifest.json).

### iOS

...

## Roadmap

*These features are yet to be installed*

To display a notification for a user to install this webapp, use

`{{> webAppRequestInstallation}}`
