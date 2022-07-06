function submeterNovoProdutoComErro(nome, valor, cores){
  // preenchendo os dados do produto
  let formularioAdicaoproduto = Aliases.Lojinha.frmPrincipal.PageControl1.TabSheet3.Panel6;
  formularioAdicaoproduto.edtNovoNomeProduto.SetText(nome);
  formularioAdicaoproduto.edtNovoValorProduto.SetText(valor);
  formularioAdicaoproduto.edtNovoCoresProduto.SetText(cores);
  
  // Pressionar o botão de adição
  formularioAdicaoproduto.btnSalvarProduto.Click();
}
module.exports.submeterNovoProdutoComErro = submeterNovoProdutoComErro;