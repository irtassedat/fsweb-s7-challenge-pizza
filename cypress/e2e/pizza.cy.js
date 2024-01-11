describe('Anasayfa Testi', () => {
  it('Order Pizza butonuna tıklanabiliyor ve /pizza sayfasına yönlendiriyor', () => {
    cy.visit('/'); 
    cy.get('#order-pizza').click(); 
    cy.url().should('include', '/pizza');
  });
});

/*
describe('Pizza Sipariş Formu Gönderme Testi', () => {
  it('Form başarıyla gönderiliyor', () => {
    cy.visit('/pizza'); // Pizza sipariş sayfasını aç
    // Form alanlarını doldur (gerekirse yukarıdaki gibi)
    cy.get('#order-button').click(); // Sipariş ver butonuna tıkla
    // Burada, formun başarıyla gönderildiğini kontrol etmek için ek kontroller yapabilirsiniz.
    // Örneğin, bir başarı mesajı veya yönlendirme kontrolü yapılabilir.
  });
});
*/