---
title: 'Success: multer - sharp - cloudinary to store, transform and upload images.'
date: 2019-08-25T20:41:48.908Z
description: 'Solution to store and upload compressed images. '
---
Hi again!

Sorry I didn't post an update on my problem developing a nodejs web app.

This was my issue:

> I want my web app to use images uploaded from users and with the crazy resolutions from phones nowadays we can get an idea of how bad it can get. 😅
>
> So my plan is this:
>
> Multer to handle the upload.
>
> Tinypng to compress the images
>
> Cloudinary to serve and store the compressed images
>
> All of this will be tied on a Mongo, Express and Node package.

At the end I was able to handle my problem with that approach but instead of using Tinypng to compress my images, I used Sharp in conjunction with Multer. 

```
customStorage.prototype._handleFile = function _handleFile(req, file, cb) {

this.getDestination(req, file, function(err, path) {

if (err) return cb(err);

const outStream = fs.createWriteStream(path);

const transform = sharp().resize({

width: 200,

height: 200,

fit: sharp.fit.cover,

position: sharp.strategy.entropy

});

file.stream.pipe(transform).pipe(outStream);

outStream.on('error', cb);

outStream.on('finish', function() {

cb(null, {

path: 'images/' + nodePath.basename(path),

size: outStream.bytesWritten

});

});

});

};

```

Multer was setup as a temp folder to store the transformed images, then I uploaded those images to Cloudinary and after a minute deleted the temp image from the local storage.

With that I'm not using the heroku local storage and my images live in the cloud. 

I'll post a bit how I worked with cloudinary later.

Thanks a lot for reading.
