# Face-Detection

This is a machine learning-based facial recognition system that opens the home medicine cabinet or cleaning cupboard only for verified persons.
This ensures that small children or unauthorised persons cannot access medicines or cleaning products.

Our solution for this is a camera that is built into the cabinet and trained by the users themselves.
In this way, the person is identified and the cupboard door opens or does not open accordingly.

_The code is based on several examples._
* _[How To Make Real Time Face Detection Using JavaScript - codeSTACKr](https://www.youtube.com/watch?v=h_Dj_gVXao4)_ 
    * Of these, mainly the structure was used.
* _[Face Recognition from WebCam and Video Sources using JavaScript - Caffeinated Nerds](https://www.youtube.com/watch?v=h_Dj_gVXao4)_
    * Of these, the `main.js` was used.<br>

---

Das ist eine, auf Machine Learning basierte Gesichtserkennung, die den häuslichen Medizinschrank oder Putzschrank nur für verifizierte Personen öffnet.
Somit ist die Sicherheit gewährleistet, dass kleine Kinder oder unbefugte Personen nicht an Medikamente oder Putzmittel gelangen.

Unsere Lösung dafür ist eine Kamera, die in den Schrank eingebaut ist und von den Nutzern selbst trainiert wird.
So wird die Person identifiziert und dementsprechend öffnet sich die Schranktür oder eben nicht.

_Der Code basiert auf mehreren Beispielen._
* _[How To Make Real Time Face Detection Using JavaScript - codeSTACKr](https://www.youtube.com/watch?v=h_Dj_gVXao4)_ 
    * Hiervon wurde hauptsächlich die Strucktur verwendet
* _[Face Recognition from WebCam and Video Sources using JavaScript - Caffeinated Nerds](https://www.youtube.com/watch?v=h_Dj_gVXao4)_
    * Hiervon wurde die `main.js` verwendet.
<br>

## Usage / Benutzung

First of all, it should be determined whether you have equipped your cabinet with a camera or whether one needs to be retrofitted. 
(This means that a camera is needed in any case).
<br>
To use the code, you must first download or clone the code.
To do this, press the green button that says **CODE**. Either open it in *GitHub Desktop* or download the file as a *.zip file*.
<br>
Now you need to open the code, in your preferred development environment.
<br>

In order to be able to use the code, you must create a new subfolder in the *labeled_images* folder by **right-clicking** and then clicking **New Folder**.  Name this folder after the person who is to be recognised. Load at least *two images* of this person, in which the face is clearly recognisable and unedited, into the subfolder you have just created.
<br>
In order for the code to recognise the new model, you must now change the name in the *main.js* in line 63 `if(cleanLabel == "Steve") {`. So replace `Steve` with the name of the subfolder you just created. It is also important that in line 146 `for(let i=1; i<=2; i++) {` the 2 is replaced by the number of total images. This means that if you have loaded two pictures into the folder you have just created, the total number of pictures is 4, as there are already two pictures in the example folder 'Steve'. 
You can repeat this as many times as you like, depending on how many people you want to include. It is important that the folder names are listed in line 63 and that the number of pictures in line 146 is correct. 
<br>
You are almost there, the only thing left to do is **right click** on the `index.html` and then click on **Open with Live Server**. Now the programme starts automatically and opens it in your browser. (It is important that it is Google Chrome, other browsers are usually not supported!)
<br>

---

Zuerst sollte festgestellt werden, dass Sie Ihren Schrank mit einer Kamera ausgestattet haben oder ob eine nachgerüstet werden muss.
(Das bedeutet, es wird auf jeden Fall eine Kamera benötigt)
<br>
Um den Code verwenden zu können müssen Sie sich als Erstes den Code herunterladen oder klonen.
Dafür müssen Sie auf den grünen Button, auf dem **CODE** steht, drücken. Entweder Sie öffnen es sich dann in *GitHub Desktop* oder Sie downloaden sich die Datei als *.zip Datei*.
<br> 
Nun müssen Sie den Code, in dem von Ihnen bevorzugten Entwicklungsumgebung, öffnen. 
<br>

* Um jetzt den Code verwenden zu können müssen Sie im Ordner *labeled_images* einen neuen Unterordner erstellen, indem Sie **Rechtsklick** klicken und dann **New Folder** anklicken. Diesen benennen Sie nach der Person, die erkannt werden soll. Von dieser Person laden Sie mindestens *zwei Bilder*, bei denen das Gesicht gut erkennbar und unbearbeitet ist, in den eben erstellten Unterordner.
<br>

* Dass der Code das neue Model erkennen kann, müssen Sie jetzt in die *main.js* in Zeile 63 'if(cleanLabel == "Steve") {' den Namen ändern. Also 'Steve' mit dem Namen des, soeben erstellten, Unterordners austauschen.
* Ebenso ist es wichtig, dass Sie in Zeile 146 'for(let i=1; i<=2; i++) {' die 2 durch die Anzahl der gesamten Bilder ersetzt wird. Das bedeutet, wenn Sie nun in Ihren, gerade erstellten Ordner zwei Bilder geladen haben, dann ist die Gesamtanzahl 4. Da in dem Beispielordner 'Steve' bereits zwei Bilder vorhanden sind.
* Das können Sie je nachdem wie viele Personen Sie mit einbinden wollen beliebig wiederholen. Dabei ist wichtig, dass die Ordnernamen in Zeile 63 mit aufgelistet sind und dass die Anzahl der Bilder in Zeile 146 stimmt. 
<br>

* Sie sind kurz vor dem Ziel, das einzige, was Sie noch machen müssen, ist **Rechtsklick** auf die 'index.html' und dann auf **Open with Live Server** klicken. Jetzt startet das Programm automatisch und öffnet es in Ihrem Browser. ==(Dabei ist wichtig, dass es Google Chrome ist, andere Browser werden meistens nicht unterstützt!)==


## Structure / Aufbau



## Future Work

Was noch fehlt, und was die nächsten Schritte wären, um es ggf. umzusetzen:
* Das Ganze anhand von einem richtigen Prototyp umsetzen
