class LoginPage {

    constructor(page) {
        this.page = page;
    }

    get inputUser(){
        return this.page.locator('[name="email"]')
    }

    get inputPassword(){
        return this.page.locator ('[name="password"]')
    }

    get btnIngresar(){
        return this.page.locator ('.css-vpvbzj button')
    }

    async login (user,password){

        await this.inputUser.fill(user)
        await this.inputPassword.fill(password)
        await this.btnIngresar.click()
    }
}


module.exports = LoginPage;