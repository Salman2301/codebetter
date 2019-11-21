setTimeout(()=>{
    console.log("hi")
try {
//     require.config({ paths: { 'vs': 'lib/vs' }});
//     require(['vs/editor/editor.main'], function() {
//         var editor = monaco.editor.create(document.getElementById('container-monaco'), {
//             value: [
//                 'function x() {',
//                 '\tconsole.log("Hello world!");',
//                 '}'
//             ].join('\n'),
//             language: 'javascript'
//         });
//     });
    
}
catch(e) {
    console.log("ERROR : " ,e)
}

},3000)
