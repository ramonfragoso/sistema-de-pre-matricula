export default {
  convertToCSV: function(objArray) {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
      var str = '';
      console.log()
      for (var i = 0; i < array.length; i++) {
          var line = '';
          for (var index in array[i]) {
              if (line != '') line += ','
              line += array[i][index];
          }
          str += line + '\r\n';
      }
      return str;
  },

  matriculaToPeriodo: function(matricula) {
      return `${matricula.slice(1, 3)}.${matricula.slice(3, 4)}`;
  },

  exportCSVFile: function(alunos) {
      var jsonObject = JSON.stringify(alunos);
      var csv = this.convertToCSV(jsonObject);
      var exportedFilenmae = 'prematriculas.csv';
      var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) { // IE 10+
          navigator.msSaveBlob(blob, exportedFilenmae);
      } else {
          var link = document.createElement("a");
          if (link.download !== undefined) { // feature detection
              // Browsers that support HTML5 download attribute
              var url = URL.createObjectURL(blob);
              link.setAttribute("href", url);
              link.setAttribute("download", exportedFilenmae);
              link.style.visibility = 'hidden';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          }
      }
  },

  exportToCSV: function(alunos){
    this.exportCSVFile(alunos.map(aluno => {
      return {
        ...aluno,
        disciplinas: `"${aluno.disciplinas.map(r => r.nome).join(", ")}"`,
        periodo: this.matriculaToPeriodo(aluno.matricula)
      }
    }));
  }
}
