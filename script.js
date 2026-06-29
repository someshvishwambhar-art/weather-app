async function translateText() {

    const text = document.getElementById("inputText").value.trim();
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    if(text === ""){
        alert("Please enter some text.");
        return;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("outputText").value =
        data.responseData.translatedText;

    }catch(error){

        document.getElementById("outputText").value =
        "Translation failed.";

        console.log(error);

    }

}