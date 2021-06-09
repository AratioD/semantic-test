module.exports = {
    branches: "main",
    repositoryUrl: "git@github.com:AratioD/semantic-test.git",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}