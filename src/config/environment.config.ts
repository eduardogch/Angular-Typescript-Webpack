export default function environmentConfig(envServiceProvider) {
    envServiceProvider.config({
        development: {
            mainUrl: "http://localhost:3001",
        },
        production: {
            mainUrl: "http://angular.com",
        }
    });
}
