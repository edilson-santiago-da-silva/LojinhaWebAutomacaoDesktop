﻿function validarMensagemDeErro(mensagem){
  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, mensagem);
}

function fecharMensagemDeErro(){
  Aliases.Lojinha.dlgLojinha.btnOK.Click();
}
module.exports.validarMensagemDeErro = validarMensagemDeErro;
module.exports.fecharMensagemDeErro = fecharMensagemDeErro;