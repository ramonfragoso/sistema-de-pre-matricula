function convertToCSV(objArray) {
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
}

function matriculaToPeriodo(matricula) {

    periodo = "";
    periodo += matricula[1];
    periodo += matricula[2];
    periodo += "."
    periodo += matricula[3];
    return periodo;
}

function setPeriodo(Alunos) {

    for(let i = 0; i < Alunos.lenght; i++) {
        Alunos[i].periodo = matriculaToPeriodo(Alunos[i].matricula)
    }
}

function exportCSVFile() {

    var jsonObject = JSON.stringify(AlunosFormatados);
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
}

let Alunos = [
    {
        nome: 'José Ramon Fragoso da Silva',
        email: 'jose.ramon.silva@ccc.ufcg.edu.br',
        matricula: '116210412',
        disciplinas: 'calculo1, bd, plp',
    }
];

setPeriodo(Alunos);

var AlunosFormatados = [];

Alunos.forEach((item) => {
    AlunosFormatados.push({
        matricula: item.matricula,
        nome: item.nome,
        email: item.email,
        periodo: item.periodo,
        disciplinas: "\"" + item.disciplinas + "\""
    });
});
console.log(Alunos[0].nome)
console.log(JSON.stringify(AlunosFormatados))
