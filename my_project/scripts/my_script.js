
 /*
 * ******************* *
 *                     *
 *     My_script.JS    *
 *       API FILE      *
 *                     *
 * ******************* * JSON EDITOR PROJECT FOR MYSIS
 */

document.querySelector('#file').addEventListener('change', function()
{

  // on stock tout les fichiers selectionner dans un tableau avec querySelector
  var fileInput = document.querySelector('#file');
  // new instance de filereader, objet de l'API file, permet de lire un fichier
  var reader = new FileReader();

  reader.addEventListener('load', function()
  {
    var outpoutFileName = document.getElementById('result');
    var  outpoutContent = document.getElementById('content');

    outpoutFileName.innerHTML = 'Nom du fichier "' + fileInput.files[0].name + '"';
    // stock le contenu du fichier dans la var contenu, pour etre reutilisable
    contenu = reader.result;
    // on renvoi son contenu
    outpoutContent.innerHTML = contenu;
  });

  /* On utilise la methode readAsText de notre instance
    Cette methode nous permet de lire le fichier sous forme de string
    Nous choisissons cette methode car elle est plus simple a stocké et a traité
  */
  reader.readAsText(fileInput.files[0]);



});
