var name = "Daniyal";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.split());

function titlecase(string){
    var sentences = string.toLowerCase().split(" ");
    for(var i = 0; i< sentences.length; i++){
        sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
    }

    document.write(sentences.join(" "));
    return sentences;
}
titlecase("welcome in javascript");