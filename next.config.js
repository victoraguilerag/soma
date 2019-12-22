module.exports = {
    assetPrefix: process.env.NODE_ENV === "production" ? "/" : "/",
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            "/": { page: "/" }
        }
    }
}