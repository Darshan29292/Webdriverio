import PageNew from './pagenew';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get signIn () { return $("//a[contains(text(),'Sign in')]") }

    get signOut () { return $("//a[contains(text(),'Sign out')]") }
 
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signInClick () {
        await (await this.signIn).click();
    }
    async signOutClick () {
        await (await this.signOut).click();
    }
}

export default new HomePage();
