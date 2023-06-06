import BasePage from "./Base.page";

class gridPage extends BasePage {
    static get url() {
        return "/selectable"
    }
    static get clickOnGrid() {
        return cy.get("#demo-tab-grid");
    }
    static get buttonList(){
        return cy.get(".list-group-item");
    }
    static get activeButton(){
        return cy.get(".active");
    }
    static get notActiveButton() {
        return  cy.get(".list-group-item").not(".active");
    }



}
export default gridPage