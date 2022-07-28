export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '21600000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '5432a9dc24dc25d33',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '21600000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '5432a9dc24dc25d33',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.155851,
    formattedSearchTime: '0.16',
    totalResults: '21600000',
    formattedTotalResults: '21,600,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Hello Home - Google My Maps',
      htmlTitle: '<b>Hello</b> Home - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=z-jveZ_8YUyw.kUpffW-b97vo&hl=en',
      displayLink: 'www.google.com',
      snippet:
        'Open full screen to view more. Hello Home. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML. 15,886 views.',
      htmlSnippet:
        'Open full screen to view more. <b>Hello</b> Home. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML. 15,886 views.',
      cacheId: 'MTvOT7Jmd8wJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=z-jveZ_8YUyw...hl...',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=z-jveZ_8YUyw...hl...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFVYEcdC4WVPjUhe2-I2o7x2imFZbDzW5jSai2soZveBCgMSjKHnAPLrI',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1yDMLzVJ-YDtXY-XLFsA63qZhxDs&hl=en',
            name: 'Hello Home - Google My Maps',
            description: 'Hello Home',
            url: 'https://www.google.com/maps/d/viewer?mid=1yDMLzVJ-YDtXY-XLFsA63qZhxDs&hl=en',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1yDMLzVJ-YDtXY-XLFsA63qZhxDs&hl=en',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1yDMLzVJ-YDtXY-XLFsA63qZhxDs%26hl%3Den',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello Home - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello Home',
            'og:title': 'Hello Home - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1yDMLzVJ-YDtXY-XLFsA63qZhxDs&hl=en',
            'og:description': 'Hello Home',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1yDMLzVJ-YDtXY-XLFsA63qZhxDs&hl=en',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1yDMLzVJ-YDtXY-XLFsA63qZhxDs&hl=en',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello Google Earth!',
      htmlTitle: '<b>Hello</b> Google Earth!',
      link: 'http://www.google.com/earth/plugin/examples/helloearth/index.html',
      displayLink: 'www.google.com',
      snippet: 'Hello, Earth!',
      htmlSnippet: '<b>Hello</b>, Earth!',
      cacheId: '-fqOqA_cjuMJ',
      formattedUrl:
        'www.google.com/earth/plugin/examples/helloearth/index.html',
      htmlFormattedUrl:
        'www.google.com/earth/plugin/examples/<b>hello</b>earth/index.html',
    },
    {
      kind: 'customsearch#result',
      title: 'Say Hello and Introduce Yourself - Google Public Data Explorer',
      htmlTitle:
        'Say <b>Hello</b> and Introduce Yourself - Google Public Data Explorer',
      link: 'https://www.google.com/publicdata/explore?ds=ene89huqop5hk_',
      displayLink: 'www.google.com',
      snippet:
        "Activity in the 'Say Hello and Introduce Yourself' forum in the Global Classroom. More info ». Last updated: Feb 5, 2012.",
      htmlSnippet:
        'Activity in the &#39;Say <b>Hello</b> and Introduce Yourself&#39; forum in the Global Classroom. More info ». Last updated: Feb 5, 2012.',
      cacheId: '0BnuvV7sJ2kJ',
      formattedUrl:
        'https://www.google.com/publicdata/explore?ds=ene89huqop5hk_',
      htmlFormattedUrl:
        'https://www.google.com/publicdata/explore?ds=ene89huqop5hk_',
      pagemap: {
        metatags: [
          {
            fragment: '!',
            'com.google.dataspaces.frontend.publicview.client.explorepageprodmodule_i18n::gwt:property':
              'baseUrl=/publicdata/gwt/',
          },
        ],
        thing: [
          {
            name: 'Say Hello and Introduce Yourself',
            description:
              "Activity in the 'Say Hello and Introduce Yourself' forum in the Global Classroom Data from Nord Anglia Education Powered by Google",
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello Neighbour Network - Google My Maps',
      htmlTitle: '<b>Hello</b> Neighbour Network - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=1ce0Klqo_qyapmthaNlm4xD2H2WM&hl=en',
      displayLink: 'www.google.com',
      snippet:
        'Open full screen to view more. Hello Neighbour Network. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML. 6,159 views.',
      htmlSnippet:
        'Open full screen to view more. <b>Hello</b> Neighbour Network. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML. 6,159 views.',
      cacheId: 'gjQFlo4yXD4J',
      formattedUrl: 'https://www.google.com/mymaps/viewer?mid=1ce0Klqo...hl=en',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1ce0Klqo...hl=en',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdydVIsVbCOnuZ-lvMyGnFF7h_-gwrpJLVZV1Qw7KlFHdvLlQhQyvUwxM',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1ce0Klqo_qyapmthaNlm4xD2H2WM&hl=en',
            name: 'Hello Neighbour Network - Google My Maps',
            description: 'Hello Neighbour Network',
            url: 'https://www.google.com/maps/d/viewer?mid=1ce0Klqo_qyapmthaNlm4xD2H2WM&hl=en',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1ce0Klqo_qyapmthaNlm4xD2H2WM&hl=en',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1ce0Klqo_qyapmthaNlm4xD2H2WM%26hl%3Den',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello Neighbour Network - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello Neighbour Network',
            'og:title': 'Hello Neighbour Network - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1ce0Klqo_qyapmthaNlm4xD2H2WM&hl=en',
            'og:description': 'Hello Neighbour Network',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1ce0Klqo_qyapmthaNlm4xD2H2WM&hl=en',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1ce0Klqo_qyapmthaNlm4xD2H2WM&hl=en',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google',
      htmlTitle: 'Google',
      link: 'http://www.google.com/',
      displayLink: 'www.google.com',
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        'Search the world&#39;s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...',
      cacheId: 'zhool8dxBV4J',
      formattedUrl: 'www.google.com/',
      htmlFormattedUrl: 'www.google.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc',
            width: '320',
            height: '112',
          },
        ],
        metatags: [
          {
            referrer: 'origin',
            viewport: 'width=device-width,minimum-scale=1.0',
            google: 'notranslate',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello Neighbor - Redmond, OR - Google My Maps',
      htmlTitle: '<b>Hello</b> Neighbor - Redmond, OR - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=zh_iROBYb3mk.kvpR1VqvZom8&hl=en',
      displayLink: 'www.google.com',
      snippet:
        'Banner locations for the Hello Neighbor project. helloneighborproject.org.',
      htmlSnippet:
        'Banner locations for the <b>Hello</b> Neighbor project. helloneighborproject.org.',
      cacheId: 'ynurT8rgYLgJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zh_iROBYb3mk...hl...',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zh_iROBYb3mk...hl...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtEox0lIuua0gl1ZZ3JHtAIcc6tHH10qtwjBB0oxmDd-qWEkLukA8E9ETE',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1oaeZgBSmEaKL0i_SZq_rAVT4YFw&hl=en',
            name: 'Hello Neighbor - Redmond, OR - Google My Maps',
            description:
              'Banner locations for the Hello Neighbor project. helloneighborproject.org',
            url: 'https://www.google.com/maps/d/viewer?mid=1oaeZgBSmEaKL0i_SZq_rAVT4YFw&hl=en',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1oaeZgBSmEaKL0i_SZq_rAVT4YFw&hl=en',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1oaeZgBSmEaKL0i_SZq_rAVT4YFw%26hl%3Den',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello Neighbor - Redmond, OR - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description':
              'Banner locations for the Hello Neighbor project.\nhelloneighborproject.org',
            'og:title': 'Hello Neighbor - Redmond, OR - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1oaeZgBSmEaKL0i_SZq_rAVT4YFw&hl=en',
            'og:description':
              'Banner locations for the Hello Neighbor project.\nhelloneighborproject.org',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1oaeZgBSmEaKL0i_SZq_rAVT4YFw&hl=en',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1oaeZgBSmEaKL0i_SZq_rAVT4YFw&hl=en',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title:
        "Hello, I'm a Tourist Map: Light Art Festivals in Europe (and other ...",
      htmlTitle:
        '<b>Hello</b>, I&#39;m a Tourist Map: Light Art Festivals in Europe (and other ...',
      link: 'https://www.google.com/maps/d/u/1/viewer?ll=51.30843138154402%2C10.527885050000009&z=5&mid=1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2',
      displayLink: 'www.google.com',
      snippet:
        'Number: The month the festival starts Black: Year round event / exhibition White: Dates not recurring or not known Note: Covid has turned dates topsy turvy ...',
      htmlSnippet:
        'Number: The month the festival starts Black: Year round event / exhibition White: Dates not recurring or not known Note: Covid has turned dates topsy turvy&nbsp;...',
      cacheId: '4h_KwHowmrgJ',
      formattedUrl:
        'https://www.google.com/maps/d/u/1/viewer?ll=51...z=5&mid...',
      htmlFormattedUrl:
        'https://www.google.com/maps/d/u/1/viewer?ll=51...z=5&amp;mid...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgtKQ-TyA2SDubHEGw5tDwGoT3mdnGgrdw93mV8UM4YDSDsECts7OxrM',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2',
            name: "Hello, I'm a Tourist Map: Light Art Festivals in Europe (and other continents) - Google My Maps",
            description:
              'Number: The month the festival starts Black: Year round event / exhibition White: Dates not recurring or not known Note: Covid has turned dates topsy turvy Background info: https://helloimatourist....',
            url: 'https://www.google.com/maps/d/viewer?mid=1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title':
              "Hello, I'm a Tourist Map: Light Art Festivals in Europe (and other continents) - Google My Maps",
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description':
              'Number: The month the festival starts \nBlack: Year round event / exhibition\nWhite: Dates not recurring or not known\nNote: Covid has turned dates topsy turvy\n\nBackground info: https://helloimatourist.blogspot.com/2019/10/light-art-festivals-in-europe-and-close.html',
            'og:title':
              "Hello, I'm a Tourist Map: Light Art Festivals in Europe (and other continents) - Google My Maps",
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2',
            'og:description':
              'Number: The month the festival starts \nBlack: Year round event / exhibition\nWhite: Dates not recurring or not known\nNote: Covid has turned dates topsy turvy\n\nBackground info: https://helloimatourist.blogspot.com/2019/10/light-art-festivals-in-europe-and-close.html',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1PGhqcNFfTMmblF4CHNmFFih6_qaTHKs2',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: "Hello It's Me - YouTube",
      htmlTitle: '<b>Hello</b> It&#39;s Me - YouTube',
      link: 'https://www.google.com/sorry/index?continue=https://m.youtube.com/watch%3Fv%3DIfbaUWA32_E&q=EgRC-UAQGLCRl48GIhBIbpR5MROdLPrJTIgIRXKtMgM-PmM',
      displayLink: 'www.google.com',
      snippet:
        "Feb 17, 2017 ... Provided to YouTube by Epic/LegacyHello It's Me · The Isley BrothersLive It Up℗ 1974 Epic Records, a division of Sony Music ...",
      htmlSnippet:
        'Feb 17, 2017 <b>...</b> Provided to YouTube by Epic/LegacyHello It&#39;s Me · The Isley BrothersLive It Up℗ 1974 Epic Records, a division of Sony Music&nbsp;...',
      cacheId: 'sdxSufFNBPIJ',
      formattedUrl:
        'https://www.google.com/sorry/index?continue=https://m.youtube...',
      htmlFormattedUrl:
        'https://www.google.com/sorry/index?continue=https://m.youtube...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7J1ZHZMAr4ZAdmvSXW6hs03G2II0p9oGTV2wXFD9_-XcvEByJ1ghHTuz',
            width: '300',
            height: '168',
          },
        ],
        imageobject: [
          {
            width: '1280',
            url: 'https://i.ytimg.com/vi/IfbaUWA32_E/maxresdefault.jpg',
            height: '720',
          },
        ],
        person: [
          {
            name: 'The Isley Brothers - Topic',
            url: 'http://www.youtube.com/channel/UC19gd7AQcPkrcFH8w8BYO7w',
          },
        ],
        metatags: [
          {
            'og:image': 'https://i.ytimg.com/vi/IfbaUWA32_E/maxresdefault.jpg',
            'twitter:app:url:iphone':
              'vnd.youtube://www.youtube.com/watch?v=IfbaUWA32_E&feature=applinks',
            'twitter:app:id:googleplay': 'com.google.android.youtube',
            'theme-color': 'rgba(255, 255, 255, 0.98)',
            'og:image:width': '1280',
            'twitter:card': 'player',
            'og:site_name': 'YouTube',
            'twitter:url': 'https://www.youtube.com/watch?v=IfbaUWA32_E',
            'twitter:app:url:ipad':
              'vnd.youtube://www.youtube.com/watch?v=IfbaUWA32_E&feature=applinks',
            'al:android:package': 'com.google.android.youtube',
            'twitter:app:name:googleplay': 'YouTube',
            title: "Hello It's Me",
            'al:ios:url':
              'vnd.youtube://www.youtube.com/watch?v=IfbaUWA32_E&feature=applinks',
            'twitter:app:id:iphone': '544007664',
            'og:description':
              "Provided to YouTube by Epic/LegacyHello It's Me · The Isley BrothersLive It Up℗ 1974 Epic Records, a division of Sony Music EntertainmentReleased on: 1974-09...",
            'al:ios:app_store_id': '544007664',
            'twitter:image':
              'https://i.ytimg.com/vi/IfbaUWA32_E/maxresdefault.jpg',
            'twitter:player': 'https://www.youtube.com/embed/IfbaUWA32_E',
            'twitter:player:height': '720',
            'twitter:site': '@youtube',
            'og:video:type': 'text/html',
            'og:video:height': '720',
            'og:video:url': 'https://www.youtube.com/embed/IfbaUWA32_E',
            'og:type': 'video.other',
            'twitter:title': "Hello It's Me",
            'al:ios:app_name': 'YouTube',
            'og:title': "Hello It's Me",
            'og:image:height': '720',
            'twitter:app:id:ipad': '544007664',
            'al:web:url':
              'http://www.youtube.com/watch?v=IfbaUWA32_E&feature=applinks',
            'og:video:secure_url': 'https://www.youtube.com/embed/IfbaUWA32_E',
            'og:video:tag': 'The Isley Brothers',
            'og:video:width': '960',
            'al:android:url':
              'vnd.youtube://www.youtube.com/watch?v=IfbaUWA32_E&feature=applinks',
            'fb:app_id': '87741124305',
            'twitter:app:url:googleplay':
              'https://www.youtube.com/watch?v=IfbaUWA32_E',
            'twitter:app:name:ipad': 'YouTube',
            'twitter:description':
              "Provided to YouTube by Epic/LegacyHello It's Me · The Isley BrothersLive It Up℗ 1974 Epic Records, a division of Sony Music EntertainmentReleased on: 1974-09...",
            'og:url': 'https://www.youtube.com/watch?v=IfbaUWA32_E',
            'twitter:player:width': '960',
            'al:android:app_name': 'YouTube',
            'twitter:app:name:iphone': 'YouTube',
          },
        ],
        videoobject: [
          {
            embedurl: 'https://www.youtube.com/embed/IfbaUWA32_E',
            playertype: 'HTML5 Flash',
            isfamilyfriendly: 'true',
            uploaddate: '2017-02-17',
            description:
              "Provided to YouTube by Epic/LegacyHello It's Me · The Isley BrothersLive It Up℗ 1974 Epic Records, a division of Sony Music EntertainmentReleased on: 1974-09...",
            videoid: 'IfbaUWA32_E',
            url: 'https://www.youtube.com/watch?v=IfbaUWA32_E',
            duration: 'PT5M33S',
            unlisted: 'False',
            name: "Hello It's Me",
            paid: 'False',
            width: '960',
            regionsallowed:
              'AE,AR,AS,AT,AU,AW,BA,BE,BG,BH,BM,BO,BR,BY,CA,CH,CL,CO,CR,CY,CZ,DE,DK,DO,DZ,EC,EE,EG,ES,FI,FR,GB,GF,GP,GR,GT,GU,HK,HN,HR,HU,ID,IE,IL,IN,IS,IT,JO,JP,KE,KR,KW,KY,LB,LI,LT,LU,LV,MA,MK,MP,MQ,MT,MX,MY,NC...',
            genre: 'Music',
            interactioncount: '10508911',
            channelid: 'UC19gd7AQcPkrcFH8w8BYO7w',
            datepublished: '2017-02-17',
            thumbnailurl:
              'https://i.ytimg.com/vi/IfbaUWA32_E/maxresdefault.jpg',
            height: '720',
          },
        ],
        cse_image: [
          {
            src: 'https://i.ytimg.com/vi/IfbaUWA32_E/maxresdefault.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: "I Have Made Mistakes - The Oh Hello's - YouTube",
      htmlTitle: 'I Have Made Mistakes - The Oh <b>Hello&#39;s</b> - YouTube',
      link: 'https://www.google.com/sorry/index?continue=https://www.youtube.com/watch%3Fv%3DczFgKa7YcIQ%26t%3D0s&q=EgRC-UHtGMvyro4GIhAGYqOoaG8dQu2MHmBx1kVMMgI-Yw',
      displayLink: 'www.google.com',
      snippet:
        "Oct 30, 2012 ... Original music written, composed, performed, recorded, and produced by The Oh Hello'sI have made mistakes, I continue to make themthe ...",
      htmlSnippet:
        'Oct 30, 2012 <b>...</b> Original music written, composed, performed, recorded, and produced by The Oh <b>Hello</b>&#39;sI have made mistakes, I continue to make themthe&nbsp;...',
      formattedUrl:
        'https://www.google.com/sorry/index?continue=https://www...com/...',
      htmlFormattedUrl:
        'https://www.google.com/sorry/index?continue=https://www...com/...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSJU9LD04AsrRKNwiS-kxqVPJOwqP2YclVX66M5z-xobGBDf_6NUvTrAc',
            width: '168',
            height: '94',
          },
        ],
        imageobject: [
          {
            width: '480',
            url: 'https://i.ytimg.com/vi/czFgKa7YcIQ/hqdefault.jpg',
            height: '360',
          },
        ],
        person: [
          {
            name: 'The Oh Hellos',
            url: 'http://www.youtube.com/user/locomotioncommotion',
          },
        ],
        metatags: [
          {
            'og:image': 'https://i.ytimg.com/vi/czFgKa7YcIQ/hqdefault.jpg',
            'twitter:app:url:iphone':
              'vnd.youtube://www.youtube.com/watch?v=czFgKa7YcIQ&feature=applinks',
            'twitter:app:id:googleplay': 'com.google.android.youtube',
            'theme-color': 'rgba(255,255,255,0.98)',
            'og:image:width': '480',
            'twitter:card': 'player',
            'og:site_name': 'YouTube',
            'twitter:url': 'https://www.youtube.com/watch?v=czFgKa7YcIQ',
            'twitter:app:url:ipad':
              'vnd.youtube://www.youtube.com/watch?v=czFgKa7YcIQ&feature=applinks',
            'al:android:package': 'com.google.android.youtube',
            'twitter:app:name:googleplay': 'YouTube',
            title: "I Have Made Mistakes - The Oh Hello's",
            'al:ios:url':
              'vnd.youtube://www.youtube.com/watch?v=czFgKa7YcIQ&feature=applinks',
            'twitter:app:id:iphone': '544007664',
            'og:description':
              "Original music written, composed, performed, recorded, and produced by The Oh Hello'sI have made mistakes, I continue to make themthe promises I've made, I c...",
            'al:ios:app_store_id': '544007664',
            'twitter:image': 'https://i.ytimg.com/vi/czFgKa7YcIQ/hqdefault.jpg',
            'twitter:player': 'https://www.youtube.com/embed/czFgKa7YcIQ',
            'twitter:player:height': '360',
            'twitter:site': '@youtube',
            'og:video:type': 'text/html',
            'og:video:height': '360',
            'og:video:url': 'https://www.youtube.com/embed/czFgKa7YcIQ',
            'og:type': 'video.other',
            'twitter:title': "I Have Made Mistakes - The Oh Hello's",
            'al:ios:app_name': 'YouTube',
            'og:title': "I Have Made Mistakes - The Oh Hello's",
            'og:image:height': '360',
            'twitter:app:id:ipad': '544007664',
            'al:web:url':
              'http://www.youtube.com/watch?v=czFgKa7YcIQ&feature=applinks',
            'og:video:secure_url': 'https://www.youtube.com/embed/czFgKa7YcIQ',
            'og:video:tag': "The Oh Hello's",
            'og:video:width': '480',
            'al:android:url':
              'vnd.youtube://www.youtube.com/watch?v=czFgKa7YcIQ&feature=applinks',
            'fb:app_id': '87741124305',
            'twitter:app:url:googleplay':
              'https://www.youtube.com/watch?v=czFgKa7YcIQ',
            'twitter:app:name:ipad': 'YouTube',
            'twitter:description':
              "Original music written, composed, performed, recorded, and produced by The Oh Hello'sI have made mistakes, I continue to make themthe promises I've made, I c...",
            'og:url': 'https://www.youtube.com/watch?v=czFgKa7YcIQ',
            'twitter:player:width': '480',
            'al:android:app_name': 'YouTube',
            'twitter:app:name:iphone': 'YouTube',
          },
        ],
        videoobject: [
          {
            embedurl: 'https://www.youtube.com/embed/czFgKa7YcIQ',
            playertype: 'HTML5 Flash',
            isfamilyfriendly: 'true',
            uploaddate: '2012-10-30',
            description:
              "Original music written, composed, performed, recorded, and produced by The Oh Hello'sI have made mistakes, I continue to make themthe promises I've made, I c...",
            videoid: 'czFgKa7YcIQ',
            url: 'https://www.youtube.com/watch?v=czFgKa7YcIQ',
            duration: 'PT4M45S',
            unlisted: 'False',
            name: "I Have Made Mistakes - The Oh Hello's",
            paid: 'False',
            width: '480',
            regionsallowed:
              'AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...',
            genre: 'Music',
            interactioncount: '1609196',
            channelid: 'UCwfDOdW0FOILPpwJBcA62wQ',
            datepublished: '2012-10-30',
            thumbnailurl: 'https://i.ytimg.com/vi/czFgKa7YcIQ/hqdefault.jpg',
            height: '360',
          },
        ],
        cse_image: [
          {
            src: 'https://i.ytimg.com/vi/sOv0hENoQnE/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBABOb23RlbsWnDOzAVQ-2dvzx7ag',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Docs: Online Document Editor | Google Workspace',
      htmlTitle: 'Google Docs: Online Document Editor | Google Workspace',
      link: 'https://www.google.com/docs/about/',
      displayLink: 'www.google.com',
      snippet:
        'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
      htmlSnippet:
        'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
      cacheId: 'B4Skq4M5akkJ',
      formattedUrl: 'https://www.google.com/docs/about/',
      htmlFormattedUrl: 'https://www.google.com/docs/about/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwELdtonBh-4WwJ2BtD4mygtEC5WJBYy4XjXbIvY4YA92EZHCyMfTD',
            width: '36',
            height: '36',
          },
        ],
        metatags: [
          {
            referrer: 'no-referrer',
            'og:image':
              'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
            'twitter:title':
              'Google Docs: Online Document Editor | Google Workspace',
            'og:type': 'website',
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
            'twitter:url': 'https://twitter.com/googledocs',
            'twitter:description':
              'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            'og:title':
              'Google Docs: Online Document Editor | Google Workspace',
            'og:url': 'https://www.facebook.com/GoogleDocs/',
            'twitter:creator': 'Google',
            'og:description':
              'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            'twitter:image':
              'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
          },
        ],
        cse_image: [
          {
            src: 'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
          },
        ],
      },
    },
  ],
};
