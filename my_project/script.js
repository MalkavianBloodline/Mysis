var app = angular.module("app", []);

app.controller("listController", ["$scope","$http",
   function($scope,$http) {
      var fileInput = 'youtube.json';
      var detail = {};
      document.querySelector('#file').addEventListener('change', function()
      {
         // on stock le fichier selectionné avec querySelector
         fileInput = document.querySelector('#file');
         fileInput = fileInput.files[0].name;
         if (fileInput == 'youtube.json') {
            var label1 = document.createElement("p");
            label1.innerHTML = "Lien :";
            document.getElementById("form").appendChild(label1);
            var input1 = document.createElement("input");
            input1.type = "url";
            input1.id = "lien";
            input1.placeholder= "http://";
            document.getElementById("form").appendChild(input1);
            var label2 = document.createElement("p");
            label2.innerHTML = "Description :";
            document.getElementById("form").appendChild(label2);
            var input2 = document.createElement("textarea");
            input2.id = "description";
            document.getElementById("form").appendChild(input2);
            var label3 = document.createElement("p");
            label3.innerHTML = "Auteur :";
            document.getElementById("form").appendChild(label3);
            var input3 = document.createElement("input");
            input3.type = "text";
            input3.id = "auteur";
            document.getElementById("form").appendChild(input3);
         }
         else if (fileInput == 'forum.json') {
            var label1 = document.createElement("p");
            label1.innerHTML = "Pseudo :";
            document.getElementById("form").appendChild(label1);
            var input1 = document.createElement("input");
            input1.type = "text";
            input1.id = "pseudo";
            document.getElementById("form").appendChild(input1);
            var label2 = document.createElement("p");
            label2.innerHTML = "Mail :";
            document.getElementById("form").appendChild(label2);
            var input2 = document.createElement("input");
            input2.type = "email";
            input2.id = "mail";
            document.getElementById("form").appendChild(input2);
            var label3 = document.createElement("p");
            label3.innerHTML = "Message :";
            document.getElementById("form").appendChild(label3);
            var input3 = document.createElement("textarea");
            input3.id = "message";
            document.getElementById("form").appendChild(input3);
         }
         var submit = document.createElement("input");
         submit.type = "submit";
         submit.id = "submit";
         submit.value = "Submit";
         document.getElementById("form").appendChild(submit);
      });
      $scope.getData = function()
      {
         $http.get(fileInput).then(function (response){
            $scope.details = response.data;         
         });
      };
      $scope.submit = function()
      {
         if (fileInput == 'youtube.json') {
            detail.lien = document.getElementById('lien').value;
            detail.description = document.getElementById('description').value;
            detail.auteur = document.getElementById('auteur').value;
            $http.post('editYoutube.php', JSON.stringify(detail));
         }
         else if (fileInput == 'forum.json') {
            detail.pseudo = document.getElementById('pseudo').value;
            detail.mail = document.getElementById('mail').value;
            detail.message = document.getElementById('message').value;
            $http.post('editForum.php', JSON.stringify(detail));
         }
         alert("Send !");
         location.reload(true);
      }
   }]);