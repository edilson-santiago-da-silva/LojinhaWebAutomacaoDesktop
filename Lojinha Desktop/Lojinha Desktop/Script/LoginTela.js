function abrirLojinha() {
  TestedApps.Lojinha.Run();
}

function login(usuario, senha){
  // Clicando na aba de login
  Aliases.Lojinha.frmPrincipal.PageControl1.clickTab("Login");
  
  // Preenchendo o formúlario
  let formularioLogin = Aliases.Lojinha.frmPrincipal.PageControl1.TabSheet1;
  formularioLogin.edtUsuario.SetText(usuario);
  formularioLogin.edtSenha.SetText(senha);
  formularioLogin.btnEntrar.Click();
}
module.exports.abrirLojinha = abrirLojinha;
module.exports.login = login;