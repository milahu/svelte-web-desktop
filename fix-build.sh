#! /bin/sh

outDir=docs

workboxCount=$(ls $outDir/workbox-????????.js 2>/dev/null | wc -l)

if [[ "$workboxCount" != "1" ]]
then
echo "workboxCount is $workboxCount should be 1"
ls $outDir/workbox-????????.js 2>/dev/null | cat
exit 1
fi

workboxName=$(basename $outDir/workbox-????????.js .js)

echo "workboxName = $workboxName"

mv -v $outDir/workbox-????????.js $outDir/workbox.js

echo patching $outDir/sw.js
sed -i "s|$workboxName|workbox|g" $outDir/sw.js
