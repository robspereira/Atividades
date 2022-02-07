var campos = [
    document.querySelector('#inputNome'),
    document.querySelector('#inputNota1'),
    document.querySelector('#inputNota2'),
    document.querySelector('#inputFrequencia'),
    document.querySelector('#inputFezFinal'),
    document.querySelector('#inputFinal')  
  ];
  
  
  var tbody = document.querySelector('table tbody');
  
  
  document.querySelector('.form').addEventListener('submit', function(event) {
      
     event.preventDefault();
     
     var tr = document.createElement('tr');
     
     campos.forEach(function(campo) {
         
         var td = document.createElement('td');
         td.textContent = campo.value;
         tr.appendChild(td);
     });
     
    
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[3].value = 3;
    campos[4].value = 4;
    
    campos[0].focus();
     
  });