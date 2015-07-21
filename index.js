/**
 * Author  : Ramesh R
 * Created : 7/21/2015 10:27 PM
 * ----------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * ----------------------------------------------------------------------
 */

var dicomjs = require('dicomjs'),
    assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    //sampleDcmPath = 'E:/Git/Github/dicomviewer/samples/MR-MONO2-12-shoulder'
sampleDcmPath = 'E:/Git/Github/big/000000000005A3D8'
    ;

fs.readFile(sampleDcmPath, function (err, buffer) {
    console.time('Process_Time');
    dicomjs.parse(buffer, function (err, dcmData) {
        //console.log(err);
        console.timeEnd('Process_Time');
        console.time('Process_Time2');

        console.log('Process complete');
        if (!err) {
            console.log('Meta Elements..');
            for (var key in dcmData.metaElements) {
                console.log('   tag: ', key, ', value: ', dcmData.metaElements[key].value);
            }

            console.log('Standard elements..');
            for (var key in dcmData.dataset) {
                console.log('   tag: ', key, ', value: ', dcmData.dataset[key].value);
            }

            console.log('Parsing complete..');
        }

        console.timeEnd('Process_Time2');
    });
});
 