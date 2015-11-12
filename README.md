# Installable Web App

Meteor Package that allows your app to be installed as web app on the home screen of your device.

- Includes `appcache` package that caches the application code on the device for offline use.
- Includes `ground:db` package that gives you the possibility to cache data (collections) for offline use.

## Installing

1. `meteor add q42:installable-web-app`
2. Create homescreen icons in different sizes
3. Add a `/public/manifest.json` file, containing information on your app. Below is an example.

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

*supported from Chrome version M39, release date 2014-11-12*

When visiting this website, the user can tap the ... at the top right and select "add to homescreen". The icon you provided will be used on the homescreen. When the homescreen icon is tapped, your web app will open with a fixed orientation and without address bar (if you specified this in your manifest.json).

### iOS

...

## Roadmap

*These features are yet to be built*

- Support for Chrome version M31-M38 (release date 2013-11-12), works with `meta` tags in the header instead of a manifest file.
- Expose a variable that tells if the user is using a browser or a homescreen link. That way a user can be asked to install to homescreen.
- While we're at it, why not also add a manifest file for Firefox OS? https://developer.mozilla.org/en-US/Apps/Build/Building_apps_for_Firefox_OS
