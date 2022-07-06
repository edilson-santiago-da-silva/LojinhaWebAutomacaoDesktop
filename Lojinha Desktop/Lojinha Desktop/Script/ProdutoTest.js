var LoginTela = require("LoginTela");
var ListaProdutosTela = require("ListaProdutosTela");
var NovoProdutoTela = require("NovoProdutoTela");
var MensagensTela = require("MensagensTela");
var FormularioPrincipalTela = require("FormularioPrincipalTela");

function testValidarValoresZeroInvalidos()
{
  LoginTela.abrirLojinha();
  LoginTela.login("admin","admin");
  ListaProdutosTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("macbook", "000", "preto,vermelho");
  MensagensTela.validarMensagemDeErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  MensagensTela.fecharMensagemDeErro();
  FormularioPrincipalTela.fecharLojinha();
}

function testValidarValoresSeteMilEUmCentavoInvalidos()
{
  LoginTela.abrirLojinha();
  LoginTela.login("admin","admin");
  ListaProdutosTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("macbook", "700001", "preto,vermelho");
  MensagensTela.validarMensagemDeErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  MensagensTela.fecharMensagemDeErro();
  FormularioPrincipalTela.fecharLojinha();
}
