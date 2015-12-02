
Polymer({
    /**
     * What component we are attached to.
     */
    is: "yhbt-header",

    /**
     * Explaining the properties of the component
     */
    properties: {

    },

    loggedIn: function(element: any, detail: any, sender: any) {
        console.log("test", element, detail, sender);
    }
});
