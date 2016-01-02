System.register(["angular2/platform/browser", "./shell/shell.component"], function(exports_1) {
    var browser_1, shell_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (shell_component_1_1) {
                shell_component_1 = shell_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(shell_component_1.ShellComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map