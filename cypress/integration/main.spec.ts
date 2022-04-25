describe('iPod dashboard 메인페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.task('getResqFilePath').then((resqPath: string) => {
      cy.waitForReact(1000, undefined, resqPath);
    });
  });

  it('처음 페이지 접근시 Profile에 포커싱이 잡힌다.', () => {
    cy.react('TabBox', { props: { title: 'Profile' } }).should('have.css', 'background-color', 'rgb(37, 42, 74)').and('have.css', 'color', 'rgb(171, 187, 210)');
  });

  it('마우스로 TabBox에 호버하면 포커싱이 해당 TabBox로 바뀌고 기존 포커싱은 해제된다.', () => {
    cy.react('TabBox', { props: { title: 'DashBoard' } }).trigger('mouseover').then(() => {
      cy.react('TabBox', { props: { title: 'DashBoard' } }).should('have.css', 'background-color', 'rgb(37, 42, 74)').and('have.css', 'color', 'rgb(171, 187, 210)');;
      cy.react('TabBox', { props: { title: 'Profile' } }).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)').and('have.css', 'color', 'rgb(37, 42, 74)');;
    })
  })

  it('메뉴 버튼을 클릭하면 새로고침된다.', () => {
    cy.react('TabBox', { props: { title: 'DashBoard' } }).trigger('mouseover');

    cy.react('MenuBtn').click({force: true}).then(() => {
      cy.react('TabBox', { props: { title: 'Profile' } }).should('have.css', 'background-color', 'rgb(37, 42, 74)').and('have.css', 'color', 'rgb(171, 187, 210)');
    });
  })
});