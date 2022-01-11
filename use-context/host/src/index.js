fetch('https://oseasjs.github.io/module-federation-react-state/use-context/host/applications.json')
    .then(resp => resp.json())
    .then(data => {

        window.hostUrlLocal = data.local.hostUrl
        window.navUrlLocal = data.local.navUrl
        window.storeUrlLocal = data.local.storeUrl

        window.hostUrlGithub = data.github.hostUrl
        window.navUrlGithub = data.github.navUrl
        window.storeUrlGithub = data.github.storeUrl

        import("./App")
    })
